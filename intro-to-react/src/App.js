import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';
import ImageComponent from './components/ImageComponent';
import { dogArr } from './dummyData/dogData';
import Counter from './components/Counter';
import UseEffectComp from './components/useEffectComp';
import Location from './components/Location';
import ObjStateHandling from './components/ObjStateHandling';
import Tictactoe from './components/Tictactoe';
import { ToastContainer, toast } from 'react-toastify';
import ControlledComp from './components/ControlledComp';
import GitHubInfo from './components/GitHubInfo';
import CommonComponent from './components/common';

function App() {

  const app = 'Ayushi'
  const breed = 'German Shepherd'
  const [name, setname] = useState('')
  return (
    <>
    <ToastContainer />
      {/* <div>App</div>
      <h1>Hello App</h1>
      <h2>This is h2</h2> */}
      {/* <Header />
      <MainComponent />
      <Footer /> */}
      {/* <div id='image-container'> */}
        {/* <ImageComponent imageLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOBVTu1tFNzJo6yBJaHLw0UdgpjkeJm7xpyw&s' breedName='German Shepherd' /> 
        <ImageComponent imageLink={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNX5ruElvvaPwOuYJf4JrQF7Stlbumlll2Q&s'} breedName={'Husky'} /> 
        <ImageComponent imageLink={'https://thumbs.dreamstime.com/b/beagle-dog-portrait-outdoors-beautiful-37970158.jpg'} breedName={'Beagle'} />
        <ImageComponent imageLink={'https://images.unsplash.com/photo-1568315056770-f4a63027dcd3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVsbGRvZ3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000'} breedName={'Bull Dog'}/> */}
        {/* props */}

        {/* {dogArr.map((dogObj, i) => <ImageComponent id={i} imageLink={dogObj.imageLink} breedName={dogObj.breedName} />)} */}
        {/* <Counter /> */}
        {/* <Footer /> */}
        {/* <UseEffectComp /> */}
        
      {/* </div> */}
      {/* <Location /> */}
      {/* <ObjStateHandling /> */}
      {/* <Tictactoe /> */}
      {/* <ControlledComp /> */}
      {/* <GitHubInfo /> */}
      <CommonComponent comp='abc' setname={setname} />
      <div>Parent Comp: {name}</div>
    </>)
}


/*
export function App2() {  // named export
  return (
    <div>
      <h1>Hello from App2</h1>
      <p>This is a paragraph</p>
    </div>
  )
}
  */

// export default App2

export default App;  // in one file we can have only one default export


// JSX allows us to write HTML in React
// JSX makes it easier to write and add HTML in React
// JSX syntax -> JS + HTML

// JSX will not support normal 