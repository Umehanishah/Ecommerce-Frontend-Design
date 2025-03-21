import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const footer = () => {
  return (
    <div>
        <div className='container w-[1200px] place-self-center flex justify-between py-5'>
            <div className='container w-[200px]'>
                <Image src="/logo.png" alt="logo" width={100} height={50} />
                <p className='py-2 text-sm text-gray-500'>Best information about the company gies here but now lorem ipsum is</p>  
                <div>
                <ul className='flex gap-3'>
                <li className='bg-gray-300 hover:bg-blue-600 rounded-full p-2'><Link href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </Link></li>
                <li className='bg-gray-300 hover:bg-blue-600 rounded-full p-2'><Link href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </Link></li>
                <li className='bg-gray-300 hover:bg-blue-600 rounded-full p-2'><Link href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </Link></li>
                <li className='bg-gray-300 hover:bg-blue-600 rounded-full p-2'><Link href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </Link></li>
                </ul>
                </div>
            </div>

            <div>
                <ul>
                    <li className='font-semibold'>About</li>
                    <li className='text-gray-400 hover:text-blue-600 pt-3'><Link href="about">About Us</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="store">Find store</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="categories">Categories</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="blogs">Blogs</Link></li>

                </ul>
            </div>

            <div>
                <ul>
                    <li className='font-semibold'>Partnership</li>
                    <li className='text-gray-400 hover:text-blue-600 pt-3'><Link href="about">About Us</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="store">Find store</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="categories">Categories</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="blogs">Blogs</Link></li>

                </ul>
            </div>

            <div>
                <ul>
                    <li className='font-semibold'>Information</li>
                    <li className='text-gray-400 hover:text-blue-600 pt-3'><Link href="help">Help center</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="refund">Money Refund</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="shipping">Shipping</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="contact">Contact Us</Link></li>

                </ul>
            </div>

            <div>
                <ul>
                    <li className='font-semibold'>For Users</li>
                    <li className='text-gray-400 hover:text-blue-600 pt-3'><Link href="login">Login</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="register">Register</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="settings">Settings</Link></li>
                    <li className='text-gray-400 hover:text-blue-600 pt-1'><Link href="orders">My Orders</Link></li>

                </ul>
            </div>

            <div>
                <ul>
                    <li className='font-semibold'>Get app</li>
                    <li className='pt-5'><Link href="store">
                        <Image src="/store-1.png" alt="store" width={100} height={100}/></Link></li>
                    <li className='pt-3'><Link href="store">
                    <Image src="/store-2.png" alt="store" width={100} height={100}/></Link></li>
                </ul>
            </div>
        </div>

        <div className='bg-gray-100 py-3'>
            <div className='container w-[1200px] place-self-center flex justify-between items-center'>
            <p className='items-center'>© 2023 Ecommerce.</p>
            <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-gray-100 border-none shadow-none">Ship to 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.2 38.4"><g fillRule="evenodd" clipRule="evenodd"><path d="M3.03 0h49.13c1.67 0 3.03 1.36 3.03 3.03v32.33c0 1.66-1.36 3.02-3.02 3.03H3.02C1.36 38.4 0 37.03 0 35.37V3.03C0 1.36 1.36 0 3.03 0z"/><path d="M0 12.8h55.2v22.57c0 1.67-1.36 3.03-3.03 3.03H3.03C1.36 38.4 0 37.04 0 35.37V12.8z" fill="#d00"/><path d="M0 25.6h55.2v9.77c0 1.66-1.36 3.02-3.02 3.03H3.03A3.04 3.04 0 010 35.37V25.6z" fill="#ffce00"/></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={"top"}>Pakistan
              <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 513 357.071"><path fill="#fff" fillRule="nonzero" d="M28.477.32h456.044c15.488 0 28.159 12.672 28.159 28.16v300.111c0 15.488-12.671 28.16-28.159 28.16H28.477c-15.486 0-28.157-12.672-28.157-28.16V28.48C.32 12.992 12.991.32 28.477.32z"/><path fill="#01411C" fillRule="nonzero" d="M122.835 356.751V.32h361.686c15.488 0 28.159 12.672 28.159 28.16v300.111c0 15.488-12.671 28.16-28.159 28.16H122.835z"/><path fill="#fff" fillRule="nonzero" d="M290.758 76.663C247.631 90.44 216.4 130.838 216.4 178.534c0 59.057 47.875 106.931 106.931 106.931 43.252 0 80.504-25.681 97.345-62.626a98.756 98.756 0 01-4.89 4.661c-40.459 35.966-102.416 32.322-138.381-8.138s-32.32-102.417 8.139-138.382a99.87 99.87 0 015.214-4.317zm71.563 21.855l45.044 50.672-66.225-14.516 62.11-27.179-34.273 58.495-6.656-67.472z"/><rect fill="none" stroke="#CCC" strokeWidth=".64" strokeMiterlimit="22.926" x=".32" y=".319" width="512.359" height="356.43" rx="27.231" ry="28.159"/></svg>
              </DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>India
           
             </DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>China</DropdownMenuRadioItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        </div>
    </div>
  )
}

export default footer