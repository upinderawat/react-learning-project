import React, { useState } from "react";
import ErrorModal from "./components/UI/ErrorModal";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  let [usersList, setUsersList] = useState([
    { id: Math.random().toString(), username: "Upinder", age: 23 },
    { id: Math.random().toString(), username: "Mukul", age: 26 },
    { id: Math.random().toString(), username: "Bhindi", age: 26 },
  ]);
  let [error, setError] = useState();

  const addUserHandler = (newUser) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, newUser];
    });
  };
  const displayErrorHandler = (title, message) => {
    setError({
      title,
      message,
    });
  };
  const clearErrorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClear={clearErrorHandler}
        />
      )}
      <AddUser onAddUser={addUserHandler} onError={displayErrorHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
