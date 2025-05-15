import React, { useRef } from "react";

const UncontroledForm = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input ref={emailRef} type="" name="email" placeholder="email" />
        <br />

        <input
        ref={passwordRef}
          required
          type="password"
          name="password"
          placeholder="password"
        />
        <br />
        <input  type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UncontroledForm;
