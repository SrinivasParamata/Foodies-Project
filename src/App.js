import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootL from "./Components/Root/RootL";
import Home from "./Components/Home/Home";
import MealsPage , {mealLoaderData} from "./Components/Home/Meals";
import CommunityPage from "./Components/Community/Community";
import MealsPrev from '../src/Components/Meals/MealsData/MealsPrev';
import ShareMealPage , { mealActionData } from "./Components/Share/page";
import ErrorPage from "./Components/notFound/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <RootL />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "Meals",
          loader : mealLoaderData,
          element: <MealsPage />,
          children: [{ path: ":slug", element: <MealsPrev /> },
          { path: "share", element: <ShareMealPage /> , action : mealActionData},
          ],
        },
        { path: "community", element: <CommunityPage /> },
      ],
      errorElement : <ErrorPage/>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
