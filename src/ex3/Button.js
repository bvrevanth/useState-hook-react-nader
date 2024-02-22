import React from "react";

const Button = ({ setIsLogedIn, isLogedIn }) => {
  const submitButton = () => {
    // if (isLogedIn === "Logged In") {
    //   setIsLogedIn("Logged Out");
    // } else {
    //   setIsLogedIn("Logged In");
    // }
    setIsLogedIn((isLogedIn) =>
      isLogedIn === "Logged In" ? "Logged Out" : "Logged In"
    );
  };
  return (
    <div>
      <button onClick={submitButton}>Toggle Login</button>
    </div>
  );
};

export default Button;
