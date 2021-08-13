import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "src/utils/test-utils";
import { CreatePost } from "../CreatePost";

describe("render testing", () => {
  it("should have the heading", () => {
    render(<CreatePost />);
    const headingElement = screen.getByRole("heading", { name: "Create a Post" });
    expect(headingElement).toBeInTheDocument();
  });

  it("should have 2 input-text fields", () => {
    render(<CreatePost />);
    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements.length).toBe(2);
  });

  describe("input fields", () => {
    test("should have a title field", () => {
      render(<CreatePost />);
      const titleField = screen.getByRole("textbox", { name: "Title" });
      expect(titleField).toBeInTheDocument();
    });

    test("should have a content field", () => {
      render(<CreatePost />);
      const contentField = screen.getByRole("textbox", { name: "Content" });
      expect(contentField).toBeInTheDocument();
    });
  });

  test("should have a submit button", () => {
    render(<CreatePost />);
    const submitButton = screen.getByRole("button", { name: "Create Post" });
    expect(submitButton).toBeInTheDocument();
  });
});

describe("should be able to type into the fields", () => {
  test("should get the value from title field", async () => {
    render(<CreatePost />);
    const titleField = screen.getByRole("textbox", { name: "Title" });
    userEvent.type(titleField, "this is the title");
    await waitFor(() => expect(titleField).toHaveValue("this is the title"));
  });

  test("should get the value from content field", async () => {
    render(<CreatePost />);
    const contentField = screen.getByRole("textbox", { name: "Content" });
    userEvent.type(contentField, "Here is the content");
    await waitFor(() => expect(contentField).toHaveValue("Here is the content"));
  });
});

// test("submit form should open confirm dialog", async () => {
//   userLoginRender(<CreatePost />);

//   const titleField = screen.getByRole("textbox", { name: "Title" });
//   const contentField = screen.getByRole("textbox", { name: "Content" });
//   const submitButton = screen.getByRole("button", { name: "Create Post" });

//   userEvent.type(titleField, "this is the title");
//   userEvent.type(contentField, "here is the content");
//   userEvent.click(submitButton);

//   const dialogElement = screen.getByRole("dialog");
//   await waitFor(() => {
//     expect(titleField).toHaveValue("this is the title");
//     expect(contentField).toHaveValue("here is the content");
//     expect(dialogElement).toBeInTheDocument();
//   });
// });
