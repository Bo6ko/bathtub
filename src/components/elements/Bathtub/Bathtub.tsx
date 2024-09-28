import { useEffect, useRef, useState } from 'react';
import Button from '../../common/Button/Button';
import css from './Bathtub.module.css';
import { disabledBtn, enabledBtn } from '../../../utils/utils';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MIN_WATER_LEVEL = 0;
const MAX_WATER_LEVEL = 5;

const Bathtub = () => {
  const [bathtubLevels, setBathtubLevels] = useState<JSX.Element[]>([]);

  const btnIncreaseRef = useRef<HTMLButtonElement>(null);
  const btnDecreaseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    disabledBtn(btnDecreaseRef);
  }, []);

  const increaseWaterLevel = async () => {
    disabledBtn(btnIncreaseRef);
    await delay(2000);

    setBathtubLevels((prevBathtubLevels) => {
      const waterLevel: number = prevBathtubLevels.length + 1;
      const newBathtubLevels = [
        <div key={waterLevel} className={css.level}>Level {waterLevel}</div>,
        ...prevBathtubLevels
      ];

      (waterLevel > MIN_WATER_LEVEL && waterLevel < MAX_WATER_LEVEL) && increaseWaterLevel(); 
      waterLevel === MAX_WATER_LEVEL && enabledBtn(btnDecreaseRef);

      return newBathtubLevels;
    });
  }

  const decreaseWaterLevel = async () => {
    disabledBtn(btnDecreaseRef);
    await delay(2000);

    setBathtubLevels((prevBathtubLevels) => {
      const newBathtubLevels = prevBathtubLevels.slice(1);
      const waterLevel: number = newBathtubLevels.length;

      (waterLevel !== MIN_WATER_LEVEL) && decreaseWaterLevel(); 
      waterLevel === MIN_WATER_LEVEL && enabledBtn(btnIncreaseRef);

      return newBathtubLevels;
    });
  }

  return (
    <>
      <div className={css.bathtub}>
        {bathtubLevels}
      </div>

      <Button ref={btnIncreaseRef} onClick={increaseWaterLevel}>Increase the water level</Button>
      <Button ref={btnDecreaseRef} onClick={decreaseWaterLevel}>Decrease the water level</Button>
    </>
  );
};

export default Bathtub;