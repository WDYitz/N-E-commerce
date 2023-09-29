import styles from './item.module.scss'

type Prop = {
    title: string;
}

export function ItemTitle({ title }: Prop) {
    return (
        <>
            <h2 className={styles.ItemTittle}>{title}</h2>
        </>
    )
}