import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { getAnimalsById } from "../../services/animalService";


export const AnimalDetails = () => {
    const [animal, setAnimal] = useState<IAnimal>();

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            if (id) {
                let animal = await getAnimalsById(+id);
                setAnimal(animal);
            }
        };

        if (animal) return;

        getData();
    });

    return (
        <>
            <h3>{animal?.name}</h3>
            <pre>{animal?.shortDescription}</pre>
            <img src={animal?.imageUrl} alt={animal?.name} />
        </>
    );
};