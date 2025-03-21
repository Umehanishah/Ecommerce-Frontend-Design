"use client";

import React from 'react';
import { useParams } from "next/navigation";
import Image from 'next/image';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import Products from '@/app/components/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const products = [
    { 
        id: 1, 
        name: "T-shirt with Tape Details", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 120,
        image: "/img-5.jpg"
      },
      { 
        id: 2, 
        name: "Jeans Jacket", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 240,
        image: "/img-6.jpg"
      },
      { 
        id: 3, 
        name: "Men`s Coat", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 180,
        image: "/img-7.jpg"
      },
      { 
        id: 4, 
        name: "Men`s Wallet", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 130,
        image: "/img-8.jpg"
      },
      { 
        id: 5, 
        name: "Bag", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 212,
        image: "/img-9.jpg"
      },
      { 
        id: 6, 
        name: "Jeans Shorts", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 145,
        image: "/img-10.jpg"
      },
      { 
        id: 7, 
        name: "Headphones", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 80,
        image: "/img-11.jpg"
      },
      { 
        id: 8, 
        name: "Handmade Pot", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-12.jpg"
      },
      { 
        id: 9, 
        name: "Electric Cattle", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-13.jpg"
      },
      { 
        id: 10, 
        name: "Wrest Watch", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-14.png"
      },
      { 
        id: 11, 
        name: "Camera", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-15.jpg"
      },
      { 
        id: 12, 
        name: "Gaming Headphones", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-16.jpg"
      },
      { 
        id: 13, 
        name: "Laptop", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-17.jpg"
      },
      { 
        id: 14, 
        name: "Samsung S25", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-18.jpg"
      },
      { 
        id: 15, 
        name: "Redme 9 pro", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-19.jpg"
      },
      { 
        id: 16, 
        name: "Comfirt Sofa", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-20.jpg"
      },
      { 
        id: 17, 
        name: "Bedroom Lamp", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-21.jpg"
      },
      { 
        id: 18, 
        name: "Pool Bed", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-22.jpg"
      },
      { 
        id: 19, 
        name: "Juice machine", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-23.jpg"
      },
      { 
        id: 20, 
        name: "Coffee machine", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.5/5", 
        price: 210,
        image: "/img-21.jpg"
      },
      { 
        id: 21, 
        name: "Clothes Hanger", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-25.jpg"
      },
      { 
        id: 22, 
        name: "Cactus pot", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-26.jpg"
      },
      { 
        id: 23, 
        name: "Samsung A20", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-27.jpg"
      },
      { 
        id: 24, 
        name: "Men`s T-shirt", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-28.jpg"
      },
      { 
        id: 25, 
        name: "Samsung A10", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-29.jpg"
      },
      { 
        id: 26, 
        name: "Computer Chair", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-30.jpg"
      },
      { 
        id: 27, 
        name: "Automatic Washing Machine", 
        description: "Our product is designed to provide high-quality, stylish, and functional items that cater to a wide range of customer needs. From trendy fashion pieces like T-shirts, jeans jackets, and men’s coats to everyday essentials like wallets, bags, and headphones, we offer a diverse selection at competitive prices. We also provide top-notch electronics, including gaming headphones, laptops, and smartphones, ensuring you stay ahead in the digital world. Home and lifestyle enthusiasts will love our collection of furniture, lamps, and kitchen appliances, adding both comfort and elegance to any space. With a commitment to quality, affordability, and customer satisfaction, our products aim to enhance your lifestyle while delivering exceptional value.", 
        price: 210,
        image: "/img-31.jpg"
      },

];

