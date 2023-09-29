'use client'
import { ReactNode } from 'react'
import styles from './item.module.scss' 
import 'animate.css'

type Prop = {
    children: ReactNode;
}

export function RootItem({ children }: Prop) {
    return (
        <div className={`${styles.RootItem} ${'animate__animated animate__backInRight animate__faster'}`}>
            {children}
        </div>
    )
}