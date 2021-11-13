import "./App.css";
import Products from "./components/Products/Products";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function App() {
  const api = axios.create({
    baseURL: "http://fakestoreapi.com/products/",
  });

  const [products, setProducts] = useState([]);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredImage, setEnteredImage] = useState("");

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

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setEnteredDescription(e.target.value);
  };
  const imageChangeHandler = (e) => {
    setEnteredImage(e.target.value);
  };
  const categoryChangeHandler = (e) => {
    setEnteredCategory(e.target.value);
  };

  const submitProductHandler = async (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      title: enteredTitle,
      price: enteredPrice,
      description: enteredDescription,
      category: enteredCategory,
      image: enteredImage,
      rating: {
        rate: 0,
        count: 0,
      },
    };

    try {
      const allProducts = [...products, newProduct];
      setProducts(allProducts);
      const response = await api.post("", newProduct);
      console.log(response);
      setEnteredTitle("");
      setEnteredPrice("");
      setEnteredDescription("");
      setEnteredCategory("");
      setEnteredImage("");
    } catch (error) {
      console.log(error);
    }
  };

  const httpDeleteProductHandler = async (id) => {
    // console.log("delete", id);
    try {
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
      const response = await api.delete(`/${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const httpLikeProductHandler = async (id) => {
    // console.log("like", id);
    let prodRate;
    let prodCount;
    try {
      const newProducts = products.map((product) => {
        if (product.id !== id) {
          return product;
        }
        prodRate = product.rating.rate;
        prodCount = parseInt(product.rating.count) + 1;
        return {
          ...product,
          rating: {
            rate: prodRate,
            count: prodCount,
          },
        };
      });
      setProducts(newProducts);
      const response = await api.patch(`/${id}`, {
        rating: {
          rate: prodRate,
          count: prodCount,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div>
        <form className="products-form" onSubmit={submitProductHandler}>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
            placeholder="Product title"
            autoComplete="off"
          />
          <input
            onChange={priceChangeHandler}
            value={enteredPrice}
            type="text"
            placeholder="Product price"
            autoComplete="off"
          />
          <input
            onChange={descriptionChangeHandler}
            value={enteredDescription}
            type="text"
            placeholder="Product description"
            autoComplete="off"
          />
          <input
            onChange={imageChangeHandler}
            value={enteredImage}
            type="text"
            placeholder="Product image"
            autoComplete="off"
          />
          <select onChange={categoryChangeHandler} value={enteredCategory}>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
          <button className="btn">Submit</button>
        </form>
      </div>
      <Products
        products={products}
        deleteProduct={httpDeleteProductHandler}
        likeProduct={httpLikeProductHandler}
      />
    </div>
  );
}

export default App;
