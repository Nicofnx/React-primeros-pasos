
import Tarea from "./Tarea"
import './ListaTareas.css'
import Formulario from "./Formulario"
import { useState } from "react"

const ListadeTareas = () => {

  const [tareas, setTareas] = useState([])
  const [completada, setCompletada] = useState(true)


  const agregarTarea = (tarea)=> {
    
    if (tarea.tarea.trim()){
      tarea.tarea = tarea.tarea.trim();
      const tareasActualizadas = [tarea,...tareas];
      setTareas(tareasActualizadas)
    }
  }

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea=>
      tarea.id !== id
    )
    setTareas(tareasActualizadas)
  }

  const tareaCompleta = (id) =>{
    const tareasActualizadas = tareas.map(tarea=> {
      if(tarea.id === id){
        tarea.completada = !tarea.completada
      }
      return tarea;
    })
    setTareas(tareasActualizadas)
    
    
  }

  return (
    <div className="box-tareas">
      <h4>Mis tareas</h4>
      <div>
        <Formulario onSubmit={agregarTarea}/>
      </div>
      <div id="tareas" className="tareasARealizar">
        
        {
          tareas.map((tarea)=>
            
            <Tarea
            key ={tarea.id}
            id = {tarea.id}
            tarea = {tarea.tarea}
            completada = {tarea.completada}
            eliminarTarea = {eliminarTarea}
            tareaCompleta = {tareaCompleta} 
            />
          )
        }
        
        
      </div>

    </div>
  )
}

export default ListadeTareas