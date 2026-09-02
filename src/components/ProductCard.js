import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const { productData } = props;

  const { id, title, price, category, image, rating } = productData;

  return (
    <Link
      to={`/products/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="product-card">
        <img className="product-image" alt={title} src={image} />
        <div>
          <h4 className="product-title">{title.slice(0, 35)}...</h4>
          <p className="product-category">{category}</p>
          <p className="product-price">₹ {Math.round(price * 83)}</p>
          <p className="product-rating">
            ⭐ {rating?.rate} ({rating?.count} reviews)
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
