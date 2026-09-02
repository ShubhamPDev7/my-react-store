import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
      );

      const json = await response.json();
      setProductInfo(json);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  if (productInfo === null) {
    return (
      <div className="body">
        <Shimmer />
      </div>
    );
  }

  const { title, image, price, description, category, rating } = productInfo;

  return (
    <div className="product-detail-container">
      <Link to="/" className="back-link">
        ← Back to all products
      </Link>
      <div className="product-detail-card">
        <div className="product-detail-image-wrapper">
          <img className="product-detail-image" src={image} alt={title} />
        </div>
        <div className="product-detail-info">
          <span className="product-detail-category">{category}</span>
          <h1 className="product-detail-title">{title}</h1>

          <div className="product-detail-rating">
            <span>⭐ {rating?.rate}</span>
            <span className="rating-count">
              ({rating?.rate} customer reviews)
            </span>
          </div>
          <h2 className="product-detail-price">₹ {Math.round(price * 83)}</h2>
          <p className="product-detail-desc">{description}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
