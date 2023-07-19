import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";



const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout=()=>{

    localStorage.removeItem('token');
    navigate('/login')
  }
let location= useLocation();
  return (
    <div>
      <nav className=" w-100 ps-3 py-2 d-inline-flex flex-row navbar-dark align-items-center justify-content-between bg-dark">
        <div className="">

        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
        </div>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="" >
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
                About
              </Link>
            </li>
          </ul> */}
          {!localStorage.getItem('token')?<form className="d-flex my-1 my-lg-0   flex-row-reverse mx-1 ">
            
          <Link className="btn btn-primary  py-1 mx-2" to="/login"  role="button">Login</Link>
          <Link className="btn btn-primary  py-1 mx-2" to="/signup" role="button">Signup</Link>
          </form>: <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
        </div>
      </nav>

     
    </div>
  );
};

export default Navbar;
