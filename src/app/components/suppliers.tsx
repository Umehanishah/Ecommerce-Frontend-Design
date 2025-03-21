import React from 'react'
import Image from 'next/image'


const suppliers = () => {
  return (
    <div className='bg-gray-50'>
        <div className='container w-[1200px] place-self-center py-10'>
        <h1 className='text-xl font-bold'>Suppliers by region</h1>
        
        <div className='grid grid-cols-5 py-10'>
            <div className='flex gap-3 items-center'>
                <Image src="/icon.png" alt="icon" width={50} height={30} className='container w-[50px] h-[40px] bg-cover'/>
                <div className='flex-1'>
                <h2 className='text-lg font-semibold'>Arabic Emirates</h2>
                <p>Shopname.ae</p>
                </div>
            </div>

            <div className='flex gap-3 items-center'>
                <Image src="/icon-4.png" alt="icon" width={50} height={30} className='container w-[50px] h-[40px] bg-cover'/>
                <div className='flex-1'>
                <h2 className='text-lg font-semibold'>Australia</h2>
                <p>Shopname.ae</p>
                </div>
            </div>

            <div className='flex gap-3 items-center'>
                <Image src="/icon-2.png" alt="icon" width={50} height={30} className='container w-[50px] h-[40px] bg-cover'/>
                <div className='flex-1'>
                <h2 className='text-lg font-semibold'>United States</h2>
                <p>Shopname.ae</p>
                </div>
            </div>

            <div className='flex gap-3 items-center'>
                <Image src="/icon-6.png" alt="icon" width={50} height={30} className='container w-[50px] h-[40px] bg-cover'/>
                <div className='flex-1'>
                <h2 className='text-lg font-semibold'>Russia</h2>
                <p>Shopname.ae</p>
                </div>
            </div>

            <div className='flex gap-3 items-center'>
                <Image src="/icon-8.png" alt="icon" width={50} height={30} className='container w-[50px] h-[40px] bg-cover'/>
                <div className='flex-1'>
                <h2 className='text-lg font-semibold'>Italy</h2>
                <p>Shopname.ae</p>
                </div>
            </div>

            <div className='flex gap-3 pt-5 items-center'>
                <Image src="/icon-1.png" alt="icon" width={50} height={30} className='container w-[50px] h-[40px] bg-cover'/>
                <div className='flex-1'>
                <h2 className='text-lg font-semibold'>Denmark</h2>
                <p>Shopname.ae</p>
                </div>
            </div>

            <div className='flex gap-3 pt-5 items-center'>
                <Image src="/icon-5.png" alt="icon" width={50} height={30} className='container w-[50px] h-[40px] bg-cover'/>
                <div className='flex-1'>
                <h2 className='text-lg font-semibold'>France</h2>
                <p>Shopname.ae</p>
                </div>
            </div>

            <div className='flex gap-3 pt-5 items-center'>
                <Image src="/icon.png" alt="icon" width={50} height={50} className='container w-[50px] h-[40px] bg-cover'/>
                <div className='flex-1'>
                <h2 className='text-lg font-semibold'>Arabic Emirates</h2>
                <p>Shopname.ae</p>
                </div>
            </div>

            <div className='flex gap-3 pt-5 items-center'>
                <Image src="/icon-7.png" alt="icon" width={50} height={10} className='container w-[50px] h-[40px] bg-cover'/>
                <div className='flex-1'>
                <h2 className='text-lg font-semibold'>China</h2>
                <p>Shopname.ae</p>
                </div>
            </div>

            <div className='flex gap-3 pt-5 items-center'>
                <Image src="/icon-9.png" alt="icon" width={50} height={10} className='container w-[50px] h-[40px] bg-cover'/>
                <div className='flex-1'>
                <h2 className='text-lg font-semibold'>Great Britain</h2>
                <p>Shopname.ae</p>
                </div>
            </div>

            
        </div>
        </div>
    </div>
  )
}

export default suppliers