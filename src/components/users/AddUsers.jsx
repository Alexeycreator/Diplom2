import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
    midname: "",
    lastname: "",
    age: "",
  });

  const { userName, password, email, midname, lastname, age } = user;
  const ouInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 ms-auto shadow p-5">
        <h2 className="text-center mb-4"> Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your username"
              name="userName"
              value={userName}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your password"
              name="password"
              value={password}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your email"
              name="email"
              value={email}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your midname"
              name="midname"
              value={midname}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your lastname"
              name="lastname"
              value={lastname}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your age"
              name="age"
              value={age}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
