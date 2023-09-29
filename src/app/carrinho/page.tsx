'use client'
import { Cart } from '@/components/cart/index.tsx'
import styles from './carrinho.module.scss'
import { useCart } from '@/contexts/CartContext.tsx'


export default function Home() {

    const cartContext = useCart()

    function totalprice() {
        let sum: number = 0;
        cartContext?.item.map(item => sum += item.price)
        return sum;
    }

    return (
        <div className={styles.carrinhoWrapper}>
            <Cart.Root>
                <Cart.Item />
                <Cart.Total total={totalprice()} />
            </Cart.Root>
        </div>
    )
}
