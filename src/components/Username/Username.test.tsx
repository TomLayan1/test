import { render, screen } from "@testing-library/react";
import Username from "./Username";

// Username component should render welcome
// If a name is passed, it should render welcme followed by the name

test('Should render username component with Welcome', () => {
  render(<Username />);

  const textEkement = screen.getByText('Welcome');
  expect(textEkement).toBeInTheDocument();
})

test('Should render the username if a name is passed', () => {
  render(<Username username="Tomisin" />)

  const textElement = screen.getByText('Welcome, Tomisin');
  expect(textElement).toBeInTheDocument();
})