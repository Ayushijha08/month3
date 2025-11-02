import React, { useEffect, useState } from 'react'

function UseEffectComp() {
    const [num, setNum] = useState(0);

    useEffect(() => {    // useEfect expects two arguments -> 1. callback function 2. dependency array
        if(num % 2 === 0) {
            setNum(Number(num) + 1)
        }
    }, [num])  // dependency array
  return (
    <div>
        <input type='number' value={num} onChange={(e) => setNum(e.target.value)} />
    </div>
  )
}

export default UseEffectComp