import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test('Greet renders correctly', () => {
  render(<Greet />);

  const greetText = screen.getByText('Hello world');
  expect(greetText).toBeInTheDocument();
})