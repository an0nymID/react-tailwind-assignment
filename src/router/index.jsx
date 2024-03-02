import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DetailProduct from "../pages/DetailProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/detail-product",
    element: <DetailProduct/>
  }
])