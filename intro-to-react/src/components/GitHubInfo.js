import React, { useState } from 'react'
import axios from 'axios';

function GitHubInfo() {
    const [userid, setUserid] = useState('')

    function search(e) {
        e.preventDefault();

        // fetch(`https://api.github.com/users/${userid}`)
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))


        axios.get(`https://api.github.com/users/${userid}`)
            .then(data => console.log('data', data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={search}>
                <input placeholder='Enter GitHub id' onChange={(e) => setUserid(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default GitHubInfo