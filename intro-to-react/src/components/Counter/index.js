import React from 'react'

function Counter() {
  // useState hook
  // hooks in react -> Hooks are simple javasript funtions which allows u to utilize class based features in functional components
  // There are 2 main hooks in react -> 1. useState 2. useEffect
  let count = 0

  function increaseCount() {
    count = count + 1
    console.log("Count value:", count)
  }
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increaseCount}>Increase Counter</button>
    </div>
  )
}

export default Counter