import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider.jsx";

const Navbar = () => {

    const { user, loading, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-tourists-spot">All Tourist Spots</NavLink></li>
        <li><NavLink to="/add-tourists-spot">Add Tourist Spot</NavLink></li>
        <li><NavLink to="/my-list">My List</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
    </>

    // Handle sign-out
    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log("User signed out");
            })
            .catch(error => {
                console.error("Sign out error:", error);
            });
    };

    // Placeholder while loading
    if (loading) {
        return (
            <h2>Loading...</h2>
        );
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl lg:text-4xl font-bold text-[#00308E] p-0">Travel <span className="text-teal-500">Tide</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex flex-row-reverse">
                            <button onClick={handleSignOut} className="btn bg-[#00308E] text-white font-bold">Sign Out</button>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-1 lg:mr-2 tooltip tooltip-left flex justify-center" data-tip={user.displayName || "User"}>
                                <div className="w-10 rounded-full">
                                    <img
                                        alt={user.displayName || "User Avatar"}
                                        src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                    />
                                </div>
                            </div>
                        </div>
                        :
                        <Link to="/login">
                            <button className="btn bg-[#00308E] text-white font-bold">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;