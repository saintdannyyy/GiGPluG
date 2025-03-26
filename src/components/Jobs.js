import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Card } from "./ui/card";
import Cookies from "js-cookie";
import customAxios from "@/lib/customAxios";

const ProductList = ({
  onProductClick,
  onProductDoubleClick,
  setProductQuantities,
  products,
}) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://zest-backend.onrender.com/api/order/initialize",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list grid grid-cols-5">
      {products.map((product, index) => {
        return (
          <ProductCard
            key={product._id}
            product={product}
            productImage={product.images[0] ?? "default-image-path.jpg"}
            productName={product.name}
            productPrice={product.retail_price}
            availability={product.stock}
            onClick={onProductClick}
            onDoubleClick={onProductDoubleClick}
            setProductQuantities={setProductQuantities}
          />
          // <p onClick={() => onProductClick(product)}>{product.name}</p>
        );
      })}
      {products.length === 0 && (
        <Card className="bg-red-500 w-36 h-28 flex items-center justify-center">
          <p className="font-bold text-center text-white p-2">
            No products found
          </p>
        </Card>
      )}
      <style jsx>{`
        .product-list {
          display: grid;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 10px;
          gap: 5px;
          justify-items: center;
          align-items: center;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
