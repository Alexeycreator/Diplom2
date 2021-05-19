import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
    midname: "",
    lastname: "",
    age: "",
    emailLogin: "",
    serisEmail: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to home
      </Link>
      <h1 className="display-4"> User id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">userName: {user.userName}</li>
        <li className="list-group-item">password: {user.password}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">midname: {user.midname}</li>
        <li className="list-group-item">lastname: {user.lastname}</li>
        <li className="list-group-item">age: {user.age}</li>
      </ul>
    </div>
  );
};

export default User;
