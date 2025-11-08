import React, { useState } from 'react'
import IconComp from '../IconComp';
import { toast } from 'react-toastify';

function Tictactoe() {

  const [arr, setArr] = useState(new Array(9).fill(""));  // ["", "", "", "", "", "", "", "", ""]
  const [winnerMsg, setwinnerMsg] = useState("");
  const [isCross, setIsCross] = useState(true); // true -> O , false ->  X

  function turns(ind) {
    console.log('turns clicked');
    if (arr[ind] !== "" || winnerMsg) {
      // console.log('index', e.target.getAttribute(index));
      
      // console.log("?", arr[e.target.key]);
      
      return;
    } else {
      arr[ind] = isCross ? "O" : "X";
      setArr([...arr]);
      setIsCross(!isCross);
      winnerCheck();
    }
  }
  console.log(isCross, arr);
  
  function winnerCheck() {
    if(winnerMsg !== "") {
      return toast.success(winnerMsg);
    }
  // horizontal checks
    if(arr[0] !== "" && arr[0] === arr[1] && arr[1] === arr[2]) {
      setwinnerMsg(`${arr[0]} won the game`);
      toast.success(`${arr[0]} won the game`);
    } else if(arr[3] !== "" && arr[3] === arr[4] && arr[4] === arr[5]) {
      setwinnerMsg(`${arr[3]} won the game`);
      toast.success(`${arr[3]} won the game`);
    } else if(arr[6] !== "" && arr[6] === arr[7] && arr[7] === arr[8]) {
      setwinnerMsg(`${arr[6]} won the game`);
      toast.success(`${arr[6]} won the game`);
      // vertical checks
    } else if(arr[0] !== "" && arr[0] === arr[3] && arr[3] === arr[6]) {
      setwinnerMsg(`${arr[0]} won the game`);
      toast.success(`${arr[0]} won the game`);
    } else if(arr[1] !== "" && arr[1] === arr[4] && arr[4] === arr[7]) {
      setwinnerMsg(`${arr[1]} won the game`);
      toast.success(`${arr[1]} won the game`);
    } else if(arr[2] !== "" && arr[2] === arr[5] && arr[5] === arr[8]) {
      setwinnerMsg(`${arr[2]} won the game`);
      toast.success(`${arr[2]} won the game`);
      // diagonal checks
    } else if(arr[0] !== "" && arr[0] === arr[4] && arr[4] === arr[8]) {
      setwinnerMsg(`${arr[0]} won the game`);
      toast.success(`${arr[0]} won the game`);
    } else if(arr[2] !== "" && arr[2] === arr[4] && arr[4] === arr[6]) {
      setwinnerMsg(`${arr[2]} won the game`);
      toast.success(`${arr[2]} won the game`);
    } else if(!arr.includes("")) { // if arr.includes("") is false  -> when it's draw
      setwinnerMsg("It's a Tie");
      toast.info("It's a Tie");
    }

  }

  function reset() {
    setArr(new Array(9).fill(""));
    setIsCross(true);
    setwinnerMsg("");
  }


  return (
    <div id='tictactoe'>
      <h1>{isCross ? "Circle turn": "Cross Turn"}</h1>
      <div className='grid'>
        {arr.map((item, index) => (
          <div key={index} onClick={() => turns(index)} >
            <IconComp item={item}/>
          </div>
        ))}
      </div>
      <button onClick={reset}>Play Again</button>
      {winnerMsg && <h2>{winnerMsg}</h2>}
    </div>
  )
}

export default Tictactoe