'use client'

import SkillCategory from '@/components/SkillCategory'
import SkillLevel from '@/components/SkillLevel'
import { SkillNameInput } from '@/components/SkillNameInput'
import { Button } from '@/components/ui/button'
import { addSkill } from '@/features/admin/inputesSlice'
import { AppDispatch } from '@/store'
import { ShieldUser } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

type SkillLevel = "" | "beginner" | "intermediate" | "advanced";


const AdminePage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [level, setLevel] = useState<"beginner" | "intermediate" | "advanced" | "">("")
    const [category, setCategory] = useState('')

    const dispatch = useDispatch<AppDispatch>()

    const handleLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value as SkillLevel)
  }

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  return (
    <main>
        <div className='mb-4 lg:mb-8 ' >
            <h3 className='text-2xl lg:text-3xl font-bold flex items-center gap-2'>
            <ShieldUser size={30} /> Admin Page
            </h3>
      </div>
      {/* INPUTS COMPONENT */}
      <div className='p-4 shadow-lg rounded-lg grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* SKILL NAME */}
            <SkillNameInput
            label="Skill Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a skill name"
          />
            {/* SKILL LEVEL */}
            <SkillLevel 
            level={level}
            onChange={handleLevel}
            />
            {/* SKILL CATEGORY */}
            <SkillCategory 
              category={category}
              onChange={handleCategory}
            />
            {/* DESCRIPTION */}
            <SkillNameInput
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              type="textarea"
            />
            {/* SUBMIT BTN */}
            <div className="flex items-end">
  <Button
    className="w-full"
    onClick={() => dispatch(addSkill({
      title,
      description,
      level,
      category
    }))}
  >
    SUBMIT
  </Button>
</div>

      </div>
    </main>
  )
}

export default AdminePage