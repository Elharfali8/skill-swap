import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import heroImg from '@/public/assets/hero.svg'
import { Calendar, UserPen, Users } from 'lucide-react'

function LandingPage() {
  return (
    <main className=''>
      {/* --------------------- */}
      <header className='h-20 grid place-items-center shadow-lg'>
        <div className="container main-container flex items-center justify-between">
          <h1 className=' text-blue-500 text-3xl'>
            SkillSwap
          </h1>
          <Button>
            Login
          </Button>
        </div>
      </header>
      {/* --------------------- */}
      <div className='container main-container grid lg:grid-cols-2 gap-8 h-full  min-h-[calc(100vh-80px)] place-items-center'>
        <div className='' >
          <h1 className='text-3xl lg:text-4xl xl:text-5xl  font-bold mb-2'>
            Unlock Knowledge. Empower Each Other.
          </h1>
          <h3 className='text-2xl lg:text-3xl  font-medium'>
            Exchange Skills, Learn Together
          </h3>
          <p className='mt-2 lg:mt-3 max-w-xl'>
            A peer-to-peer learning platform built for curious minds.
            Everyone has something valuable to offer—share your knowledge, learn new skills, and grow with a global community of learners.
            From tech and design to languages and lifestyle, discover your passions and help others thrive.
          </p>
          <Button asChild className='px-8 mt-4 lg:mt-5'>
            <Link href={'/dashboard'}>
              Get Started
            </Link>
          </Button>
        </div>
        {/* HERO IMAGE */}
        <div className='hidden lg:grid place-items-center'>
            <Image 
              alt='hero image'
              src={heroImg}
              width={600}
              height={800}
            />
        </div>
      </div>
      {/* --------------------- */}
      <div className='py-8 lg:py-12   bg-purple-100'>
        <div className='container main-container'>
        <div className='grid place-items-center mb-4 lg:mb-6'>
          <h2 className='text-2xl lg:text-3xl xl:text-4xl font-medium'>
            How It Works
          </h2>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* card 1 */}
          <div className='px-4 py-6 shadow-md rounded-lg grid place-items-center bg-white transition-all ease-in-out duration-150 hover:shadow-lg hover:scale-105'>
            <div className='p-2 bg-purple-400 text-white rounded-full grid place-items-center mb-6'>
                <UserPen size={50} />
            </div>
            <div className='text-center'>
              <h3 className='font-bold text-xl lg:text-2xl'>Create Your Profile</h3>
              <p>
                Sign up and set up profile with skills you can teach and skills you can learn.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className='px-4 py-6 shadow-md rounded-lg grid place-items-center bg-white transition-all ease-in-out duration-150 hover:shadow-lg hover:scale-105'>
            <div className='p-2 bg-purple-400 text-white rounded-full grid place-items-center mb-6'>
                <Users size={50} />
            </div>
            <div className='text-center'>
              <h3 className='font-bold text-xl lg:text-2xl'>Find a Partner</h3>
              <p>
                Browse and connect wityh members who have complementary learning intersests.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className='px-4 py-6 shadow-md rounded-lg grid place-items-center bg-white transition-all ease-in-out duration-150 hover:shadow-lg hover:scale-105'>
            <div className='p-2 bg-purple-400 text-white rounded-full grid place-items-center mb-6'>
                <Calendar size={50} />
            </div>
            <div className='text-center'>
              <h3 className='font-bold text-xl lg:text-2xl'>Shedule Sessions</h3>
              <p>
                Arrange one-on-one learn sessions at times that work for both of you.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </main>
  )
}

export default LandingPage