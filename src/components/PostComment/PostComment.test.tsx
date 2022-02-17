import React from "react";
import { render, screen } from "@testing-library/react";
import PostComment, { IPostCommentProps } from "./";

const mockData: IPostCommentProps = {
  body: "Mock body",
  id: 1,
  postId: 1,
  email: "mock@test.com",
  name: "Mock name",
};

it("should be able to render the PostComponent", () => {
  render(<PostComment {...mockData} />);

  expect(screen.getByText("Mock body")).toBeTruthy();
  expect(screen.getByText("mock@test.com")).toBeTruthy();
});
