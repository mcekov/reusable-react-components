import React from 'react'
import Table from '../Table'
import SortableTable from '../SortableTable'

const data = [
  { name: 'Orange', color: 'bg-orange-500', score: 2, price: 123 },
  { name: 'Apple', color: 'bg-red-500', score: 3, price: 42 },
  { name: 'Banana', color: 'bg-yellow-500', score: 5, price: 69 },
  { name: 'Lime', color: 'bg-green-500', score: 4, price: 12 },
  { name: 'Chery', color: 'bg-red-500', score: 10, price: 121 },
]

const config = [
  {
    label: 'NAME',
    render: (fruit) => fruit.name,
    sortValue: (fruit) => fruit.name,
  },
  {
    label: 'COLOR',
    render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
  },
  {
    label: 'SCORE',
    /* header: () => <th className="bg-red-500">SCORE</th>, */
    render: (fruit) => fruit.score,
    sortValue: (fruit) => fruit.score,
  },
  {
    label: 'PRICE',
    render: (fruit) => fruit.price,
    sortValue: (fruit) => fruit.price,
  },
]

const keyFn = (fruit) => {
  return fruit.name
}

const TablePage = () => {
  return (
    <div>
      <h2 className='mb-3 text-2xl font-bold'>Table</h2>
      <Table data={data} config={config} keyFn={keyFn} />
      <hr className="border-2 border-grey-500 my-10" />

      <h2 className='mb-3 text-2xl font-bold'>Sortable Table</h2>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  )
}

export default TablePage
