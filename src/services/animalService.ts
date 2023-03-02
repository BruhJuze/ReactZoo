import axios from "axios";
import { IAnimal } from "../models/IAnimal";
import { IAnimalSmall } from "../models/IAnimalSmall";

export const getAnimals = async (): Promise<IAnimalSmall[]> => {
  let response = await axios.get<IAnimalSmall[]>(
    "https://animals.azurewebsites.net/api/animals"
  );

  return response.data;
};

export const getAnimalsById = async (id: number) => {
  let response = await axios.get<IAnimal>(
    "https://animals.azurewebsites.net/api/animals" + id
  );

  return response.data;
};

