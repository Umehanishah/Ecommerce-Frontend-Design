import React from 'react'
import Image from 'next/image'

const services = () => {
  return (
    <div className='bg-gray-50 py-5'>
        <div className='container w-[1200px] place-self-center'>
            <h1 className='text-xl font-bold pb-5'>Our extra services</h1>

            <div className='flex gap-3'>
            <div className="relative w-[300px] bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110">
              <div className="relative">
                    <Image src="/img-4.png" alt="img" width={300} height={200} className='bg-[url(/bg.png)]'/>
                    <div className="absolute bottom-[-20] right-4 bg-blue-200 rounded-full p-2 border-2 border-white flex items-center justify-center w-[50px] h-[50px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"stroke="currentColor"strokeWidth="2" strokeLinecap="round"strokeLinejoin="round"className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </div>
                </div>
                  <p className="py-8 px-4 font-semibold text-lg">
                    Source from Industry Hubs
                </p>
                </div>


                <div className="relative w-[300px] bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110">
              <div className="relative">
                    <Image src="/img-1.png" alt="img" width={300} height={200} className='bg-[url(/bg.png)]'/>
                    <div className="absolute bottom-[-20] right-4 bg-blue-200 rounded-full p-2 border-2 border-white flex items-center justify-center w-[50px] h-[50px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-archive"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>
                    </div>
                </div>
                  <p className="py-8 px-4 font-semibold text-lg">
                    Source from Industry Hubs
                </p>
                </div>

                <div className="relative w-[300px] bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110">
              <div className="relative">
                    <Image src="/img-2.png" alt="img" width={300} height={200} className='bg-[url(/bg.png)]'/>
                    <div className="absolute bottom-[-20] right-4 bg-blue-200 rounded-full p-2 border-2 border-white flex items-center justify-center w-[50px] h-[50px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                    </div>
                </div>
                  <p className="py-8 px-4 font-semibold text-lg">
                    Source from Industry Hubs
                </p>
                </div>

                <div className="relative w-[300px] bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110">
              <div className="relative">
                    <Image src="/img-3.png" alt="img" width={300} height={200} className='bg-[url(/bg.png)]'/>
                    <div className="absolute bottom-[-20] right-4 bg-blue-200 rounded-full p-2 border-2 border-white flex items-center justify-center w-[50px] h-[50px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-x"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m14.5 9.5-5 5"/><path d="m9.5 9.5 5 5"/></svg>
                    </div>
                </div>
                  <p className="py-8 px-4 font-semibold text-lg">
                    Source from Industry Hubs
                </p>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default services