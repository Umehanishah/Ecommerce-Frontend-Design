import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 10,
    name: "Wrest Watch",
    description: "4.5/5",
    price: 210,
    image: "/img-14.png",
  },
  {
    id: 11,
    name: "Camera",
    description: "4.5/5",
    price: 210,
    image: "/img-15.jpg",
  },
  {
    id: 12,
    name: "Gaming Headphones",
    description: "4.5/5",
    price: 210,
    image: "/img-16.jpg",
  },
  {
    id: 13,
    name: "Laptop",
    description: "4.5/5",
    price: 210,
    image: "/img-17.jpg",
  },
  {
    id: 14,
    name: "Samsung S25",
    description: "4.5/5",
    price: 210,
    image: "/img-18.jpg",
  },
];

const Deals = () => {
  return (
    <div className="bg-gray-50 py-5">
      <div className="max-w-[1200px] mx-auto bg-white rounded-lg shadow-md">

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/3 bg-white p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold pt-5">🔥 Deals & Offers</h2>
            <p className="text-gray-500 text-sm pl-8 pt-3">Hygiene Equipments</p>
            <div className="flex gap-3 my-10">
              {["04 Days", "13 Hours", "34 Min", "56 Sec"].map((time, index) => (
                <div
                  key={index}
                  className="w-[60px] h-[60px] flex flex-col items-center justify-center bg-gray-700 text-white rounded-md text-sm font-bold"
                >
                  {time.split(" ")[0]}
                  <span className="text-xs font-normal">{time.split(" ")[1]}</span>
                </div>
              ))}
            </div>
          </div>

         
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-md"
                  />
                  <h2 className="text-sm font-semibold text-center mt-2">
                    {product.name}
                  </h2>
                    <p className="text-center text-lg font-bold text-gray-900 mt-1">
                    ${product.price}
                  </p>
                  <p className="bg-red-200 text-red-800 text-xs text-center font-semibold rounded-full py-1 w-[50px] mx-auto mt-2">
                    -25%
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
