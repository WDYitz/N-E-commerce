/* eslint-disable @next/next/no-img-element */
import { useCart } from '@/contexts/CartContext'
import styles from './cart.module.scss'
import { BsFillTrash3Fill } from 'react-icons/bs'

export function CartItem() {
    const cartContext = useCart();

    function RemoveItem(id: number) {
        cartContext?.dispatchItem({
            type: 'REMOVE_ITEM',
            payload: {
                id: id,
            }
        })
    }

    return (
        <div className={styles.CartItem}>
            {
                cartContext?.item.map((item, index) => (
                    <ul key={index}>
                        <div>
                            <img src={item.image} alt={item.description} style={{ width: 120, height: 120, margin: 'auto' }} />
                            <li>{item.name}</li>
                            <li>{item.description}</li>
                        </div>
                        <li>R$ {item.price}</li>
                        <li>Categoria: {item.category}</li>
                        <button onClick={() => RemoveItem(item.id)}><BsFillTrash3Fill size={22} color={'white'} /></button>
                    </ul>
                ))
            }
        </div>
    )
}