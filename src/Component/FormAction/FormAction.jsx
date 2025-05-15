import React from "react";

const handleAction = (formData) => {
  console.log(formData.get("name"));
  console.log(formData.get("email"));
};
const FormAction = () => {
  return (
    <div className="mx-auto container  justify-center my-8">
      <form action={handleAction}>
        <input
          type="text"
          name="name"
          placeholder="Type here"
          className="input"
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input"
        />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
