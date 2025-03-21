import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const subscription = () => {
  return (
    <div className='bg-gray-100'>
        <div className='container w-[1200px] place-self-center py-10'>
        <h1 className='text-center font-bold text-xl'>Subscribe on our newsletter</h1>
        <p className='text-center text-gray-500 py-2'>Get daily news on upcoming offers from many suppliers all over the world</p>
       
        <div className='container w-[500px] place-self-center flex gap-2'>
        <Input type="email" placeholder="Email" className="bg-white py-5 rounded-md"/>
        <Button className='bg-blue-600'>Subscribe</Button>
        </div>
        </div>
    </div>
  )
}

export default subscription