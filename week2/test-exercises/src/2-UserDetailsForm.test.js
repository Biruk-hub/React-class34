import { render, screen, fireEvent } from "@testing-library/react";
import UserDetailsForm from "./2-UserDetailsForm";

const testUser = {
  firstName: "John",
  lastName: "Doe",
  role: "Admin",
};
const changedUser = {
  firstName: "Mary",
  lastName: "Williams",
  role: "User",
};

describe("UserDetailsForm", () => {
  test("Correctly fills in the initial values", () => {
    render(<UserDetailsForm initialUserValues={testUser} />);
    expect(screen.getByLabelText("First name:").value).toBe(testUser.firstName);
    expect(screen.getByLabelText("Last name:").value).toBe(testUser.lastName);
    expect(screen.getByLabelText("Role:").value).toBe(testUser.role);
  });
  test("Correctly changes a fields value", () => {
    render(<UserDetailsForm initialUserValues={testUser} />);
    // change the value
    fireEvent.change(screen.getByLabelText("First name:"), {target: { value: changedUser.firstName },});
    fireEvent.change(screen.getByLabelText("Last name:"), {target: { value: changedUser.lastName },});
    fireEvent.change(screen.getByLabelText("Role:"), {target: { value: changedUser.role },});
    // check that the value has changed
    expect(screen.getByLabelText("First name:").value).toBe(changedUser.firstName);
    expect(screen.getByLabelText("Last name:").value).toBe(changedUser.lastName);
    expect(screen.getByLabelText("Role:").value).toBe(changedUser.role);
  })
  test("Submit the right values to the onSubmit function", () => {
    const onSubmit = jest.fn();
    render(<UserDetailsForm initialUserValues={testUser} onSubmit={onSubmit} />);
    // change the value
    fireEvent.change(screen.getByLabelText("First name:"), {target: { value: changedUser.firstName },});
    fireEvent.change(screen.getByLabelText("Last name:"), {target: { value: changedUser.lastName },});
    fireEvent.change(screen.getByLabelText("Role:"), {target: { value: changedUser.role },});
    // click on the submit button
    fireEvent.click(screen.getByText("Submit"));
    // check that the onSubmit function was called with the right values
    expect(onSubmit).toHaveBeenCalledWith(changedUser);
  })
});