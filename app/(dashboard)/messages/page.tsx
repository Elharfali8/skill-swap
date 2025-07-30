import { messages } from '@/lib/messages'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MessagesPage = () => {
  return (
    <main >
        <div className='mb-4 lg:mb-8 ' >
            <h3 className='text-2xl lg:text-3xl font-bold flex items-center gap-2'>
            <MessageCircle size={30} /> Your Messages
            </h3>
      </div>
      <div className='bg-gray-50 p-4 shadow-lg rounded-lg'>
            <p className='text-lg lg:text-xl mb-2 lg:mb-4'>
                You have <span className='font-semibold'>{messages.length}</span> message
            </p>
            <ul className='grid gap-2'>
                {messages?.map((msg) => {
                    const {id, avatar, name, message } = msg

                    return (
                    <li
                        key={id}
                        className='flex items-start gap-4 p-4 border border-slate-200 rounded-lg cursor-pointer transition-all ease-in-out duration-150 hover:bg-slate-100'
                        >
                          <Image
                                        src={avatar}
                                        alt={name}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                      />
                                      <div className='flex-1 flex items-center justify-between'>
                                        <div>
                                          <h4 className="text-lg font-medium">{name}</h4>
                                          <p className="text-sm text-slate-500">
                                            {message}
                                          </p>
                                        </div>
                                        <div className='flex items-center justify-center h-5 w-5 bg-green-500 text-white rounded-full  font-semibold'>
                                          1
                                        </div>
                                      </div>
                    </li>
                    )
                })}
            </ul>
      </div>
    </main>
  )
}

export default MessagesPage