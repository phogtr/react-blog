import { render, screen } from "src/utils/test-utils";
import { NavBar } from "../NavBar";

test("renders the logo", async () => {
  render(<NavBar />);
  const logoElement = screen.getByText(/React Blog/i);
  expect(logoElement).toBeInTheDocument();
});
