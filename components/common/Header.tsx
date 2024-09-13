import React from 'react'
import Link from 'next/link'
import HeaderProfileMenu from './header/HeaderProfileMenu'
import MobileMenu from './header/MobileMenu'

const Header: React.FC = () => {
    return (
        <header>
            <div className="container flex justify-between items-center h-[80px]">
                <MobileMenu />
                <div className='flex items-center gap-10'>
                    <p className='text-3xl font-bold text-primary'>Ambulist</p>

                    <ul className='hidden md:flex items-center justify-start gap-2'>
                        <li>
                            <Link className='px-3 py-2 text-gray-700' href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link className='px-3 py-2 text-gray-700' href={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link className='px-3 py-2 text-gray-700' href={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <ul className='flex items-center justify-between '>
                    <li className='px-5 border-r'>
                        <HeaderProfileMenu />
                    </li>
                    <li className='hidden lg:block pl-5'>
                        <button type='button' className='px-5 py-2 text-sm bg-primary text-white rounded'>
                            Add Lists
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header