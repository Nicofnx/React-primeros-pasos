import Boton from "./Boton";
import "./Calculadora.css";
import "./Boton.css";
import { useState } from "react";
import { evaluate, round} from "mathjs";


function Calculadora() {

  const [input, setInput] = useState('') ;

  const agregarValue = (e) => {
    input === 'Err' 
    ? setInput('') 
    : input.length < 14 
      ? setInput(input + e.target.value) 
      : error()
  };

  const error = () => {
    setInput('Err');
    alert ('Error, Supero la cantidad de digitos permitidos')
  }

  const resolver = () => {
    input === '' ?setInput('') :setInput(round(evaluate(input),10));

  };

  const handlerClear = () => {
    setInput('');
  };



  return (
    <div className="box-calculadora"> 
      <div className="fila">
        <div className="input">
          {input}
        </div>
      </div>
      <div className="fila">
        <Boton          
          style = {{style:'number'}}
          funcion = {agregarValue}
        >1
        </Boton>
        <Boton          
          style = {{style:'number'}}
          funcion = {agregarValue}
        >2
        </Boton>
        <Boton
          style = {{style:'number'}}
          funcion = {agregarValue}
        >3
        </Boton>
        <Boton
          style = {{style:'operador'}}
          funcion = {agregarValue}
        >+
        </Boton>
      </div>
      <div className="fila">
      <Boton          
          style = {{style:'number'}}
          funcion = {agregarValue}
        >4
        </Boton>
        <Boton          
          style = {{style:'number'}}
          funcion = {agregarValue}
        >5
        </Boton>
        <Boton
          style = {{style:'number'}}
          funcion = {agregarValue}
        >6
        </Boton>
        <Boton
          style = {{style:'operador'}}
          funcion = {agregarValue}
        >-
        </Boton>
      </div>
      <div className="fila">
      <Boton          
          style = {{style:'number'}}
          funcion = {agregarValue}
        >7
        </Boton>
        <Boton          
          style = {{style:'number'}}
          funcion = {agregarValue}
        >8
        </Boton>
        <Boton
          style = {{style:'number'}}
          funcion = {agregarValue}
        >9
        </Boton>
        <Boton
          style = {{style:'operador'}}
          funcion = {agregarValue}
        >*
        </Boton>
      </div>
      <div className="fila">
      <Boton          
          style = {{style:'number'}}
          funcion = {resolver}
        >=
        </Boton>
        <Boton          
          style = {{style:'number'}}
          funcion = {agregarValue}
        >0
        </Boton>
        <Boton
          style = {{style:'number'}}
          funcion = {agregarValue}
        >.
        </Boton>
        <Boton
          style = {{style:'operador'}}
          funcion = {agregarValue}
        >/
        </Boton>
      </div>
      <div className="fila">
      <Boton
          style = {{style:'clear'}}
          funcion = {handlerClear}
        >Clear
        </Boton>
      </div>
    </div>
  )
}

export default Calculadora;