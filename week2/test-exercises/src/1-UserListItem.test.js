import { render, screen } from "@testing-library/react";
import UserListItem from "./1-UserListItem";

const testUser = {
  firstName: "John",
  lastName: "Doe",
  role: "Admin",
};

describe("UserListItem", () => {
  test('Render the UserListItem in the dom', () => {
    render(<UserListItem user={testUser} />);
    const liElement = screen.getByRole("listitem");
    expect(liElement).toBeInTheDocument();
  });
  test('Render the UserListItem with the given props', () => {
    render(<UserListItem user={testUser} />);
    const liElement = screen.getByText('John Doe (Admin)');
    expect(liElement).toBeInTheDocument();
  });
  test('Throw error when rendering UserListItem with out props', () => {
    expect(() => {
      render(<UserListItem />);
    }).toThrow();
  })
});
