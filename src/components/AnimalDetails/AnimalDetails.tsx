import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { getAnimalsById } from "../../services/animalService";


export const AnimalDetails = () => {
    const [animal, setAnimal] = useState<IAnimal>();
    const [error, setError] = useState("");
    

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            if (id) {
                let response = await getAnimalsById(+id);

                if (response.animal) {
                    setAnimal(response.animal);
                  } else {
                    setError(response.error);
                  }
                }
              };

        if (animal) return;

        getData();
    });

    return (
        <>
      {error !== "" ? (
        <>
          <h2>{error}</h2>
        </>
      ) : (
        <>
            <h3>{animal?.name}</h3>
            <pre>{animal?.shortDescription}</pre>
            <img src={animal?.imageUrl} alt={animal?.name} />
        </>
    )}
    </>
  );
};