import { NavLink } from "react-router-dom";
import "./sidebar.css"

// export const Sidebar =()=>{
//     return(<div>
//         <ul className="sidebarcontainer">
//             <li  className="sidebar-items">Home</li>
//             <li className="sidebar-items">About</li>
//             <li className="sidebar-items">Contact</li>
//             <li className="sidebar-items">Skills</li>
//             <li className="sidebar-items">Projects</li>
//         </ul>
//     </div>)
// }


export const Sidebar = () => {
  return (
    <>
      {/* Top Navbar */}
      {/* <nav className="navbar navbar-dark bg-dark fixed-top d-md-none">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand">My Portfolio</span>
        </div>
      </nav> */}

      {/* Offcanvas Sidebar */}
      {/* <div
        className="offcanvas offcanvas-start text-bg-dark d-md-none"
        tabIndex="-1"
        id="sidebar"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="nav flex-column gap-2">
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div> */}

       <div className="bg-dark text-white vh-100 w-25">
        <h4 className="text-center">My Portfolio</h4>
        <hr />

        <ul className="nav flex-column gap-2 itmes-center">
          <li>
            <NavLink className="nav-link text-white sidebarfont" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="nav-link text-white" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="nav-link text-white" to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};



