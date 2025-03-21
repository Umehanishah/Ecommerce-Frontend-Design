import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const hero = () => {
  return (
    <div className='bg-gray-50 pt-5'>
        <div className='container w-[1200px] place-self-center bg-white'>
            <div className='flex'>
                <ul className='container w-[200px] px-2 py-4 leading-10'>
                    <li className='hover:bg-blue-300 rounded-sm px-3 hover:font-semibold mt-5'><Link href="/automobiles">Automobiles</Link></li>
                    <li className='hover:bg-blue-300 rounded-sm px-3 hover:font-semibold'><Link href="/clothes-and-wear">Clothes and wear</Link></li>
                    <li className='hover:bg-blue-300 rounded-sm px-3 hover:font-semibold'><Link href="/home-interiors">Home interiors</Link></li>
                    <li className='hover:bg-blue-300 rounded-sm px-3 hover:font-semibold'><Link href="/computer">Computer and tech</Link></li>
                    <li className='hover:bg-blue-300 rounded-sm px-3 hover:font-semibold'><Link href="/tools">Tools, equipments</Link></li>
                    <li className='hover:bg-blue-300 rounded-sm px-3 hover:font-semibold'><Link href="/sports">Sports and outdoor</Link></li>
                    <li className='hover:bg-blue-300 rounded-sm px-3 hover:font-semibold'><Link href="/animals">Animal and pets</Link></li>
                    <li className='hover:bg-blue-300 rounded-sm px-3 hover:font-semibold'><Link href="/machinery">Machinery tools</Link></li>
                    <li className='hover:bg-blue-300 rounded-sm px-3 hover:font-semibold'><Link href="/all">More category</Link></li>
                </ul>

                <div className='container w-[750px] h-[500px] py-5'>
                    <div className='bg-[url(/bg-5.png)] bg-cover container w-[750px] h-[400px] px-10 py-10'>
                   <h2>
                   <span className='font-light text-4xl'>Latest trending </span><br/>
                   <span className='text-4xl font-bold'>Electronic items</span></h2>
                   <Button className='bg-white hover:text-white text-black mt-5'>Learn more</Button>
                   </div>
                </div>

                <div className='container w-[200px]'>
                <div className='container w-[210px] mx-5 mt-5 px-5 py-5 bg-blue-100 rounded-md'>
                   <div className='flex gap-3 py-2 pb-4'>
                    <Image src="/avatar.png" alt={'avater'} width={60} height={10}/>
                     <p className='text-sm font-semibold'>Hi, user let`s get stated</p>
                     </div>
                    <Button className='container w-[130px] bg-blue-600'>Join now</Button>
                    <Button className='container w-[130px] bg-white text-blue-600 hover:text-white mt-2'>Log in</Button>
                </div>

                <div className='container w-[210px] mt-3 bg-orange-500 rounded-md text-white px-5 mx-5 py-5'>
                    <p>Get US $10 off with a new supplier</p>
                </div>

                <div className='container w-[210px] mt-3 bg-teal-500 rounded-md text-white px-5 mx-5 py-5'>
                    <p>Send quotes with supplier preferences</p>
                </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default hero