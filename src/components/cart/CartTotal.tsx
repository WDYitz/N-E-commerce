import styles from './cart.module.scss'
import 'animate.css'

export function CartTotal({ total }: { total: number }) {
    return (
        <div className={`${styles.CartTotal} ${'animate__animated animate__slideInUp animate__faster'} `}>
            <h2>R$ {total}</h2>
            <button>Confirmar</button>
        </div>
    )
}