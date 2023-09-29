'use client'
import styles from './styles/styles.module.scss'
import { ReactNode } from "react";

type RootHeaderType = {
    children: ReactNode;
}

export function RootHeader({ children }: RootHeaderType) {
    return (
        <div className={styles.RootHeaderWrapper}>
            {children}
        </div>
    )
}