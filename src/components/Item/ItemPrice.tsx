import styles from './item.module.scss'

type Prop = {
    price: number;
}

export function ItemPrice({ price }: Prop) {
    return (
        <>
            <p className={styles.ItemPrice}>R$ {price}</p>
        </>
    )
}