'use client'
import styles from './styles/styles.module.scss'

type MobileBtnType = {
    isOpen: boolean;
    setIsOpen: () => void;
}

export function HeaderMobileButton({ isOpen, setIsOpen }: MobileBtnType) {

    return (
        <div onClick={setIsOpen} className={styles.HeaderMobileBtnWrapper}>
            <div className={`${styles.burger} ${isOpen ? styles.openBurger : ''}`}></div>
        </div>
    )
}