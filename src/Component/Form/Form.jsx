import React from "react";

const Form = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div className=" flex justify-center my-6 ">
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder="enter name" />
        <br />
        <input
          className=""
          type="text"
          name="email"
          placeholder="enter email"
        />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
