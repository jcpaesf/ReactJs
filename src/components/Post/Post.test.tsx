import React from "react";
import { render, screen } from "@testing-library/react";
import Post, { IPostProps } from "./";

const mockData: IPostProps = {
  body: "Mock body",
  id: 1,
  title: "Mock title",
  userId: 1,
};

it("should be able to render the Post component", () => {
  render(<Post {...mockData} />);

  expect(screen.getByText("Load comments")).toBeTruthy();
  expect(screen.getByText("Mock body")).toBeTruthy();
  expect(screen.getByText("Mock title")).toBeTruthy();
});
