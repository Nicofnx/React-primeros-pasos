import Contador from "../components/Contador";
import ListCards from "../components/ListCards";
import Calculadora from "../components/Calculadora";
import "./Home.css";
import ListadeTareas from "../components/Lista-de-tareas/ListaTareas";



function Home() {

  return(
    <>
      <h1>Proyectos para poner en practica conceptos de React</h1>
      <h2>Cards con testimonios de experiencias en Coderhouse de algunas personas</h2>
      <ListCards/>
      <h2>Contador con clicks para practicar escuchas y estados</h2>
      <Contador/>
      <h2>Calculadora con operaciones basicas</h2>
      <Calculadora/>
      <h2>Lista de tareas a realizar (TODOLIST)</h2>
      <ListadeTareas/>
    </>
  );
};


export default Home;