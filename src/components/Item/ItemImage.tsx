/* eslint-disable @next/next/no-img-element */
import styles from './item.module.scss'

type Prop = {
    imgURL: string;
    ImageDescription: string;
}

export function ItemImage({ imgURL, ImageDescription }: Prop) {
    return (
        <>
            <img src={imgURL} loading='lazy' alt={ImageDescription} className={styles.ItemImg} />
        </>
    )
}