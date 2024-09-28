import { lazy } from 'react';
const Bathtub = lazy(() => import('../../components/elements/Bathtub/Bathtub'));

const Home = () => {
  return (
    <div className='container'>
      <Bathtub />
    </div>
  );
};

export default Home;