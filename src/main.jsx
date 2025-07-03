import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";

import Home from "./Home/Home.jsx";
import Dik from "./Dik.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       <Route path="" element={<Home />} />
//       <Route path="sort" element={<SortingVisualizer />} />
//       <Route path="graph" element={<Dik />} />
//     </Route>
//   )
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
