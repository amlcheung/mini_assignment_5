import { useState } from "react";

import './App';
import './Square.css';

function Square(props) {

    const[color, setColor] = useState(props.square);

    function clickedOn() {
        if (color === 'box-white') {
            setColor('box-black');
            props.onClick(props.count + 1);
        } else {
            setColor('box-white');
            props.onClick(props.count - 1);
        }
    }

    return (
        <div onClick={clickedOn} className={color}>
        </div>
    )
}

export default Square;