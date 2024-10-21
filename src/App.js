import React, { useState } from 'react';
import './App.css';
import wizard from './Img/wizard.gif';



console.log(wizard,">>>>>>>>>>")

const App = () => {
  const [position, setPosition] = useState({ top: 100, left: 100 });
  const [facingRight, setFacingRight] = useState(true);

  const handleClick = (e) => {
    const clickX = e.clientX;
    console.log(clickX,"clickXXXXXXXXXXXXX")

    const clickY = e.clientY;
    console.log(clickY,"clickYyyyyyyyyyy")
    
    setPosition({ top: clickY, left: clickX });

    setFacingRight(clickX > position.left); 
  };

  return (
    <div className="container" onClick={handleClick}>
      <img
        src={wizard}
        alt="wizard"
        className={`wizard ${facingRight ? 'right' : 'left'}`}
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      />
    </div>
  );
};

export default App;
