import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex

    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    )

    const handleClick = (nextIndex) => {
      setExpandedIndex((currentExpandedIndex) => {
        if (currentExpandedIndex === nextIndex) {
          return -1
        }

        return nextIndex
      })
    }

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 bordr-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded ? <div className="border-b p-5">{item.content}</div> : null}
      </div>
    )
  })

  return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion
