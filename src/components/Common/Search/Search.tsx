import React from 'react';
import { SearchTypes } from './Search.types';
import { SearchContainer, SearchInput, ClearButton, SearchIcon } from './Search.styles';
import { MdSearch, MdClose } from 'react-icons/md';

const Search: React.FC<SearchTypes> = ({ value, onChange, placeholder = 'Поиск...' }) => {
    return (
        <SearchContainer>
            <SearchIcon>
                <MdSearch />
            </SearchIcon>
            <SearchInput
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
            {value && (
                <ClearButton onClick={() => onChange('')}>
                    <MdClose />
                </ClearButton>
            )}  
        </SearchContainer>
        
    );
};
export default Search;