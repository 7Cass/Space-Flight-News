import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBox() {
    const [search, setSearch] = useState('');

    return (
        <label htmlFor="search" className="relative">
            <button onClick={() => console.log(search)} className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FiSearch className="w-5 h-5 text-gray-400" />
            </button>
            <input onChange={e => setSearch(e.target.value)} value={search} type="text" name="search" id="search" className="w-full py-2 pl-4 pr-10 rounded-md text-black dark:text-gray-300 bg-white dark:bg-gray-800 border dark:border-gray-600 focus:border-purple focus:outline-none" placeholder="Search" />
        </label>
    );
}