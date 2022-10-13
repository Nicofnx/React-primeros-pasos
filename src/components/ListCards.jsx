import Card from "./Card";
import data from "../Utilities/objetoPersonas";

function ListCards(){
  return(
    <>
    <Card      
        name={data[0].namee}
        img={data[0].img}
        work={data[0].work}
        text={data[0].text}    
       />
      <Card
        name={data[1].namee}
        img={data[1].img}
        work={data[1].work}
        text={data[1].text}       
        />
      <Card
        name={data[2].namee}
        img={data[2].img}
        work={data[2].work}
        text={data[2].text}
      />
    </>
  );
};

export default ListCards;