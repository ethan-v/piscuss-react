import React from "react"
import AdsBanner, { IAdsBannerProps } from "src/components/AdsBanner/AdsBanner"
import styles from "./rightbar.module.scss"

const Rightbar = () => {

    const adsBanner: IAdsBannerProps = {
        name: 'default',
        link: 'https://m.do.co/c/6874db31b475',
    } 

    return (
        <div className={styles.Rightbar}>
            <div className="my-3">
                <AdsBanner {...adsBanner} />
            </div>
        </div>
    )
}

export default Rightbar