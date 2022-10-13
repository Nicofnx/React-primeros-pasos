import "./Card.css";

function Card(props){
  const {name, img, work, text} = props;
  
  return(
    <div className="box">
      <div className="box__img">
        <img src={require(`../images/testimonio-${img}.jpg`)} alt={`Foto de la persona que da el testimonio ${name}`} />
      </div>
      <div className="box__text">
        <p className="name_person">{name}</p>
        <p className="work-person">{work}</p>
        <p className="text">"{text}"</p>
      </div>
    </div>
  );
};



export default Card;