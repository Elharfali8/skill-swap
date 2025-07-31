import React from 'react'

const SkillLevel = ({
  level,
  onChange
}: {
  level: string,
   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}) => {
  return (
    <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Level</label>
          <select
            value={level}
            onChange={onChange}
            className="border rounded-md p-2 bg-gray-100"
          >
            <option value="">Select level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
  )
}

export default SkillLevel