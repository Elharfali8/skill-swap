import SuggestedUsers from '@/components/SuggestedUsers';
import { Infinity, BookOpen, MessageCircle, Users } from 'lucide-react';

import React from 'react'

const DashboardPage = () => {


  const stats = [
  {
    title: "Skills Offered",
    value: 3,
    icon: <Infinity size={32} />,
    color: "bg-blue-500",
  },
  {
    title: "Skills Learning",
    value: 2,
    icon: <BookOpen size={32} />,
    color: "bg-green-500",
  },
  {
    title: "Unread Messages",
    value: 5,
    icon: <MessageCircle size={32} />,
    color: "bg-yellow-500",
  },
  {
    title: "New Matches",
    value: 4,
    icon: <Users size={32} />,
    color: "bg-purple-500",
  },
];

const recentMessages = [
  {
    name: 'Amina',
    message: 'Amina replied to your message.'
  },
  {
    name: 'Omar',
    message: 'You matched with Omar for English ↔ Programming.'
  },
]



  return (
    <main className='min-h-[200vh]'>
      {/*  */}
      <div className='mb-4 lg:mb-8 bg-slate-200 rounded-lg p-2 shadow-md' >
        <h3 className='text-xl lg:text-2xl font-medium text-gray-700'>
          👋 Hello, <span className=' font-semibold'>Youssef</span>! <br />
          Ready to learn or teach today?
        </h3>
      </div>
      {/* STATS  */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-xl text-white p-6 flex flex-col gap-4 shadow-md ${stat.color} hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div>{stat.icon}</div>
              </div>
              <div className="text-sm lg:text-base opacity-90">{stat.title}</div>
            </div>
          ))}
        </div>
        {/* MESSAGES  */}
        <div className='my-4 lg:my-8 '>
            <div className='py-2 pl-2 pr-8 bg-slate-200 rounded-lg'>
              <h3 className='text-xl lg:text-2xl font-bold flex items-center gap-2 text-gray-700 mb-2 lg:mb-3'>
                <MessageCircle size={32} /> Recent Messages 
              </h3>
              <ul className='grid gap-3' >
                {recentMessages.map((item, index) => {
                  return (
                    <li key={index} className='p-2 rounded-md bg-slate-400'>
                        <span className='block text-lg lg:text-xl font-semibold '>
                          {item.name}
                        </span>
                        <p className='text-gray-100'>
                          {item.message}
                        </p>
                    </li>
                  )
                })}
              </ul>
            </div>
        </div>
        {/* SUGGESTEDUSERS */}
        <SuggestedUsers  />
    </main>
  )
}

export default DashboardPage