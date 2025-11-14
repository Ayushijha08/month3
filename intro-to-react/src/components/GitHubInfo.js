import React, { useState } from 'react'
import axios from 'axios';

function GitHubInfo() {
    const [userid, setUserid] = useState('')
    const [userInfo, setUserInfo] = useState({})

    function search(e) {
        e.preventDefault();

        // fetch(`https://api.github.com/users/${userid}`)
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))


        axios.get(`https://api.github.com/users/${userid}`)
            .then(data => setUserInfo(data.data))
            .catch(err => console.log(err))
    }

    function resetData() {
        setUserInfo({})
        setUserid('')
    }

    return (
        <div>
            <form onSubmit={search}>
                <input placeholder='Enter GitHub id' onChange={(e) => setUserid(e.target.value)} value={userid} />
                <button type='submit'>Search</button>
                <button onClick={resetData}>Clear Data</button>
            </form>

            {userInfo.avatar_url && <div id='github-info'>
                <img src={userInfo.avatar_url} alt='GitHub user image' style={{width: "350px"}} />
                <h1>GitHub name/id: {userInfo.name ?? userInfo.login}</h1>
                <h2>Follwing: {userInfo.following}</h2>
                <h2>Followers: {userInfo.followers}</h2>
                <h2>Public Repos: {userInfo.public_repos}</h2>
                Profile Link: <a href={userInfo.html_url} target='blank'>{userInfo.html_url}</a>
            </div>}
        </div>
    )
}

export default GitHubInfo