import { useContext, createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

type DropDownType = {
    drop: boolean;
    option: string;
    filter: string;
    setDrop: Dispatch<SetStateAction<boolean>>
    setOption: Dispatch<SetStateAction<string>>
    setFilter: Dispatch<SetStateAction<string>>
}

type DropDownTypeProvider = {
    children: ReactNode;
}

const DropdownContext = createContext<DropDownType | null>(null);

export function DropdownProvider({ children }: DropDownTypeProvider) {
    const [drop, setDrop] = useState(false);
    const [option, setOption] = useState('');
    const [filter, setFilter] = useState('phone');

    return (
        <DropdownContext.Provider value={{ drop, setDrop, option, setOption, filter, setFilter }}>
            {children}
        </DropdownContext.Provider>
    )
}

export function useDropdown() {
    return useContext(DropdownContext);
}
