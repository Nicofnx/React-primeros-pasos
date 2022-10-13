import Boton from './Boton';
import './Contador.css';
import { useState } from 'react';


function Contador(){

  const [clicks, setClicks] = useState(0);
  
  const sumarClicks = () => {
    setClicks(clicks + 1);
    
  };

  const resetClicks = () => {
    setClicks(0);
  };

  return(
    <>
      <div className="box-contador">
        <div className="box-number">
          <p className="number">{clicks}</p>
        </div>
        <Boton
          name = 'Clicks'
          style = {{style:'click'}}
          funcion = {sumarClicks}
          
        />
        <Boton
          name = 'Reset'
          style = {{style: 'reset'}}
          funcion = {resetClicks}
          
        />
        
      </div>
    </>
  );
};

export default Contador;