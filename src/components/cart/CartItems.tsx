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
                cartContext?.item.map((item, index) => ( // MODIFICAÇÃO NECESSARIA !!!!
                    <div key={index} className={styles.itemWrapper}>
                        <div>
                            <img
                                src={item.image}
                                alt={item.description}
                                style={{
                                    width: 100,
                                    height: 100,
                                    margin: 'auto'
                                }}
                            />
                            <div className={styles.itemInfoCart}>
                                <li>{item.name}</li>
                                <li><i>category: {item.category}</i></li>
                                <li>R$ {item.price}</li>
                            </div>
                        </div>

                        <button
                            onClick={() => RemoveItem(item.id)}>
                            <BsFillTrash3Fill size={22} color={'white'} />
                        </button>

                    </div>
                ))
            }
        </div>
    )
}