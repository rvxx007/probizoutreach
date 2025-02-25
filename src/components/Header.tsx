
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
   <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[ backdrop-filter]:bg-background/60'>
        <nav className='container mx-auto px-4 h-16 flex justify-between items-center'>
        <div>
          <Link href="/">
          <Image src="/probizoutreachlogo.png"
          width={200}
          height={60}
          alt='ProBizOutReach Logo'
          className="h-15 py-1 object-contain"></Image></Link>
        </div>
            <div>menu</div>
        </nav>
   </header>
  )
}

export default Header