import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed w=full h-28 shadow-xl z-[100]">
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/skills/navLogo.png"
          alt="/"
          width="125"
          height="50"
        /> 
      <div>
        <ul className="hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Contacts</li>
          </Link>
        </ul>
        <div className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/70">
        <div className="fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[##ecf0f3] p-10 ease-in duration-500">
          <div>
            <div className="flex justify-between w-full item-center">
              <Image src='/../public/assets/skills/navLogo.png' width='87' height='35' alt='/' />
              <div className="p-3 rounded-full cursor-pointer shadow-gray-400">
                <AiOutlineClose/>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Navbar;
