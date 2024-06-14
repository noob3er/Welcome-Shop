import {
  RouterProvider as CustomProvider,
  createBrowserRouter,
} from "react-router-dom";
import Index from "../pages";
import Man from "../pages/man";
import Shoes from "../pages/shoes";
import Cap from "../pages/cap";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    children: [
      { path: "/", element: <Index /> },
      { path: "/Man", element: <Man /> },
      { path: "/Shoes", element: <Shoes /> },
      { path: "/Cap", element: <Cap /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

export default function RouterProvider() {
  return <CustomProvider router={router}></CustomProvider>;
}
