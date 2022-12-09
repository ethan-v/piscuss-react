import React from "react"
import styles from "./sidebar.module.scss"

const Sidebar = () => {

    return (
        <div className={`${styles.Sidebar} pt-2`}>
            <ul>
                <li><a className={styles.LinkActive}>All Threads</a></li>
                <li><a>Channels</a></li>
                <li><a>Popular This Week</a></li>
                <li><a>Popular All Time</a></li>
                <li><a>Solved</a></li>
                <li><a>Unsolved</a></li>
                <li><a>No Replies Yet</a></li>
                <li><a>Leaderboard</a></li>
            </ul>
        </div>
    )
}

export default Sidebar