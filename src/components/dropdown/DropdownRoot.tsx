import 'animate.css'
import { ReactNode } from 'react'
import { useDropdown } from '@/contexts/DropDownContext'
import styles from './dropdown.module.scss'

type DropDownRootType = {
    children: ReactNode
}

export function DropdownRoot({ children }: DropDownRootType) {

    const dropdownContext = useDropdown();
    
    function handleDropDown() {
        dropdownContext?.setDrop(!dropdownContext.drop)
    }

    return (
        <div className={`${styles.Dropdown}`} onClick={handleDropDown}>
            {children}
        </div >
    )
}