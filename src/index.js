import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Hero from "./Components/Hero/Hero";
import HomePage from "./Components/pages/HomePage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
