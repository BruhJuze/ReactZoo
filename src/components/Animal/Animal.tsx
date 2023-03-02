import { useNavigate } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { IAnimalSmall } from "../../models/IAnimalSmall";

interface IAnimalProps {
    animal: IAnimal;
  }
  
  export const Animal = (props: IAnimalProps) => {
    const navigate = useNavigate();
  

    return (
      <>
        <div className="animal">
          <h4>{props.animal.name}</h4>
          <div className="image-container">
            <img src={props.animal.imageUrl} alt={props.animal.name} />
          </div>
        </div>
      </>
    );

  };