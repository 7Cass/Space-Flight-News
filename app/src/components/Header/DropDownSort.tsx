import { useState } from 'react';
import { FaSort } from 'react-icons/fa'

export default function DropDownSort() {
    const [open, setOpen] = useState<boolean>(false);
    const [sortBy, setSortBy] = useState<string>('');

    const toggleDropDown = () => {
        setOpen(!open);
    }

    const handleDropDownSelection = (item: string) => {
        setSortBy(item);

        setOpen(!open);
    }

    return (
        <div className="relative inline-block mr-4 ml-10 w-full min-w-[8rem] max-w-[8rem]">
            <button onClick={toggleDropDown} className="relative z-10 flex w-full items-center justify-between py-2 px-4 rounded-md text-black dark:text-gray-300 bg-white dark:bg-gray-800 border dark:border-gray-600 focus:outline-none">
                <span className="mx-1">Sort</span>
                <FaSort className="text-gray-400" />
            </button>

            {open && (
                <div className="absolute right-0 z-20 w-full mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                    <button onClick={() => handleDropDownSelection('Mais antigas')} className="w-full rounded-t-md border border-gray-200 block px-4 py-3 text-sm text-black transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Mais antigas
                    </button>
                    <button onClick={() => handleDropDownSelection('Mais novas')} className="w-full rounded-b-md border border-gray-200 block px-4 py-3 text-sm text-black transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Mais novas
                    </button>
                </div>
            )}
        </div >
    );
}