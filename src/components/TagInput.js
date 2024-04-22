import React, { useState } from 'react'

const TagInput = () => {
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])

  const handleChange = (e) => {
    setTag(e.target.value)

    console.log(tag);
  }

  const handleKeyDown = (e) => {
    const newTag = tag.trim()

    if ((e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar' || e.key === ',' || e.key === 'Tab') && newTag.length && !tags.includes(newTag)) {
      e.preventDefault()
      setTags(prevTags => [...prevTags, newTag])
      setTag('')
    } else if (e.key === 'Backspace' && !newTag.length && tags.length) {
      e.preventDefault()
      setTags(prevTags => prevTags.slice(0, -1))
    }
  }

  const removeTag = (index) => setTags(prevTags => prevTags.filter((tag, i) => i !== index))

  return (
    <div className='flex border rounded p-2 shadow-sm'>
      {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
        add tag
      </label> */}
      {tags.map((tag, index) => (
        <div key={index} className="flex bg-gray-200 text-gray-800 rounded px-2 py-1 mr-2">
          {tag}

          <button onClick={() => removeTag(index)} className="ml-2">&#x2715;</button>
        </div>

      ))}

      <input id='tag' value={tag} onChange={handleChange} onKeyDown={handleKeyDown} type="text" className="borde-0 outline-0 rounded px-1 py-1 w-full" />
    </div>
  )

}

export default TagInput