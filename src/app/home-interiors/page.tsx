import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import Subscription from '../components/subscription';





const products = [
    { 
      id: 8, 
      name: "Handmade Pot", 
      description: "4.5/5", 
      price: 210,
      image: "/img-12.jpg"
    },
    { 
      id: 16, 
      name: "Comfirt Sofa", 
      description: "4.5/5", 
      price: 210,
      image: "/img-20.jpg"
    },
    { 
      id: 17, 
      name: "Bedroom Lamp", 
      description: "4.5/5", 
      price: 210,
      image: "/img-21.jpg"
    },
    { 
      id: 18, 
      name: "Pool Bed", 
      description: "4.5/5", 
      price: 210,
      image: "/img-22.jpg"
    },
    { 
      id: 21, 
      name: "Clothes Hanger", 
      description: "4.5/5", 
      price: 210,
      image: "/img-25.jpg"
    },
    { 
      id: 22, 
      name: "Cactus pot", 
      description: "4.5/5", 
      price: 210,
      image: "/img-26.jpg"
    },
    { 
      id: 26, 
      name: "Computer Chair", 
      description: "4.5/5", 
      price: 210,
      image: "/img-30.jpg"
    },
  
];



const page = () => {
  return (
    <div>
        <div className='container w-[1200px] place-self-center my-5'>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-20 pt-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="hover:shadow-lg transition"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-fit h-fit mb-2 rounded"
                />
                <div className="flex gap-5">
                  <div>
                <h2 className="text-sm font-semibold">{product.name}</h2>
                <p className="text-xs text-gray-700 pt-2">{product.description}</p>
                <p className="flex gap-5 text-lg  font-bold mt-2">${product.price}</p>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                </div>
                </div> 
              </div>
            </Link>
          ))}
        </div>
        </div>

        <Subscription/>
    </div>
  )
}

export default page