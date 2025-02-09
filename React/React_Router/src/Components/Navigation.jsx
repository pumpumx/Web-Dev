import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div className='w-full h-[10vh] bg-gray-100 flex items-center justify-around px-10'>
            <div>
                <img
                    src="./src/assets/Logo.png" 
                    alt="Logo"
                    width={50}
                />
            </div>
            <div className='flex gap-5 text-lg font-bold m-10'>
                <ul className='flex gap-5'>
                    <li>
                        <NavLink
                            to="/home"
                            style={({ isActive }) => ({
                                color: isActive ? "orange" : "black",
                            })}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            style={({ isActive }) => ({
                                color: isActive ? "orange" : "black",
                            })}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            style={({ isActive }) => ({
                                color: isActive ? "orange" : "black",
                            })}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/github"
                            style={({ isActive }) => ({
                                color: isActive ? "orange" : "black",
                            })}
                        >
                            Github
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex px-10 gap-4'>
                <ul className='flex gap-4'>
                    <li>
                        <NavLink to="/"
                        >
                            <button type="button" className='bg-blue-600 w-[4rem] h-[2rem] rounded-md font-bold hover:bg-blue-400'>Login</button>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/"
                        >
                            <button type="button" className='bg-blue-600 w-[4rem] h-[2rem] rounded-md font-bold hover:bg-blue-200'  >Signup</button>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;