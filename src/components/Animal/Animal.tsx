import { useNavigate } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { IAnimalSmall } from "../../models/IAnimalSmall";
import "./Animal.scss";

interface IAnimalProps {
    animal: IAnimal;
  }
  
  export const Animal = (props: IAnimalProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
      let lastFed = new Date();
      let b = new Date();
      localStorage.lastFed = lastFed;
      localStorage.b = b;
   
      
    }

    const showMoreClick = () => {
      alert(props.animal.longDescription);
    };
  

    return (
      <>
        <div className="animal">
          <h4>{props.animal.name}</h4>
          <div className="image-container" onClick={showMoreClick}>
            <img src={props.animal.imageUrl} alt={props.animal.name} loading="lazy" />
          </div>
          <ul>
            <li>{props.animal.shortDescription}</li>
            <li>Latinnamn: {props.animal.latinName}</li>
            <li>Mediciner: {props.animal.medicine}</li>
            <li>Matad: {props.animal.isFed}</li>
            <li>Senast matad: {JSON.stringify(props.animal.LastFed)}</li>
          </ul>
          <button onClick={handleClick}>Mata</button>
        </div>
      </>
    );

  };