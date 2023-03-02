import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AnimalDetails } from "./components/AnimalDetails/AnimalDetails";
import { Animals } from "./components/Animals/Animals";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/animals",
          element: <Animals />,
        },
        {
          path: "/animal/:id",
          element: <AnimalDetails />,
        },
      ],
    },
  ]);