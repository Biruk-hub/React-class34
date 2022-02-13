import { render, screen } from "@testing-library/react";

import UserListItem from "./1-UserListItem";

/**
 * UserListItem is a very simple component that places the data given into an <li> element.
 * For a simple component like this the main thing to check is that all of the data that is
 * given to the component is actually being shown on the screen as that is what the user interacts with.
 */

// You can use this object as the props to send. By putting it outside of the `describe` function we make it available for every test.
// This makes it easier to update all of the tests if the main component changes
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
