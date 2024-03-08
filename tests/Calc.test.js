// FILEPATH: /home/oianlucas/Documents/code/calculator/components/Calc.test.js
import { render, fireEvent, screen } from '@testing-library/react';
import Calc from '../components/Calc.js'

describe('Calc', () => {
  test('renders Calc component', () => {
    render(<Calc />);
    expect(screen.getByText('CE')).toBeInTheDocument();
  });

  test('handlePress function works correctly', () => {
    render(<Calc />);
    fireEvent.click(screen.getByText('7'));
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  test('calculate function works correctly', () => {
    render(<Calc />);
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('8'));
    // Assuming you have a "=" button to trigger the calculate function
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('56')).toBeInTheDocument();
  });

  test('clearResult function works correctly', () => {
    render(<Calc />);
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('CE'));
    // Assuming the result is displayed in an element with the text "result"
    expect(screen.getByText('result')).toHaveTextContent('');
  });

  test('clearHistory function works correctly', () => {
    render(<Calc />);
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('='));
    fireEvent.click(screen.getByText('CE'));
    // Assuming the history is displayed in an element with the text "history"
    expect(screen.getByText('history')).toHaveTextContent('');
  });
});