import { useEffect, useState } from "react";
import { PRODUCTS_API } from "./constants";

const useProductDetail = (productId) => {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(PRODUCTS_API + productId);
      const json = await response.json();
      setProductInfo(json);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return productInfo;
};

export default useProductDetail;
