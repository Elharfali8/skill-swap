'use client'

import { House, Infinity, MessageCircle, Settings, ShieldUser, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import userIcon from '@/public/assets/user.svg'
import { usePathname } from 'next/navigation'
import { SignOutButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Sidebar = () => {
    const pathname =  usePathname()

    const links = [
        { name: "Dashboard", href: "/dashboard", icon: House },
        { name: "Messages", href: "/messages", icon: MessageCircle },
        { name: "Profile", href: "/profile", icon: User },
        { name: "Admin", href: "/admin", icon: ShieldUser },
    ];

  return (
    <aside className='hidden lg:block bg-slate-800 text-white px-4 '>
        <div className='h-full flex flex-col items-center justify-between py-12 '>
            <div>
                <Link href={'/'} className='flex items-center gap-2 transition-all ease-in-out duration-150 hover:scale-105'>
                    <Infinity size={40} />
                    <span className='text-2xl font-bold tracking-wide'>SkillSwap</span>
                </Link>
                {/* ------ */}
                <ul className='grid gap-2 mt-12 '>
                {links.map((item, index) => {
                    return (
                        <li key={index} className={` py-2 px-3 rounded-md  ${pathname  === item.href ? 'bg-slate-700 shadow-lg' : '' }`} >
                            <Link href={item.href} className='flex items-center gap-2 transition-all ease-in-out duration-150 hover:tracking-widest tracking-wider' >
                                <item.icon size={20} />
                                <span className='text-lg xl:text-xl font-medium  '>{item.name}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            </div>
            
            <div className='w-full'>
                <div className='w-full h-[1px] bg-white mb-3' />
                <div className='flex items-center gap-2'>
                    <Image
                        alt='user icon'
                        src={userIcon}
                        width={50}
                        height={50}
                        className='border border-white rounded-full shadow-md shadow-white'
                    />
                    <div>
                        <h3 className='text-xl font-semibold'>Youssef Elharfali</h3>
                        <Button variant='link' asChild className='text-gray-300'>
                            <SignOutButton  />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar