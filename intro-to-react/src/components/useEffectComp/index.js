import React, { useEffect, useState } from 'react'
import Tictactoe from '../Tictactoe';

function UseEffectComp() {
  const [num, setNum] = useState(0);
  const [products, setProducts] = useState([])

  useEffect(() => {    // useEfect expects two arguments -> 1. callback function 2. dependency array
    if (num % 2 === 0) {
      setNum(Number(num) + 1)
    }
  }, [num])  // dependency array

  function apiCall() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.log(err))
  }

  function removePTag() {
    document.getElementById('useEffectComp').remove()
  }
  // apiCall()
  useEffect(() => {
    apiCall()
  }, [])   // when the dependency array is empty, then the callback func will get invoked only once upon rendering this page for the first time.

  useEffect(() => {
    return () => {
      console.log('Element removed');
    }
  }, [])


  return (
    <div id='useEffectComp'>
      {/* <input type='number' value={num} onChange={(e) => setNum(e.target.value)} /> */}
      <div>
        {products.length > 0 && products.map(item => <p>{item.title ? item.title : item.name}</p>)}
      </div>
      <p id='hello'>Hello bro</p>
      <Tictactoe />
      <button onClick={removePTag}>Yo</button>
    </div>
  )
}

export default UseEffectComp