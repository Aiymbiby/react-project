import React from "react";
import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container">
      <h2>Profile</h2>

      <Link to="orders">Orders</Link>

      <Outlet />
    </div>
  );
};

export default Profile;