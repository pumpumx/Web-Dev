import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div className='w-full h-[10vh] bg-red-500 flex items-center'>
            <span >
                <img
                    src=""
                    alt=""
                    style={{

                    }}
                ></img>
            </span>
            <span className='flex gap-5 text-lg font-bold m-10'>
                <ul>
                    <li>
                        <NavLink to="/home"
                        style={({isActive})=>({
                            color: isActive?"orange":"Black"
                        })}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About"
                        style={({isActive})=>({
                            color: isActive?"orange":"Black"
                        })}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact"
                        style={({isActive})=>({
                            color: isActive?"orange":"Black"
                        })}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Github"
                        style={({isActive})=>({
                            color: isActive?"orange":"Black"
                        })}
                        >
                            Github
                        </NavLink>
                    </li>
                   
                </ul>
            </span>
        </div>
    )
}

export default Navigation