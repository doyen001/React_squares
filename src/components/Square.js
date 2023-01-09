import React, { useEffect } from 'react';

function Square(props) {
    console.log(props.value);
      return (
        <button className="square"         
           onClick={props.onClick}
        >
          {props.value}
        </button>
      );
}

export default Square;