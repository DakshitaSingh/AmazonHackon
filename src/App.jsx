import {ScrollRestoration} from "react-router-dom";

import "./App.css";
import "slick-carousel/slick/slick.css";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import {productsData} from "./api/api";
import SignIn from "./pages/SignIn";
import Registration from "./pages/Registration";
import {Cart} from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import ComingSoon from "./pages/ComingSoon";
import Returns from "./pages/Returns";
import Wishlist from "./pages/Wishlist";
import NoRoute from "./pages/NoRoute";
import AboutUs from "./pages/AboutUs";
import CustomerStories from "./pages/CustomerStories";
import CustomerService from "./pages/CustomerService";
import Account from "./pages/Account";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import ShopGreen from './pages/ShopGreen';
import UserDashboard from './pages/UserDashboard';
import EcoProductDetail from './pages/EcoProductDetail';

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />} loader={productsData}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/product-details/:id" element={<ProductDetails />}></Route>
          <Route path="/coming-soon" element={<ComingSoon />}></Route>
          <Route path="/returns&order" element={<Returns />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/customer-service" element={<CustomerService />}></Route>
          <Route path="/customer-stories" element={<CustomerStories />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />}></Route>
           <Route path="/products/:productId" element={<EcoProductDetail />} />
        </Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-success" element={<OrderSuccess />} />

        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/:unknown" element={<NoRoute />}></Route>
        
<Route path="/shop-green" element={<ShopGreen />} />
   <Route path="/mystore" element={<UserDashboard />} />
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
