import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function onChangeHandler(e) {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    // console.log("I submit");
    console.log(formData.username, formData.password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter username..."
        onChange={onChangeHandler}
        value={formData.username}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password..."
        onChange={onChangeHandler}
        value={formData.password}
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
