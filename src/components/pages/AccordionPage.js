import React from 'react'
import Accordion from '../Accordion'

const items = [
  {
    id: 123131,
    label: 'Title 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam quas et consequatur illo labore ipsam, perferendis repellendus quae dignissimos nobis nulla, quam praesentium aliquid velit voluptatum ut, sunt debitis.',
  },
  {
    id: 12213323131,
    label: 'Title 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam quas et consequatur illo labore ipsam, perferendis repellendus quae dignissimos nobis nulla, quam praesentium aliquid velit voluptatum ut, sunt debitis.',
  },
  {
    id: 123333131,
    label: 'Title 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam quas et consequatur illo labore ipsam, perferendis repellendus quae dignissimos nobis nulla, quam praesentium aliquid velit voluptatum ut, sunt debitis.',
  },
]

const AccordionPage = () => {
  return (
    <>
      <Accordion items={items} />
    </>
  )
}

export default AccordionPage
