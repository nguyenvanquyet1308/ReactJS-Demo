<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
=======
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
>>>>>>> 3f1fc578f42e382342434f250e631aa8c8b5bf53
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
