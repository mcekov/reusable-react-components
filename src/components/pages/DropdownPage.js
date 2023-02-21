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
    <div className="flex">
      <Dropdown value={selection} onChange={handleSelect} options={options} />
    </div>
  )
}

export default DropdownPage
