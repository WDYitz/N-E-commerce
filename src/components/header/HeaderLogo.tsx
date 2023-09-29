/* eslint-disable @next/next/no-img-element */
'use client'
import styles from './styles/styles.module.scss'

export function HeaderLogo() {
    return (
        <div className={styles.HeaderLogoWrapper}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/3393/3393948.png"
                alt='logo atom'
                className={styles.HeaderLogoImage}
            />
        </div>
    )
}