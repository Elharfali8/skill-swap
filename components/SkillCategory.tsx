import React from 'react'

const SkillCategory = (
    {
      category,
      onChange
    }: {
      category: string,
       onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    }
) => {
  return (
    <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={onChange}
            className="border rounded-md p-2 bg-gray-100"
          >
            <option value="">Select category</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="design">Design</option>
            <option value="other">Other</option>
          </select>
        </div>

  )
}

export default SkillCategory