import React, { useState } from "react";

const ControlledFiled = () => {
  const [password, setPassword] = useState();
  //   error show ui
  const [error, setError] = useState();
  //   Onchange Password
  const handleOnChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // if (value.length < 6) {
    //   setError("Password Must Have 6 Character");
    // } else {
    //   setError("");
    // }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("must have 6 character");
    } else {
      setError("");
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="" name="email" placeholder="email" />
        <br />

        <input
          onChange={handleOnChange}
          type="password"
          defaultValue={password}
          name="password"
          placeholder="password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h3 style={{ color: "red" }}>{error}</h3>
      {/* <small style={{ color: "red" }}>{error || password}</small> */}
    </>
  );
};

export default ControlledFiled;
