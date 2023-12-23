import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Product from "./pages/product/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
