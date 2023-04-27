import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Pizza = lazy(() => import("../../pages/PizzaPage/PizzaPage"));
const Cart = lazy(() => import("../../pages/CartPage/CartPage"));
const NotFound = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Pizza />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
