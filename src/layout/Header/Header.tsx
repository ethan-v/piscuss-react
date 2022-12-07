import React from "react"
import { Link } from "react-router-dom"
import styles from "./header.module.scss"

const Header = () => {

    return (
        <>
            <header className={styles.SiteHeader}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/messages">Messages (Dashboard)</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header