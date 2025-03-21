import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: "Home and outdoor",
    bgImage: "/bg-4.png",
    products: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    title: "Consumer electronics and gadgets",
    bgImage: "/bg-3.png",
    products: [9, 10, 11, 12, 13, 14, 15, 16],
  },
];

const products = [
  { id: 1, name: "Soft Chairs", price: 19, image: "/img-5.jpg" },
  { id: 2, name: "Sofa & Chair", price: 19, image: "/img-6.jpg" },
  { id: 3, name: "Kitchen Dishes", price: 19, image: "/img-7.jpg" },
  { id: 4, name: "Smart Watches", price: 19, image: "/img-8.jpg" },
  { id: 5, name: "Kitchen Mixer", price: 100, image: "/img-9.jpg" },
  { id: 6, name: "Blenders", price: 39, image: "/img-10.jpg" },
  { id: 7, name: "Home Appliance", price: 19, image: "/img-11.jpg" },
  { id: 8, name: "Coffee Maker", price: 10, image: "/img-12.jpg" },
  { id: 9, name: "Smart Watches", price: 19, image: "/img-13.jpg" },
  { id: 10, name: "Cameras", price: 89, image: "/img-14.png" },
  { id: 11, name: "Headphones", price: 10, image: "/img-15.jpg" },
  { id: 12, name: "Gaming Set", price: 35, image: "/img-16.jpg" },
  { id: 13, name: "Laptops & PC", price: 340, image: "/img-17.jpg" },
  { id: 14, name: "Smartphones", price: 19, image: "/img-18.jpg" },
  { id: 15, name: "Electric Kettle", price: 240, image: "/img-19.jpg" },
  { id: 16, name: "Samsung A20", price: 210, image: "/img-20.jpg" },
];

const Items = () => {
  return (
    <div className='bg-gray-50 py-10'>
      <div className='container w-[1200px] mx-auto space-y-5'>
        {categories.map((category, index) => (
          <div key={index} className='flex gap-6 bg-white p-5 rounded-lg shadow-md'>
            <div
              className='container w-[300px] flex flex-col justify-center items-start p-6 rounded-lg bg-cover bg-center'
              style={{ backgroundImage: `url(${category.bgImage})` }}
            >
              <h2 className='text-2xl font-semibold mb-4'>{category.title}</h2>
              <Button className='text-white'>Source now</Button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 flex-1'>
              {products
                .filter((p) => category.products.includes(p.id))
                .map((product) => (
                  <Link key={product.id} href={`/products/${product.id}`}>
                    <div className='flex place-self-center hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 p-3 rounded-lg '>
                      <div>
                      <h2 className='text-base font-semibold mt-2'>{product.name}</h2>
                      <p className='text-sm font-bold mt-1'>From USD {product.price}</p>
                      </div>
                      <div>
                      <Image src={product.image} alt={product.name} width={100} height={100} className='rounded' />
                    </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
