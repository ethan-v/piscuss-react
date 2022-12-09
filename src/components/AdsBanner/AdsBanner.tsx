import React from "react"
import defaultAdsImage from "src/assets/images/ads-digitalocean.jpg"
import styles from "./ads-banner.module.scss"

export interface IAdsBannerProps {
    name: string;
    link: string;
}

const AdsBanner = (props: IAdsBannerProps) => {
    let img = ''
    console.log(props);
    switch (props.name) {
        case 'default':
            img = defaultAdsImage
            break;
        default:
            break;
    }

    return (
        <div className={styles.AdsBanner}>
            {img ? <img className="rounded-2" src={img} alt="Ads" /> : 'Not found banner'}
        </div>
    )
}

export default AdsBanner