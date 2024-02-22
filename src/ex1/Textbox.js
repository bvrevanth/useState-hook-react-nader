import React, { useState } from "react";

const Textbox = () => {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>Read here : {text}</h1>
      <input onChange={handleText} type="text" />
    </div>
  );
};

export default Textbox;
