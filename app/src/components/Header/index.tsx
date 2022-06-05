import DropDownSort from './DropDownSort';
import SearchBox from './SearchBox';

export function Header() {

    return (
        <header className="w-full flex items-center justify-end mx-auto shadow-lg h-20 px-6 mt-4 rounded-2xl">
            <SearchBox />
            <DropDownSort />
        </header >
    );
}