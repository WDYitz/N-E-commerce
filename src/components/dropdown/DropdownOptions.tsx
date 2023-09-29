import { useDropdown } from '@/contexts/DropDownContext'
import styles from './dropdown.module.scss'

const dropDownInfo = [
    { value: 'phone', title: 'Smart Phones' },
    { value: 'smartWatch', title: 'Smart Watch' },
    { value: 'audio', title: 'Headphones' },
    { value: 'tablet', title: 'tablet' }
];

export function DropdownOptions() {

    const dropdownContext = useDropdown();

    return (
        <ul className={`${styles.DropdownSlide}  ${dropdownContext?.drop ? styles.dropOpen : ''} `}>
            {dropDownInfo.map((item, index) => (
                <li key={index} onClick={() => dropdownContext?.setFilter(item.value)}> {item.title} </li>
            ))}
        </ul>
    )
}