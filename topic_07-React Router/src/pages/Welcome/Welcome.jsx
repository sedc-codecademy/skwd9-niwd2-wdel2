import React from "react";
import { Outlet } from "react-router";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Outlet />
    </div>
  );
};

export default Welcome;
