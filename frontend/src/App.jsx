import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MenHomePage from "./pages/menhome";
import WomenHomePage from "./pages/womenhome";
import JuniorHomePage from "./pages/juniorhome";
import Admin from "./pages/Admin";
import MenFootwearCollection from "./pages/MenFootwearCollection";
import ProductDetail from "./pages/ProductDetail";


function App() {

  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />
      <Routes>
        <Route path="/" element={<MenHomePage />} />

        <Route path="/pages/menhome" element={<MenHomePage />} />

        <Route path="/pages/womenhome" element={<WomenHomePage />} />

        <Route path="/pages/juniorhome" element={<JuniorHomePage />} />
        <Route path="/collections/men-footwear" element={<MenFootwearCollection />} />
        <Route path="/collections/men-footwear/products/:id" element={<ProductDetail />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
