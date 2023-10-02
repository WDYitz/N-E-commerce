import { useDropdown } from '@/contexts/DropDownContext'
import { DropDownTypeInfo } from '@/types/DropDownTypeInfo';
import styles from './dropdown.module.scss'

const dropDownInfo: DropDownTypeInfo[] = [
    { value: 'phone', title: 'Smart Phones' },
    { value: 'smartWatch', title: 'Smart Watch' },
    { value: 'audio', title: 'Headphones' },
    { value: 'tablet', title: 'tablet' }
];

export function DropdownOptions() {

    const dropdownContext = useDropdown();

    function handleSelection(item: DropDownTypeInfo) {
        dropdownContext?.setFilter(item.value)
        dropdownContext?.setOption(item.title)
    }

    return (
        <ul className={`${styles.DropdownSlide}  ${dropdownContext?.drop ? styles.dropOpen : ''} `}>
            {dropDownInfo.map((item, index) => (
                <li key={index} onClick={() => handleSelection(item)}> {item.title} </li>
            ))}
        </ul>
    )
}