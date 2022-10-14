import Boton from "../Boton"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'


const Formulario = (props) => {

  const {onSubmit} = props

  const [input, setInput] = useState('')

  const manejarCambio= (e) => {    
    //console.log('Escribiendo...')
    setInput(e.target.value) 
    
  }

  const manejarEnvio = (e) => {
    e.preventDefault();
    //console.log('Enviando Formulario')
    
    const tareaNueva = {
      id:uuidv4(),
      tarea: input,
      completada: false
    }
    onSubmit(tareaNueva);
    e.target.reset()
  }
  

  return(
    <form 
      className="box-input"
      onSubmit={manejarEnvio}
      >
      <input 
        id="ingresoTarea" 
        type="text" 
        name="tarea" 
        placeholder="Escribe una tarea..."
        onChange={manejarCambio}
        />
      <Boton
      name = 'Agregar tarea'
      style = {{style: 'agregarTarea'}}
      
      >
      </Boton>
    </form>
  )
}

export default Formulario