import React, { useState } from 'react'

function ObjStateHandling() {
    const [obj, setObj] = useState({name: 'Ayushi', age: 25, city: 'Pune'});
    let {name, age, city} = obj;
    // const object = {name: 'Ayushi', age: 25, city: 'Pune', city: 'Mumbai'};
    // console.log('object', object);
    
    // function setName(e) {
    //     // setObj(e.target.value)
    //     setObj({...obj, name: e.target.value})
    // }

    function setAge(e) {
        setObj({...obj, age: e.target.value})
    }

    function setCity(e) {
        setObj({...obj, city: e.target.value})
    }
  return (
    <div>
        <h1>Name: {name} | Age: {age} | City: {city}</h1>
        <input type='text' value={name} onChange={(e) => setObj({...obj, name: e.target.value})}/>
        <input type='number' value={age} onChange={setAge}/>
        <input type='text' value={city} onChange={setCity}/>
    </div>
  )
}

export default ObjStateHandling