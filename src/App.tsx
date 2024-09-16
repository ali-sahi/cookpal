import "./App.css";

import { lazy, Suspense } from "react";
const RecipePage = lazy(() => import("./pages/recipe/RecipePage"));

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/homepage.tsx";
import Layout from "./layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/recipe/:id",
        element: (
          <Suspense fallback={<div>Loading Recipe Page...</div>}>
            <RecipePage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
