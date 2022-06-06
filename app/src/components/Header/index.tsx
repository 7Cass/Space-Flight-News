import DropDownSort from './DropDownSort';
import SearchBox from './SearchBox';

export function Header() {

    return (
        <header className="w-full flex items-center justify-end shadow h-24 px-6">
            <SearchBox />
            <DropDownSort />
        </header >
    );
}