import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import MedicationsPage from "@/pages/MedicationsPage";
import MedicationDetailsPage from "@/pages/MedicationDetailsPage";
import AboutPage from "@/pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "medications",
        element: <MedicationsPage />,
      },
      {
        path: "medications/:slug",
        element: <MedicationDetailsPage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
    ],
  },
]);
