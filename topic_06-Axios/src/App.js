import "./App.css";
import Products from "./components/Products/Products";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function App() {
  const api = axios.create({
    baseURL: "http://fakestoreapi.com/products/",
  });

  const [products, setProducts] = useState([]);

  /*
  GET ALL PRODUCTS
  */

  const fetchProducts = useCallback(async () => {
    try {
      const response = await api.get("");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="App">
      <div>
        <form className="products-form">
          <input type="text" placeholder="Product title" autoComplete="off" />
          <input type="text" placeholder="Product title" autoComplete="off" />
          <input type="text" placeholder="Product title" autoComplete="off" />
          <input type="text" placeholder="Product title" autoComplete="off" />
          <select>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
          <button className="btn">Submit</button>
        </form>
      </div>
      <Products products={products} />
    </div>
  );
}

export default App;
