"use client";
import { useState } from "react";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export interface Product {
  productName: string;
  productReview: string;
  productType: string;
  productLoaction: string;
}
export interface ProductList {
  products: Product[];
}

export default function Home() {
  const [product, setProduct] = useState<Product[]>([
    {
      productName: "Product A",
      productReview: "Bhai shera food",
      productType: "BANGALI-BHAI",
      productLoaction: "Dhaka",
    },
    {
      productName: "Product B",
      productReview: "Bhai eta bhallagenai",
      productType: "BRITISH-BHAI",
      productLoaction: "England",
    },
  ]);

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        {/* <Navbar/> */}
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <Header />
          {/* HEADER */}
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard products={product} />
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
