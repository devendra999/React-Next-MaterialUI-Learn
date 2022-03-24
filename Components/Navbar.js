import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
        <header>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/About"><a>About</a></Link></li>
                <li><Link href="/Products"><a>Products</a></Link></li>
                <li><Link href="/Blog/BlogOne"><a>Blogs</a></Link></li>
                <li><Link href="/Docs/PageOne"><a>Docs</a></Link></li>
                <li><Link href="/Contacts"><a>Contacts</a></Link></li>
            </ul>
        </header>
    </>
  )
}

export default Navbar