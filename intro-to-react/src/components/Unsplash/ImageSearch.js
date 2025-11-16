import axios from 'axios';
import React, { useState } from 'react'

function ImageSearch({ setImageResults }) {
    const [search, setSearch] = useState('')
    console.log('MY_ACCESS_KEY', process.env.MY_ACCESS_KEY);
    
    function handleSearch(e) {
        e.preventDefault();
        if (search) {
            axios.get(`https://api.unsplash.com/search/photos?query=${search}`, {
                headers: { 'Authorization': `Client-ID ${process.env.MY_ACCESS_KEY}` }
            }
            ).then(response => setImageResults(response.data.results))
        }
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSearch} className='form'>
                <input placeholder='Search for images' value={search} onChange={(e) => setSearch(e.target.value)} style={{height: '30px', width: '400px', borderRadius: '5px'}} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default ImageSearch