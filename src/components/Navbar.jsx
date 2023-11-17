import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { space } from "postcss/lib/list";
import { config } from "localforage";
import logo from '../images/logo.jpg';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user log out successfully'))
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="text-white">
            <div className="navbar bg-gray-400">
                <div className="flex-1 items-center ">
                    <Link to={'/home'}>
                        <div className="flex items-center gap-3 font-semibold">
                            <img className="w-[50px]" src={logo} alt="" />
                            <h1 className="text-3xl">HW TECH</h1>
                        </div>
                    </Link>
                </div>
                <div className="flex-none">


                    <NavLink
                        to={`/home`}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active bg-red-300 btn btn-ghost normal-case text-xl"
                                : isPending
                                    ? "pending"
                                    : "p-4"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={`/addProduct`}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active bg-red-300 btn btn-ghost normal-case text-xl"
                                : isPending
                                    ? "pending"
                                    : "p-4"
                        }
                    >
                        Add Products
                    </NavLink>

                    <NavLink
                        to={`/myCart`}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active bg-red-300 btn btn-ghost normal-case text-xl"
                                : isPending
                                    ? "pending"
                                    : "p-4"
                        }
                    >
                        My Cart
                    </NavLink>

                    <NavLink
                        to={`/ourOutlet`}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active bg-red-300 btn btn-ghost normal-case text-xl"
                                : isPending
                                    ? "pending"
                                    : "p-4"
                        }
                    >
                        Our Outlet
                    </NavLink>

                    <NavLink
                        to={`/apps`}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active bg-red-300 btn btn-ghost normal-case text-xl"
                                : isPending
                                    ? "pending"
                                    : "p-4"
                        }
                    >
                        Apps
                    </NavLink>

                    <NavLink
                        to={`/login`}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active bg-red-300 btn btn-ghost normal-case text-xl"
                                : isPending
                                    ? "pending"
                                    : "p-4"
                        }
                    >
                        <div>
                            {
                                user ? <>
                                    <span>{user.email}</span>
                                    <a onClick={handleLogOut} className="btn btn-sm">Log Out</a>
                                </>

                                    :
                                    <Link to={'/login'}>
                                        <button className="btn btn-sm">Login</button>
                                    </Link>
                            }
                        </div>
                    </NavLink>




                </div>
            </div>
        </div>
    );
};

export default Navbar;