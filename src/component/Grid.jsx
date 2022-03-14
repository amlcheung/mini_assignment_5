import React, { useState } from 'react';

import './Grid.css';
import Square from './Square';

export default function Grid(props) {
    // set original state of box too white
 
    // need to use useState to updated the front end (as well as back end) 
    // if just use a let variable here, it will update the backend (can be shown
    // using console.log("whitebox") but it will not render (the front end won't get updated))
    
    const[count, updateCount] = useState(0);

    return(
        <div>
            <div>Count: {count}</div>
            <div class="container">
                <Square square = "box-white" onClick={updateCount} count={count}></Square>
                <Square square = "box-white" onClick={updateCount} count={count}></Square>
                <Square square = "box-white" onClick={updateCount} count={count}></Square>
                <Square square = "box-white" onClick={updateCount} count={count}></Square> 
            </div>
        </div>

      

    );
}