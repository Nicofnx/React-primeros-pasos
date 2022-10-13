import Contador from "../components/Contador";
import ListCards from "../components/ListCards";
import Calculadora from "../components/Calculadora";
import "./Home.css";



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
    </>
  );
};


export default Home;