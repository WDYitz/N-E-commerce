'use client'
import { useCart } from '@/contexts/CartContext';
import styles from './styles/styles.module.scss'
import { FaShoppingCart } from 'react-icons/fa'

type Prop = {
    openCart: () => void;
}

export function HeaderCart({ openCart }: Prop) {

    const cartContext = useCart();

    return (
        <div
            className={`${styles.HeaderCartWrapper} 
        ${'animate__animated animate__bounceInDown'}`}
            onClick={openCart}
            data-count={cartContext?.item.length}
        >
            <FaShoppingCart />
        </div>
    )
}