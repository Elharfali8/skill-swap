'use client'

import { useEffect, useState } from "react"
import { Progress } from "./ui/progress"

const ProgressPerWeek = () => {
  const totalLessons = 8
  const completedLessons = 6

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const percentage = (completedLessons / totalLessons) * 100
    const timer = setTimeout(() => setProgress(percentage), 300)
    return () => clearTimeout(timer)
  }, [completedLessons, totalLessons])

  return (
    <div className='my-4 lg:my-8 shadow-lg rounded-lg p-2'>
      <h1 className='text-xl lg:text-2xl font-bold flex items-center gap-2 text-gray-700 mb-2 lg:mb-3'>
        Progress this week
      </h1>
      <div className="space-y-2 w-full lg:w-[60%]">
        <div className="flex justify-between text-sm text-gray-600 font-medium">
          <span className="text-lg lg:text-xl font-medium">{completedLessons} of {totalLessons} lessons completed</span>
          <span className="text-lg lg:text-xl font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="w-full h-3" />
      </div>
    </div>
  )
}

export default ProgressPerWeek