export default function Page() {
  const params = useParams(); 
  const id = params?.id as string; 

  const productId = id ? parseInt(id, 10) : null; 
  const product = products.find((item) => item.id === productId); 

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }
  
  return (
    <div className='bg-gray-50'>
            <div className='container w-[1200px] place-self-center py-10'>
            <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>
            </div>


      <div className="container w-[1200px] place-self-center md:flex gap-5 rounded-md bg-white">
        <div className='container w-[400px] mt-3 mx-3'>
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className='border-2 border-gray-100'
          />
        )}
        <div className='flex gap-5'>
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={300}
            className='border-2 border-gray-100 my-5'
          />
        )}
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={300}
            className='border-2 border-gray-100 my-5'
          />
        )}

            {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={300}
            className='border-2 border-gray-100 my-5'
          />
        )}
        </div>

        </div>
        <div className="container w-[450px] text-justify mt-3">
            <h2 className='text-green-500'>✔️In Stock</h2>
          <h1 className="text-4xl font-sans font-bold py-2">{product.name}</h1>
          <p>⭐⭐⭐⭐★ <span className='text-orange-500 text-base py-5'>9.3</span> • 
          <span className='text--base text-gray-500'> 📩 32 reviews </span> • 
          <span className='text-gray-500'> 📦 154 sold</span></p>
          <div className="flex gap-5 font-bold text-xl py-2 bg-orange-100 my-5 px-5">
            <p className="text-3xl text-center text-orange-600">
                ${product.price} <br />
                <span className="text-sm text-gray-500 font-light"> 50-100 pcs </span>
            </p>
            
            <div className="w-px bg-gray-400"></div>

            <p className="text-3xl text-center">
                $90.00 <br />
                <span className="text-sm text-gray-500 font-light"> 100-700 pcs </span>
            </p>
            
            <div className="w-px bg-gray-400"></div>

            <p className="text-3xl text-center">
                $78.00 <br />
                <span className="text-sm text-gray-500 font-light"> 700+ pcs </span>
            </p>
            </div>


            <div>
                <table className="container w-[600px] border-collapse">
                    <tbody>
                    <tr>
                        <td className="font-semibold">Price:</td>
                        <td className="px-44">Negotiable</td>
                    </tr>
                    </tbody>
                </table>

                <div className="h-px bg-gray-400 my-2"></div>

                <table className="w-full border-collapse">
                    <tbody>
                    <tr>
                        <td className="font-semibold">Type:</td>
                        <td className="px-40">Classic shoes</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Material:</td>
                        <td className="px-40">Plastic material</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Design:</td>
                        <td className="px-40">Modern nice</td>
                    </tr>
                    </tbody>
                </table>

                <div className="h-px bg-gray-400 my-2"></div>

                <table className="w-full border-collapse">
                    <tbody>
                    <tr>
                        <td className="font-semibold">Customization:</td>
                        <td className="pl-28">Customized logo and design custom packages</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Protection:</td>
                        <td className="px-28">Refund Policy</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Warranty:</td>
                        <td className="pl-28">2 years full warranty</td>
                    </tr>
                    </tbody>
                </table>
                </div>

        </div>
            
            <div>
            <div className='container w-[300px] border-2 border-gray-200 rounded-lg px-5 py-5 mt-3 mx-3'>
                <h2 className='flex gap-5 font-semibold'><Image src="/img.jpg" alt="img" width={50} height={100}/>
                Supplier<br/> Guanjoi Trading LLC</h2>
                <div className="h-px bg-gray-400 my-3"></div>
                <p className='text-gray-500 py-1'>
                    Germany, Berlin</p>
                <p className='text-gray-500 py-1'>Verified Seller</p>
                <p className='text-gray-500 py-1'>Worldwide shipping</p>

                <Button className='bg-blue-600 px-20 my-1'>Send inquiry</Button>
                <Button className='border-2 border-gray-100 bg-white text-blue-600 px-20 my-1'>Seller`s Profile</Button>
            </div>

            <div className='container w-[300px] place-self-center py-5'>
                <p className='text-center text-blue-600 font-semibold'>Save for Later</p>
            </div>
            </div>

      </div>
    

    <div className='flex gap-5 place-self-center'>
      <div className='container w-[875px] place-self-center my-5 rounded-md px-5 py-5 bg-white border-2 border-gray-200'>
      <Tabs defaultValue="details" className="w-[825px]">
      <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="seller">About Seller</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
                <Card>
                <CardContent className="space-y-2 py-5 px-5 text-justify leading-10">
                    <div className="space-y-1">
                    <p>{product.description}</p>
                    </div>
                </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="reviews">
                <Card>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                    <p>Here are some reviews for product:  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐⭐⭐ Excellent Quality!  
                        **By Sarah L. * Verified Buyer**  
                        I was amazed by the quality of this product. The material feels premium, and it's exactly as described. The shipping was fast, and the packaging was secure. Definitely worth the price!  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐⭐ Great Value for Money  
                        **By Mark T. * Verified Buyer**  
                        The product is great, and the price is reasonable. It fits well and looks stylish. The only reason I'm giving four stars instead of five is that the delivery took a bit longer than expected. Otherwise, a solid purchase!  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐ Average Product  
                        **By Jessica R. * Verified Buyer**  
                        The product is okay. It looks nice, but I expected better durability. After a few weeks of use, I noticed slight wear and tear. Not bad, but could be improved.  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐⭐⭐ Highly Recommended!  
                        **By Daniel P. * Verified Buyer**  
                        This is one of the best purchases I`ve made online. The product exceeded my expectations, and the seller was very responsive. I will definitely buy from this store again!  
                        <br/>
                        <br/>
                        ### ⭐⭐ Not What I Expected  
                        **By Emily C. * Verified Buyer**  
                        The product didn't meet my expectations. The material feels cheaper than advertised, and the size runs smaller than expected. Customer service was helpful, but I won`t be buying again.  
                        </p>
                    </div>
                 
                </CardContent>
               
                </Card>
            </TabsContent>

            <TabsContent value="reviews">
                <Card>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                    <p>Here are some reviews for product:  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐⭐⭐ Excellent Quality!  
                        **By Sarah L. * Verified Buyer**  
                        I was amazed by the quality of this product. The material feels premium, and it's exactly as described. The shipping was fast, and the packaging was secure. Definitely worth the price!  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐⭐ Great Value for Money  
                        **By Mark T. * Verified Buyer**  
                        The product is great, and the price is reasonable. It fits well and looks stylish. The only reason I'm giving four stars instead of five is that the delivery took a bit longer than expected. Otherwise, a solid purchase!  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐ Average Product  
                        **By Jessica R. * Verified Buyer**  
                        The product is okay. It looks nice, but I expected better durability. After a few weeks of use, I noticed slight wear and tear. Not bad, but could be improved.  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐⭐⭐ Highly Recommended!  
                        **By Daniel P. * Verified Buyer**  
                        This is one of the best purchases I`ve made online. The product exceeded my expectations, and the seller was very responsive. I will definitely buy from this store again!  
                        <br/>
                        <br/>
                        ### ⭐⭐ Not What I Expected  
                        **By Emily C. * Verified Buyer**  
                        The product didn't meet my expectations. The material feels cheaper than advertised, and the size runs smaller than expected. Customer service was helpful, but I won`t be buying again.  
                        </p>
                    </div>
                 
                </CardContent>
               
                </Card>
            </TabsContent>

            <TabsContent value="reviews">
                <Card>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                    <p>Here are some reviews for product:  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐⭐⭐ Excellent Quality!  
                        **By Sarah L. * Verified Buyer**  
                        I was amazed by the quality of this product. The material feels premium, and it's exactly as described. The shipping was fast, and the packaging was secure. Definitely worth the price!  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐⭐ Great Value for Money  
                        **By Mark T. * Verified Buyer**  
                        The product is great, and the price is reasonable. It fits well and looks stylish. The only reason I'm giving four stars instead of five is that the delivery took a bit longer than expected. Otherwise, a solid purchase!  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐ Average Product  
                        **By Jessica R. * Verified Buyer**  
                        The product is okay. It looks nice, but I expected better durability. After a few weeks of use, I noticed slight wear and tear. Not bad, but could be improved.  
                        <br/>
                        <br/>
                        ### ⭐⭐⭐⭐⭐ Highly Recommended!  
                        **By Daniel P. * Verified Buyer**  
                        This is one of the best purchases I`ve made online. The product exceeded my expectations, and the seller was very responsive. I will definitely buy from this store again!  
                        <br/>
                        <br/>
                        ### ⭐⭐ Not What I Expected  
                        **By Emily C. * Verified Buyer**  
                        The product didn't meet my expectations. The material feels cheaper than advertised, and the size runs smaller than expected. Customer service was helpful, but I won`t be buying again.  
                        </p>
                    </div>
                 
                </CardContent>
               
                </Card>
            </TabsContent>
            </Tabs>

      
      </div> 
      
      <div className='container w-[300px] place-self-center bg-white rounded-md px-5 py-5 border mt-5'>
        <h2 className='text-lg text-gray-800 pb-5'>May you like</h2>

        <div className='flex gap-5'>
            <Image src="/img-7.jpg" alt="img-5" width={120} height={50} className='border-2 border-gray-100 rounded-sm'/>
            <div>
                <p className='font-semibold'>Men Blazer Sets Elegant Formal</p>
                <p className='text-gray-500'>$7.00 - $99.50</p>
            </div>
        </div>

        <div className='flex gap-5'>
            <Image src="/img-7.jpg" alt="img-5" width={120} height={50} className='border-2 border-gray-100 rounded-sm'/>
            <div>
                <p className='font-semibold'>Men Blazer Sets Elegant Formal</p>
                <p className='text-gray-500'>$7.00 - $99.50</p>
            </div>
        </div>

        <div className='flex gap-5'>
            <Image src="/img-7.jpg" alt="img-5" width={120} height={50} className='border-2 border-gray-100 rounded-sm'/>
            <div>
                <p className='font-semibold'>Men Blazer Sets Elegant Formal</p>
                <p className='text-gray-500'>$7.00 - $99.50</p>
            </div>
        </div>
        
        </div>   
      </div>
        
      <Products/>
    </div>
  );
}
