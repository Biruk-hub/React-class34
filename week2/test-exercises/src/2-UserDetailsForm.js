import { useState } from "react";

function UserDetailsForm({ initialUserValues, onSubmit }) {
  const [firstName, setFirstName] = useState(initialUserValues.firstName);
  const [lastName, setLastName] = useState(initialUserValues.lastName);
  const [role, setRole] = useState(initialUserValues.role);

  return (
    <div>
      <label>
        First name:
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          name="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <button
        type="submit"
        onClick={() => {
          onSubmit({ firstName: firstName, lastName: lastName, role: role });
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default UserDetailsForm;
