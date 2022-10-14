import './Boton.css';


function Boton(props) {
  const {id, name, style, funcion, children=null} = props;
  


  return (
  
      <button
        onClick={funcion}
        className={`btn btn-${style.style}`}
        value = {children}
        >
        {name || children}
      </button>
    
  );

};
export default Boton;