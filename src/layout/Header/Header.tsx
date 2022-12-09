import React from "react"
import { Link } from "react-router-dom"
import styles from "./header.module.scss"
import logoImage from "src/assets/images/logo.png"

const Header = () => {

    return (
        <>
            <header className={styles.SiteHeader}>
                <div className="container-xl container-lg container-xs">
                    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-5">
                        <a href="/" className="px-3">
                            <img src={logoImage} height="100" />
                        </a>

                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <Link to="/" className="nav-link px-2">Home</Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-2">Topics</Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-2">Series</Link>
                            </li>
                            <li>
                                <Link to="/" className={`nav-link px-2 active ${styles.LinkActive}`}>Forum</Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link px-2">About</Link>
                            </li>
                            {/* <li>
                                <Link to="/dashboard/messages" className="nav-link px-2">Messages (Dashboard)</Link>
                            </li> */}
                        </ul>

                        <div className="col-md-3 col-xs-12 text-end">
                            <button type="button" className="btn btn-outline-secondary me-2">Login</button>
                            <button type="button" className="btn btn-primary">Sign-up</button>
                        </div>
                    </header>
                </div>
            </header>
        </>
    )
}

export default Header