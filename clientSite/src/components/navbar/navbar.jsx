import { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/authprovider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/all-tourist-spot">All Tourist Spot</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/add-tourist-spot">Add Tourist Spot</NavLink>
          </li>

          <li>
            <NavLink to="/my-list">My List</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="container mx-auto navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <a className="flex items-center gap-2 text-xl font-bold">
            <img src={logo} alt="" className="w-12" /> <span>AR Travels</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {user ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn mr-2 bg-red-600 hover:bg-red-700 text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="btn mr-2 bg-red-600 hover:bg-red-700 text-white"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link
                to="/register"
                className="btn bg-red-600 hover:bg-red-700 text-white"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
