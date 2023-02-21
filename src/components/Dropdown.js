import React, { useEffect, useRef, useState } from 'react'
import { GoChevronDown } from 'react-icons/go'
import Panel from './Panel'

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const el = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (!el.current) return
      if (!el.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handler, false)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)

    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.id}
      >
        {option.label}
      </div>
    )
  })

  return (
    <div className="w-48 relative" ref={el}>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen ? (
        <Panel className="absolute top-full">{renderedOptions}</Panel>
      ) : null}
    </div>
  )
}

export default Dropdown
