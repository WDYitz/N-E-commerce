import { ReactNode } from "react";
import styles from './cart.module.scss'

export function RootCart({ children }: { children: ReactNode }) {
    return (
        <div className={styles.Rootcart}>
            {children}
        </div>
    )
}