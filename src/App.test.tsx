import App from "./App";
import { render, screen } from "@testing-library/react";

test('Render vite and react logo links', () => {
  render(<App />);
  // Check that the vite logo renders
  const viteLogoLink = screen.getByAltText('Vite logo');
  expect(viteLogoLink).toBeInTheDocument();

  // Check that the react logo renders
  const reactLogoLink = screen.getByAltText('React logo');
  expect(reactLogoLink).toBeInTheDocument();
})