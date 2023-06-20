import { ChangeEvent } from 'react';
import './search-input.css';

type SearchInputProps = {
    placeholder: string;
    value: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput = ({ placeholder , value , onChangeHandler }: SearchInputProps) => (
    <input className='search-input' type="search" placeholder={placeholder} onChange={onChangeHandler}  value={value}/>
);

export default SearchInput;