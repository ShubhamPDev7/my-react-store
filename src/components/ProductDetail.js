import useProductDetail from "../utils/useProductDetail";
import { useParams, Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const ProductDetail = () => {
  const { productId } = useParams();

  const productInfo = useProductDetail(productId);

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
              ({rating?.count} customer reviews)
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
