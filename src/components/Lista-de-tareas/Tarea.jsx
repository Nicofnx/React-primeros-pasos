import './Tarea.css'



const Tarea = (props) => {

  const {id, tarea, completada, tareaCompleta, eliminarTarea} = props

  


  return(
    <div
    id={id} 
    className={completada ?"tarea completada" : 'tarea'} 
    >
      <p className='tareaCargada' onClick={()=>tareaCompleta(id)}>{tarea}</p>
      <div 
        className="btn-dltTarea"
        onClick={()=>eliminarTarea(id)}
        >
        <p className='btn-Cerrar'>X</p>
      </div>
      
    </div>
  )
}

export default Tarea