"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
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
import Link from "next/link";


  
  
const Header = () => {
  const [position, setPosition] = React.useState("bottom");

  return (
    <div className="bg-white">
    <div className="container w-[1200px] place-self-center py-5">
      <div className="flex justify-between items-center">
        <div className="container w-[800px] flex items-center">
        <Image src="/logo.png" alt="logo" width={200} height={50} />
        <Input type="email" placeholder="Email" className="border-2 border-blue-500 py-5 rounded-e-none"/>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-2 border-blue-500 py-5 rounded-none">All category
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={"top"}>Men`s</DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>Women`s</DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>Kid`s</DropdownMenuRadioItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="bg-blue-600 hover:bg-blue-900 py-5 rounded-s-none text-base">Search</Button>
      </div>
      <div className="flex gap-5">
        <p>
        <Link href="/profile">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round place-self-center hover:fill-blue-600 hover:stroke-blue-600"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
            Profile</Link></p>
        <p>
        <Link href="/message">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text place-self-center hover:fill-blue-600 hover:stroke-white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M13 8H7"/><path d="M17 12H7"/></svg>
            Message</Link></p>
        <p>
        <Link href="/order">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart place-self-center hover:fill-red-600 hover:stroke-red-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            Orders</Link></p>
        <p>
        <Link href="/cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="gray" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart place-self-center hover:fill-blue-600 hover:stroke-blue-600"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            My Cart</Link></p>
      </div>
      </div>
      </div>
      
       <hr/>


        <div className="container w-[1200px] place-self-center flex justify-between">
        <ul className="container w-[800px] place-self-center flex gap-10 py-5 font-semibold items-center">
            <li>
            <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-none text-base shadow-none px-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg> 
            All category
           </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={"top"}>Men`s</DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>Women`s</DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>Kid`s</DropdownMenuRadioItem>
            </DropdownMenuContent>
            </DropdownMenu>
            </li>
            <li><Link href="offer">Hot Offers</Link></li>
            <li><Link href="gifts">Gift boxes</Link></li>
            <li><Link href="projects">Projects</Link></li>
            <li><Link href="menu">Menu item</Link></li>
            <li><DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-none shadow-none text-base px-0">Help
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={"top"}>Contact Us</DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>Send Email</DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>Open Chat</DropdownMenuRadioItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </li>
        </ul>

        <ul className="flex gap-5 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-none shadow-none">English, USD
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={"top"}>German</DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>English, Bri</DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>Other</DropdownMenuRadioItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-none shadow-none">Ship to 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.2 38.4"><g fillRule="evenodd" clipRule="evenodd"><path d="M3.03 0h49.13c1.67 0 3.03 1.36 3.03 3.03v32.33c0 1.66-1.36 3.02-3.02 3.03H3.02C1.36 38.4 0 37.03 0 35.37V3.03C0 1.36 1.36 0 3.03 0z"/><path d="M0 12.8h55.2v22.57c0 1.67-1.36 3.03-3.03 3.03H3.03C1.36 38.4 0 37.04 0 35.37V12.8z" fill="#d00"/><path d="M0 25.6h55.2v9.77c0 1.66-1.36 3.02-3.02 3.03H3.03A3.04 3.04 0 010 35.37V25.6z" fill="#ffce00"/></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={"top"}>Pakistan
              <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 513 357.071"><path fill="#fff" fillRule="nonzero" d="M28.477.32h456.044c15.488 0 28.159 12.672 28.159 28.16v300.111c0 15.488-12.671 28.16-28.159 28.16H28.477c-15.486 0-28.157-12.672-28.157-28.16V28.48C.32 12.992 12.991.32 28.477.32z"/><path fill="#01411C" fillRule="nonzero" d="M122.835 356.751V.32h361.686c15.488 0 28.159 12.672 28.159 28.16v300.111c0 15.488-12.671 28.16-28.159 28.16H122.835z"/><path fill="#fff" fillRule="nonzero" d="M290.758 76.663C247.631 90.44 216.4 130.838 216.4 178.534c0 59.057 47.875 106.931 106.931 106.931 43.252 0 80.504-25.681 97.345-62.626a98.756 98.756 0 01-4.89 4.661c-40.459 35.966-102.416 32.322-138.381-8.138s-32.32-102.417 8.139-138.382a99.87 99.87 0 015.214-4.317zm71.563 21.855l45.044 50.672-66.225-14.516 62.11-27.179-34.273 58.495-6.656-67.472z"/><rect fill="none" stroke="#CCC" strokeWidth=".64" stroke-miterlimit="22.926" x=".32" y=".319" width="512.359" height="356.43" rx="27.231" ry="28.159"/></svg>
              </DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>India
           
             </DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem className="hover:bg-blue-500 hover:text-white" value={""}>China</DropdownMenuRadioItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </ul>
        </div>
        <hr/>
      </div>
   
 
  );
};

export default Header;
