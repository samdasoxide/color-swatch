import { render, screen } from '@testing-library/react';
import App from './App';

test('renders A Cool Random Swatch Generator', () => {
  render(<App />);
  const linkElement = screen.getByText(/A Cool Random Swatch Generator/i);
  expect(linkElement).toBeInTheDocument();
});
