// import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen, userLoginRender } from "src/utils/test-utils";
import { Posts } from "../Posts";

describe("rendering posts & delete + edit btns", () => {
  test("should render the posts", async () => {
    render(<Posts />);
    const postElements = await screen.findAllByRole("article");
    expect(postElements.length).not.toBe(0);
    // expect(postElements.length).toBe(8);
  });

  test("some posts by user should have a delete button", async () => {
    userLoginRender(<Posts />);
    const deleteButtons = await screen.findAllByRole("button", { name: "delete" });
    expect(deleteButtons.length).not.toBe(0);
    // expect(deleteButtons.length).toBe(2);
  });

  test("some posts by user should have an edit button", async () => {
    userLoginRender(<Posts />);
    const editButtons = await screen.findAllByRole("button", { name: "edit" });
    expect(editButtons.length).not.toBe(0);
    // expect(editButtons.length).toBe(2);
  });
});

describe("clicking fireEvent & rendering", () => {
  test("clicked delete btn open up the confirm dialog", async () => {
    userLoginRender(<Posts />);
    const deleteButtons = await screen.findAllByRole("button", { name: "delete" });
    fireEvent.click(deleteButtons[0]);
    const dialogElement = screen.getByRole("dialog");
    expect(dialogElement).toBeInTheDocument();
  });
});
