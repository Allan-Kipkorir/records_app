import classes from "./AddUser.module.css";
import { useState } from "react";
import Button from "./Button";
const AddUser = (props) => {
  const [age, setAge] = useState("");
  const [userName, setUserName] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      userAge: age,
      userName: userName,
      id: Math.random().toString()
    };
    props.onAddUser(userData);
    setAge("");
    setUserName("");
  };
  return (
    <form className={classes.input} onSubmit={formSubmitHandler}>
      <label> UserName </label>
      <input type="text" onChange={userNameHandler} value={userName} />
      <label> Age </label>
      <input type="number" onChange={ageHandler} value={age} />
      <Button />
    </form>
  );
};
export default AddUser;
