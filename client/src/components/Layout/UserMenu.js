import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div class="list-group">
          <div>
            <h4>Dashboard</h4>
            <NavLink
              to="/dashboard/users/profile"
              className="list-group-item list-group-item-action "
              aria-current="true"
            >
              Profile
            </NavLink>
            <NavLink
              to="/dashboard/users/orders"
              className="list-group-item list-group-item-action "
            >
              Orders
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
