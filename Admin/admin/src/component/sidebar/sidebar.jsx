import React from "react";
import "./sidebar.css";
import { assets } from "../../assets/admin_assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/Add" className="sidebar-option">
          <img src={assets.add_icon} alt="Add Item" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="List Item" />
          <p>List Item</p>
        </NavLink>
        <NavLink to="/Order" className="sidebar-option">
          <img src={assets.order_icon} alt="Order Item" />
          <p>Order Item</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
