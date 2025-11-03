import React, { useState } from 'react'

function Location() {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [hemisphere, setHemisphere] = useState('');
    const [month, setMonth] = useState("");
    
    function getLocation() {
        // console.log('navigator', navigator);
        navigator.geolocation.getCurrentPosition((position) => {
           // position -> object which contains coords object
           // coords -> object which contains latitude and longitude
           // latitude and longitude are in decimal format
           console.log('position', position);
           const { latitude, longitude } = position.coords;
           console.log(latitude, longitude);
           
           setLatitude(latitude);
           setLongitude(longitude);

            if(latitude > 0) {
                setHemisphere('Northern');
            } else if(latitude < 0) {
                setHemisphere('Southern');
            } else {
                setHemisphere('Equator');
            }

            setMonth(new Date().getMonth() + 1); // getMonth() returns month from 0-11
        })
    }

    return (
        <div>
            <h1>Latitude: {latitude}, Longitude: {longitude}</h1>
            <h1>Month: {month}</h1>
            <h2>You are in the {hemisphere} hemisphere</h2>
            <button onClick={getLocation}>Get Location</button>
        </div>
    )
}

export default Location