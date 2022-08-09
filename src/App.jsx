import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom"


const App = () => {
  const user = true;
  return (<Router>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "/product" element = {<Product/>}/>
      <Route path = "/product-list" element = {<ProductList/>}/>
    </Routes>
  </Router>
  );
}

export default App;
