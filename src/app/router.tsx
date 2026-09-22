import { createHashRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/pages/HomePage";
import MedicationsPage from "@/pages/MedicationsPage";
import MedicationDetailsPage from "@/pages/MedicationDetailsPage";
import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import BlogDetailsPage from "@/pages/BlogDetailsPage";
import ContactPage from "@/pages/ContactPage";
import ShoppingCartPage from "@/pages/ShoppingCartPage";
import CheckoutPage from "@/pages/CheckoutPage";

export const router = createHashRouter([
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
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/why-generic-medicines-less",
        element: <BlogDetailsPage />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);
