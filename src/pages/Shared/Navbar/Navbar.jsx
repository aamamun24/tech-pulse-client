import { Link, NavLink } from "react-router-dom";
import logo from '/tech-pulse.png'

const Navbar = () => {

    const navLinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#157ED2] underline" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/add-product"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#157ED2] underline" : ""
                }
            >
                Add Product
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/my-cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#157ED2] underline" : ""
                }
            >
                My Cart
            </NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/">
                    <div className="flex items-center gap-3">
                        <img className="w-12" src={logo} alt="" />
                        <h2 className="text-xl font-bold">Tech Pulse</h2>
                    </div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-6 text-lg font-medium">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="bg-[#157ED2] py-2 px-6 rounded-lg text-white font-medium">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;