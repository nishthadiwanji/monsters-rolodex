import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/react-native';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.findByText(/learn react/i);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
