import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { PRODUCT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(PRODUCT_API);
      const json = await response.json();

      setAllProducts(json);
      setFilteredProducts(json);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  if (!onlineStatus) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1>🔴 Looks like you're offline!</h1>
        <p>Please check you internet connection adn try again.</p>
      </div>
    );
  }

  if (allProducts.length === 0) {
    return (
      <div className="body">
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const matched = allProducts.filter((product) =>
                product.title.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredProducts(matched);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const topRated = allProducts.filter(
              (product) => product.rating?.rate >= 4.0,
            );
            setFilteredProducts(topRated);
          }}
        >
          Top Rated
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setFilteredProducts(allProducts);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>

      <h2>Featured Products</h2>
      <div className="product-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
