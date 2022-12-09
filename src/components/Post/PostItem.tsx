import React from "react"
import styles from "./post.module.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

library.add(faEye)

export interface PostItemProps {
    id: string
    title:  string
    content:  string
    created_at: string
    posted_at: string
    view_count: number
    reply_count: number
    replied_at: string
    replied_by: string
    topic: {
        name: string
    },
    author: {
        name: string
        level: number
        avatar: string
    },
    leader_board: {
        top: number
    }
}

const PostItem = (post: PostItemProps) => {

    console.log("PostItem:", post);

    return (
        <div className={`${styles.PostItem} my-3`}>
            <div className={styles.AuthorAvatar}>
                <img src={post.author.avatar} />
                <span className={styles.AuthorLevel}>Level {post.author.level}</span> 
            </div>
            <div className={styles.PostInnerRight}>
                <div className="row">
                    <h3 className={`col ${styles.PostTitle}`}>
                        <span>{post.title}</span>
                    </h3>
                    <span className={`col-auto ${styles.PostCount}`}>
                        <span className={styles.PostViewCount}><FontAwesomeIcon icon={faEye} /> {post.view_count}</span>
                        <span className={styles.PostReplyCount}><FontAwesomeIcon icon={faComment} /> {post.reply_count}</span>
                        <span className={styles.PostTopic} title={`Topic: ${post.topic.name}`}>
                            <Link to={"#"}>{post.topic.name}</Link>
                        </span>
                    </span>
                </div>
                <p className={styles.PostDate}>
                    <span>Posted at {post.posted_at}</span>
                    <span className={styles.PostReplyBy}>
                        <Link to={"#"}>{post.replied_by}</Link> replied {post.replied_at}
                    </span>
                </p>
                <p className={styles.PostContent}>{post.content}</p>
            </div>
        </div>
    )
}

export default PostItem