/* eslint-disable @next/next/no-img-element */
import styles from './item.module.scss'
import { FaCartPlus } from 'react-icons/fa'

type Prop = {
    onClick: () => void;
}

export function ItemAddCart({ onClick }: Prop) {
    return (
        <>
            <span className={styles.addToCart} onClick={onClick}><FaCartPlus fontSize={20} color={'white'} /></span>
        </>
    )
}