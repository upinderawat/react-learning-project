import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      props.onError("Invalid Input", "Username or age can't be empty!!");
      return;
    }
    if (+age < 1) {
      //'+' ensures it is a number
      props.onError("Invalid Input", "Age can't be less than 1");
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      username,
      age,
    };
    props.onAddUser(newUser);
    // console.log(username);
    // console.log(age);
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(() => {
      return event.target.value;
    });
  };

  const ageChangeHandler = (event) => {
    setAge(() => {
      return event.target.value;
    });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        ></input>

        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          value={age}
          type="number"
          onChange={ageChangeHandler}
        ></input>

        <Button type="submit">Add User</Button>
        {/* <button type="submit">Add User</button> */}
      </form>
    </Card>
  );
};
export default AddUser;
