import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import { HomePage } from "./pages/HomePage";
import { MexchangeCaseStudy } from "./pages/MexchangeCaseStudy";
import { ApexCaseStudy } from "./pages/ApexCaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects/mexchange",
        element: <MexchangeCaseStudy />,
      },
      {
        path: "projects/apex",
        element: <ApexCaseStudy />,
      },
    ],
  },
]);