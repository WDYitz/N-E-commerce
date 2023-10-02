import Link from 'next/link';
import styles from './styles/styles.module.scss'
import 'animate.css';

export function HeaderLinks({ isOpen }: { isOpen: boolean }) {
    const AnimationLeft = 'animate__animated animate__fadeInLeftBig animate__faster'

    return (
        <ul className={`${styles.HeaderRoutes} ${AnimationLeft} ${isOpen ? styles.opened : ''}`} >
            <li>
                <Link href="/" className={styles.HeaderLink}>Home</Link>
            </li>
            <li>
                <Link href="/carrinho" className={styles.HeaderLink}>Carrinho</Link>
            </li>
        </ul>
    )
}