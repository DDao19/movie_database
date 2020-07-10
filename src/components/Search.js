import React from 'react'

const Search = ({ handleInput, search }) => {
    return (
        <section className="searchbox-wrap">
            <input 
                className="search-box" 
                type="text" 
                placeholder="search movie..." 
                onChange={handleInput}
                onKeyPress={search} 
            />
        </section>
    )
}


export default Search