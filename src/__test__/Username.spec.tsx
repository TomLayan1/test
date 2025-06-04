import { render, screen } from "@testing-library/react";
import Username from "../components/Username/Username";

describe('Username component', () => {
  it('Should render the username component and display welcome', () => {
    render(<Username />);

    const textElement = screen.getByText('Welcome');
    expect(textElement).toBeInTheDocument();
  })

  it('Should render a name if a name is passed', () => {
    render(<Username username="Tomisin" />);

    const textElement = screen.getByText('Welcome, Tomisin');
    expect(textElement).toBeInTheDocument();
  })
})