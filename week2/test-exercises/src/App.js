import React, { useState } from "react";
import UserListItem from "./1-UserListItem";
import UserDetailsForm from "./2-UserDetailsForm";
import ChuckNorrisJoke from "./3-ChuckNorrisJoke";

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    console.log(users);
    const newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    };
    setUsers([...users, newUser]);
  };
  return (
    <div>
      {users.map((user, index) => (
        <UserListItem key={index} user={user} />
      ))}
      <hr />
      <UserDetailsForm
        initialUserValues={{
          firstName: "John",
          lastName: "Doe",
          role: "Admin",
        }}
        onSubmit={addUser}
      />
      <hr />
      <ChuckNorrisJoke />
    </div>
  );
}

export default App;
