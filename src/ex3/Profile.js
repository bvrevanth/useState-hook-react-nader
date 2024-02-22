import React, { useState } from "react";
import Button from "./Button";

const Profile = () => {
  const [isLogedIn, setIsLogedIn] = useState("Logged In");

  return (
    <div>
      <p>{isLogedIn}</p>
      <Button setIsLogedIn={setIsLogedIn} isLogedIn={isLogedIn} />
    </div>
  );
};

export default Profile;
