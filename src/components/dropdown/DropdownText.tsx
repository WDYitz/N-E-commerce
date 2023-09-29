import { useDropdown } from "@/contexts/DropDownContext"

export function DropdownText() {

    const DropdownContext = useDropdown()

    return (
        <>
            {DropdownContext?.option ? DropdownContext?.option : 'Selecionar'}
        </>
    )
}