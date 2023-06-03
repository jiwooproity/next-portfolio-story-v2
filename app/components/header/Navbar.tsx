"use client";

import Link from "next/link";
import style from "./navbar.module.css";
import { useEffect } from "react";

interface MenuListIF {
  to: string;
  label: string;
}

const menuList: MenuListIF[] = [
  { to: "./home", label: "Home" },
  { to: "./porfolio", label: "Porfolio" },
  { to: "./resume", label: "Resume" },
  { to: "./contact", label: "Contact" },
];

export default function Navbar() {
  const itemRender = (value: MenuListIF) => {
    return (
      <li key={value.label} className={style.menuItem}>
        <Link href={value.to}>{value.label}</Link>
      </li>
    );
  };

  const onScroll = () => {
    const navbar = document.getElementsByClassName(style.navContainer);

    if (window.scrollY === 0) {
      navbar[0].classList.remove(style.down);
    }

    if (window.scrollY > 0) {
      console.log(window.scrollY);

      navbar[0].classList.add(style.down);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={style.navContainer}>
      <div className={style.navWrapper}>
        <h1 className={style.logo}>Web Portfolio</h1>
        <ul className={style.menu}>{menuList.map(itemRender)}</ul>
      </div>
    </nav>
  );
}
