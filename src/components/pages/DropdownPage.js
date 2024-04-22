import React, { useRef, useState } from 'react'
import Dropdown from '../Dropdown'

const options = [
  {
    id: 1233333312131,
    label: 'Red',
    value: 'red',
  },
  {
    id: 12323553131,
    label: 'Green',
    value: 'green',
  },
  {
    id: 12679797893131,
    label: 'Blue',
    value: 'blue',
  },
]

const DropdownPage = () => {
  const [selection, setSelection] = useState('')

  const handleSelect = (option) => {
    setSelection(option)
    console.log(option)
  }

  return (
    <>
    <h1 className="text-2xl font-bold mb-4">Dropdown</h1>
      <Dropdown value={selection} onChange={handleSelect} options={options} />
    </>
  )
}

export default DropdownPage
