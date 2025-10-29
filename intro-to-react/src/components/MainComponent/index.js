import CommonComponent from '../common';
import './index.css';

function MainComponent() {
  const name = "MainComponent";
  const age = 18;
  // onChange -> camel case, on_change -> snake case
  // function handleChange(e)  {
  //   console.log('Input changed:', e.target.value);
  // }
  // function handleClick() {
  //   console.log('Button clicked');
  // }
  // input.addEventListener('change', handleChange);
  return (
    <div id="main-component">
      <h1>Main-Component Component</h1>
      <p>This is main-component paragraph</p>
      <p id='name'>{name}</p>
      <div>{name}</div>
      {/* if age is greater than 18, then we will show 'You are allowed', otherwise we will show 'Not allowed' */}
      {age >= 18 ? <p>You're allowed</p> : <p>Not allowed</p>}
      {/* <CommonComponent /> */}
      <input type="text" onChange={(e) => console.log(e.target.value)} placeholder="Enter in MainComponent..." />

      
    </div>
  )
}

export default MainComponent