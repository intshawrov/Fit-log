"use client";
import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathname = usePathname();

    const activeStyle = "px-5 py-2.5 rounded-full font-semibold bg-[#28380d] text-[#ccf842]";
    const inactiveStyle = "px-5 py-2.5 rounded-full font-semibold text-slate-400 hover:text-white transition-colors";

    return (
        <div className=' border-b border-[#1C1F26]'>
            <div className="navbar container mx-auto py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/">Works Out</Link></li>
                            <li><Link href="/my-plan">My Plan</Link></li>
                        </ul>
                    </div>
                    <Image src={logo} alt="Fitlog logo" />
                    <a className="btn btn-ghost text-xl uppercase"> Fitlog</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li>
                            <Link 
                                href="/" 
                                className={pathname === "/" ? activeStyle : inactiveStyle}
                            >
                                Workouts
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/my-plan" 
                                className={pathname === "/my-plan" ? activeStyle : inactiveStyle}
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-2.5 navbar-end">
                    <a className="btn">Plan</a>
                    <a className="btn">Save</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
