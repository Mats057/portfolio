import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sobre from "./pages/Sobre.jsx";
import Projetos from "./pages/Projetos.jsx";
import Projeto from "./pages/Projeto.jsx";
import Default from "./pages/Default.jsx";
import AllInOne from "./pages/AllInOne.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AllInOne />,
      },
      {
        path: "/*",
        element: <Default />,
        children: [
          {
            path: "about",
            element: <Sobre />,
          },
          {
            path: "projects",
            element: <Projetos />,
          },
          {
            path: "project/:id",
            element: <Projeto />,
          },
          {
            path: "*",
            element: <h1>Página não encontrada</h1>,
          }
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
