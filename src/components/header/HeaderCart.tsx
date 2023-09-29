'use client'
import styles from './styles/styles.module.scss'
import { FaShoppingCart } from 'react-icons/fa'

type Prop = {
    openCart: () => void;
}

export function HeaderCart({ openCart }: Prop) {
    return (
        <div
            className={`${styles.HeaderCartWrapper} 
        ${'animate__animated animate__bounceInDown'}`}
            onClick={openCart}
        >
            <FaShoppingCart color={'#202020'}/>
        </div>
    )
}