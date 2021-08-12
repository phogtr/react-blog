import { render, screen } from "src/utils/test-utils";
import { GuessNav } from "../Auth/GuessNav";
import { UserNav } from "../Auth/UserNav";
import { NavBar } from "../NavBar";

it("renders the logo", async () => {
  render(<NavBar />);
  const logoElement = screen.getByRole("heading", { name: "React Blog" });
  expect(logoElement).toBeInTheDocument();
});

describe("Navbar links for the Guess", () => {
  it("should have 2 nav-links", async () => {
    render(<GuessNav isMobile={false} logoutBtn={() => {}} />);
    const guessNavElements = screen.getAllByRole("button");
    expect(guessNavElements.length).toBe(2);
  });

  it("the first Guess's nav-links is Login", async () => {
    render(<GuessNav isMobile={false} logoutBtn={() => {}} />);
    const firstNavLink = screen.getAllByRole("button");
    expect(firstNavLink[0]).toHaveTextContent(/Login/i);
  });

  it("the second Guess's nav-links is Regsiter", async () => {
    render(<GuessNav isMobile={false} logoutBtn={() => {}} />);
    const secondNavLink = screen.getAllByRole("button");
    expect(secondNavLink[1]).toHaveTextContent(/Register/i);
  });
});

describe("Navbar links for normal login User", () => {
  it("should have 3 nav-links", async () => {
    render(<UserNav isMobile={false} username="Bob" isAdmin={false} logoutBtn={() => {}} />);
    const UserNavElements = screen.getAllByRole("button");
    expect(UserNavElements.length).toBe(3);
  });

  it("the first User's nav-links is Create Post", async () => {
    render(<UserNav isMobile={false} username="Bob" isAdmin={false} logoutBtn={() => {}} />);
    const userFirstLink = screen.getAllByRole("button");
    expect(userFirstLink[0]).toHaveTextContent(/Create Post/i);
  });

  it("the second User's nav-links is the username", async () => {
    render(<UserNav isMobile={false} username="Bob" isAdmin={false} logoutBtn={() => {}} />);
    const userSecondLink = screen.getAllByRole("button");
    expect(userSecondLink[1]).toHaveTextContent(/Bob/i);
  });
  it("the third User's nav-links is Logout", async () => {
    render(<UserNav isMobile={false} username="Bob" isAdmin={false} logoutBtn={() => {}} />);
    const userThirdLink = screen.getAllByRole("button");
    expect(userThirdLink[2]).toHaveTextContent(/Logout/i);
  });
});

describe("Navbar links for Admin", () => {
  it("should have 4 nav-links", async () => {
    render(<UserNav isMobile={false} username="Tom" isAdmin={true} logoutBtn={() => {}} />);
    const AdminNavElements = screen.getAllByRole("button");
    expect(AdminNavElements.length).toBe(4);
  });
  it("the first nav-links for admin is Admin", async () => {
    render(<UserNav isMobile={false} username="Tom" isAdmin={true} logoutBtn={() => {}} />);
    const adminFirstLink = screen.getAllByRole("button");
    expect(adminFirstLink[0]).toHaveTextContent(/Admin/i);
  });
});
