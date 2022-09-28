import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutLineClose} from 'react-icons/ai'
const Navbar = () => {
    return (
      <div className="fixed w=full h-28 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Image src="/../public/assets/navLogo.png" alt="/" width="125" height="50" />
        </div>
        <div>
        <ul className='hidden md:flex'>
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
        <div>
          <AiOutLineClose />
        </div>
      </div>
      </div>
    );
}

export default Navbar