import React, { useState } from "react";

const Form = () => {
  const [fname, setFame] = useState("");
  const [lname, setLame] = useState("");
  const [email, setEmail] = useState("");
  const [h1text, setH1text] = useState("");

  const handleFname = (e) => {
    setFame(e.target.value);
  };
  const handleLname = (e) => {
    setLame(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setH1text(fname + lname + email);
    setFame("");
    setLame("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleFname}
          value={fname}
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={handleLname}
          value={lname}
          type="text"
          placeholder="Last Name"
        />
        <input
          onChange={handleEmail}
          value={email}
          type="text"
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
      <h1>{h1text}</h1>
    </div>
  );
};

export default Form;
