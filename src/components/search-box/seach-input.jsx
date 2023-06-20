import './search-input.css';

const SearchInput = ({ placeholder , value , onChangeHandler }) => (
    <input className='search-input' type="search" placeholder={placeholder} onChange={onChangeHandler}/>
);

export default SearchInput;