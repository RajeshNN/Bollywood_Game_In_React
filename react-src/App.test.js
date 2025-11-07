<<<<<<< HEAD
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({"movie_names":{"0":"SHINGHAM"}})
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders Bollywood game app', () => {
  render(<App />);
  const linkElement1 = screen.getByAltText(/guess the movie/i);
  expect(linkElement1).toBeInTheDocument();
});

test('check if button gets disabled after click and guessing tiles remain unaffected on correct guess', async() => {
  render(<App />);
  const button = screen.getByRole('button', { name: /i/i });
  fireEvent.click(button);
  await waitFor(() => {
    
    const tile = screen.getByTestId('B');
    
    expect(button).toBeDisabled();
    expect(tile).toHaveClass('bg-success');
  })
});

test('check if button gets disabled after click and guessing tiles change on incorrect guess', async() => {
  render(<App />);
  const button = screen.getByRole('button', { name: /o/i });
  fireEvent.click(button);
  await waitFor(() => {
    
    const tile = screen.getByTestId('B');
    
    expect(button).toBeDisabled();
    expect(tile).toHaveClass('bg-secondary');
  })
});

test('check if fetched movie name is rendered properly by checking length of movie name', async () => {
  render(<App />);
  await waitFor(() => {
    const linkElement1 = screen.getAllByText(/########/i);
    expect(linkElement1[0]).toBeInTheDocument();
    expect(linkElement1.length).toBe(1);
  });
  
});

test('check if name tile changes with correct guess', async () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /m/i });
  fireEvent.click(button);
  await waitFor(() => {
    const linkElement1 = screen.getByText(/#######m/i);
    expect(linkElement1).toBeInTheDocument();
  });
  
});

=======
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
>>>>>>> cf83e39e57c96d0b446943a013acfe9e8db05f80
