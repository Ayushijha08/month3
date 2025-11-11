import React, { useState } from 'react'

function ControlledComp() {
    const [name, setName] = useState('')


    console.log('name', name);

    function reset () {
        setName('')
    }
    
  return (
    <div>
        <input name='name' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} value={name} />
        {/* <p>{input.value}</p> */}
        <h1>{name}</h1>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ControlledComp

// Controlled & Uncontrolled(limitations exists) component