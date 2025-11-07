import React, { useState } from 'react'

function Counter() {
  // useState hook
  // hooks in react -> Hooks are simple javasript funtions which allows u to utilize class based component features in functional components
  // There are 2 main hooks in react -> 1. useState 2. useEffect

  const [count, setCount] = useState(0)
  const [age, setAge] = useState('25')
  const [address, setAddress] = useState("JSR")
  // let count = 0

  // function increaseCount() {
  //   count = count + 1
  //   console.log("Count value:", count)
  // }

  function increaseCount() {
    // setCount(count + 1)  // count's initial value is 0  => 0 + 1 = 1
    // // console.log(count);  // here the count value will be same as previous value because setCount is an asynchronous function
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    // After calling setCount 4 times, React will batch these updates and only the last one will take effect.
    // So, if the initial count was 0, after clicking the button once, the count will be updated to 1, not 4.

    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  
  return (
    <div>
      <p>Counter: {count}</p>  //1
      {/* <p>Age: {age}</p>
      <button onClick={() => setAge('26')}>Increase Age</button>
      <p>Address: {address}</p>
      <button onClick={() => setAddress('Bangalore')}>Change Address</button> */}
      <button onClick={increaseCount}>Increase Counter</button> 
    </div>
  )
}

export default Counter