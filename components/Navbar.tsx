import React from 'react'
import { Button } from './ui/button'
import { MessageSquare } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white h-20 grid place-items-center w-full'>
        <div className="container main-container flex items-center justify-between lg:px-4">
            <h1 className='text-xl lg:text-2xl font-semibold '>
                Welcome back, <span className='text-blue-500'>Elharfali</span> 
            </h1>
            <div className='flex items-center gap-2'>
                <Button size={'icon'} className='relative'>
                    <MessageSquare />
                    <span className='w-5 h-5 text-sm rounded-full bg-red-500 text-white absolute top-[-9px] right-[-9px]'>
                        2
                    </span>
                </Button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar