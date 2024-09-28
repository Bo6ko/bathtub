import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import Bathtub from '../components/elements/Bathtub/Bathtub';
import { disabledBtn, enabledBtn } from '../utils/utils';

jest.mock('../utils/utils', () => ({
  disabledBtn: jest.fn(),
  enabledBtn: jest.fn(),
}));

describe('Bathtub Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it('renders correctly', () => {
    render(<Bathtub />);
    
    // if the buttons are in the document
    expect(screen.getByText('Increase the water level')).toBeInTheDocument();
    expect(screen.getByText('Decrease the water level')).toBeInTheDocument();
  });

  it('increases water level when Increase button is clicked', async () => {
    render(<Bathtub />);

    const increaseBtn = screen.getByText('Increase the water level');
    
    act(() => {
      fireEvent.click(increaseBtn);
    });

    expect(disabledBtn).toHaveBeenCalledWith(expect.any(Object));

    await waitFor(() => {
        // Check if the button has the `disabled` attribute
        expect(increaseBtn).toBeDisabled;

        expect(screen.getByText('Level 1')).toBeInTheDocument();
        expect(screen.getByText('Level 2')).toBeInTheDocument();
        expect(screen.getByText('Level 3')).toBeInTheDocument();
        expect(screen.getByText('Level 4')).toBeInTheDocument();
        expect(screen.getByText('Level 5')).toBeInTheDocument();
        expect(enabledBtn).toHaveBeenCalledWith(expect.any(Object));
        console.log('all water levels are in the Bathtub!')
      }, {
      timeout: 11000,
    });
  });

  it('decreases water level when Decrease button is clicked', async () => {
    render(<Bathtub />);

    const decreaseBtn = screen.getByText('Decrease the water level');

    act(() => {
      fireEvent.click(decreaseBtn);
    });

    expect(disabledBtn).toHaveBeenCalledWith(expect.any(Object));

    await waitFor(() => {
        // Check if the button has the `disabled` attribute
        expect(decreaseBtn).toBeDisabled;
        expect(enabledBtn).toHaveBeenCalledWith(expect.any(Object));
        console.log('Bathtub is empty')
      }, {
      timeout: 11000,
    });
  });
});
