import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

//Pages
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import PageNotFound from "./pages/404";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
