import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to={"/"}>
                    <img src="/src/assets/react.svg" alt="logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/all-card"}>All cards</Link>
                    </li>
                    <li>
                        <Link to={"/one-card"}>1 card</Link>
                    </li>
                    <li>
                        <Link to={"/three-card"}>3 cards</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
