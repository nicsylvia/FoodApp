import React from "react";
import { Header } from "../../blocks";
import { Outlet } from "react-router-dom";

const HomeLayouts = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HomeLayouts;
