import React from 'react'
import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa";

function IconComp({item}) {
    console.log('item in Icon Comp', item);
    
    switch(item) {
        case "X":
            return <div class='icon'><ImCross /></div>
        case "O":
            return <div class='icon'><FaRegCircle /></div>
        default:
            return null;
    }
}

export default IconComp