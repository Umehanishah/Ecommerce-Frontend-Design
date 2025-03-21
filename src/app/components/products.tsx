import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const products = [
    { 
        id: 1, 
        name: "T-shirt with Tape Details", 
        description: "4.5/5", 
        price: 120,
        image: "/img-5.jpg"
      },
      { 
        id: 2, 
        name: "Jeans Jacket", 
        description: "3.5/5", 
        price: 240,
        image: "/img-6.jpg"
      },
      { 
        id: 3, 
        name: "Men`s Coat", 
        description: "4.5/5", 
        price: 180,
        image: "/img-7.jpg"
      },
      { 
        id: 4, 
        name: "Men`s Wallet", 
        description: "4.5/5", 
        price: 130,
        image: "/img-8.jpg"
      },
      { 
        id: 5, 
        name: "Bag", 
        description: "5.0/5", 
        price: 212,
        image: "/img-9.jpg"
      },
      { 
        id: 6, 
        name: "Jeans Shorts", 
        description: "4.0/5", 
        price: 145,
        image: "/img-10.jpg"
      },
      { 
        id: 7, 
        name: "Headphones", 
        description: "3.0/5", 
        price: 80,
        image: "/img-11.jpg"
      },
      { 
        id: 8, 
        name: "Handmade Pot", 
        description: "4.5/5", 
        price: 210,
        image: "/img-12.jpg"
      },
      { 
        id: 9, 
        name: "Electric Cattle", 
        description: "4.5/5", 
        price: 210,
        image: "/img-13.jpg"
      },
      { 
        id: 10, 
        name: "Wrest Watch", 
        description: "4.5/5", 
        price: 210,
        image: "/img-14.png"
      },
      
];

const Products = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-[1200px] py-10">
        <h1 className="text-xl font-semibold">Recommended items</h1>

        <div className="grid grid-cols-5 gap-5 py-5">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="w-[230px] h-[250px] bg-white shadow-md border-2 border-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <Link href={`/products/${product.id}`}>
                <div className="p-3">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={200} 
                    height={200} 
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <h2 className="text-sm font-semibold">{product.name}</h2>
                  <p className="text-lg font-bold mt-2">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
