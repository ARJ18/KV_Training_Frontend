import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        to=""
        className={({ isActive }) =>
         isActive ? "active" : "pending"
        }
      >
        <div className="sidebar-box">Employee list</div>
      </NavLink>
      <NavLink
        to="create"
        className={({ isActive }) =>
          isActive ? "active" : "pending"
         }
      >
        <div className="sidebar-box">Create Employee</div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
