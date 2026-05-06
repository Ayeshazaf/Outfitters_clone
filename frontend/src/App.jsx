// "use client";
// import Footer from "./components/Footer";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/products/")
//       .then(res => setProducts(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <>
//     <div style={{ padding: "20px" }}>
//       <h1>Outfitters Clone</h1>

//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(3, 1fr)",
//         gap: "20px"
//       }}>
//         {products.map(p => (
//           <div key={p.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
//             <img src={p.image} width="100%" />
//             <h3>{p.name}</h3>
//             <p>Rs {p.price}</p>
//           </div>
//         ))}
//       </div>
      
//     </div>
//     {/* <Footer /> */}
//     </>
//   );
// }


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;