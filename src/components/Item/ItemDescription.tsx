/* eslint-disable @next/next/no-img-element */
import styles from './item.module.scss'

type Prop = {
    description?: string;
}

export function ItemDescription({ description }: Prop) {
    return (
        <>
            <p className={styles.ItemDescription}>{description}</p>
        </>
    )
}