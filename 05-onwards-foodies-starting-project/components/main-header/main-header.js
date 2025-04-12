'use client';
import Link from "next/link";
import logoImg from '@/assets/logo.png'
import { FaBars } from 'react-icons/fa';
import classes from './main-header.module.css'
import Image from "next/image";
import { useState } from 'react';
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
    return(
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food" priority/>
        <span>
         NextLevel Food
        </span>
        </Link>

        <button
        className={classes.burger}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <FaBars />
      </button>
      <nav className={`${classes.nav} ${isMenuOpen ? classes.open : ''}`}>
            <ul>
                <li>
                <NavLink href="/meals">Browse Meals</NavLink>
                </li>
                <li>
                <NavLink href="/community">Foodie Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
    )
}