import Link from "next/link";
import style from "./navbar.module.css";

interface MenuListIF {
    to: string,
    label: string,
}

const menuList: MenuListIF[] = [
    { to: './home', label: 'Home' },
    { to: './resume', label: 'Resume' },
    { to: './contact', label: 'Contact' },
]

export default function Navbar() {
    const itemRender = (value: MenuListIF) => {
        return (
            <li key={value.label} className={style.menuItem}>
                <Link href={value.to}>{value.label}</Link>
            </li>
        )
    };

    return (
        <nav className={style.navContainer}>
            <div className={style.navWrapper}>
                <h1 className={style.logo}>Web Portfolio</h1>
                <ul className={style.menu}>
                    {menuList.map(itemRender)}
                </ul>
            </div>
        </nav>
    )
}