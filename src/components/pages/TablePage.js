import React from 'react'
import Table from '../Table'
import SortableTable from '../SortableTable'


const data = [
  { id: "f3175a20-bf13-4050-8df0-05fa6592cb61", name: 'Orange', color: 'bg-orange-500', score: 2, price: 123 },
  { id: "0a8de762-68e6-44c8-bd4d-98b4d00c5b6d", name: 'Apple', color: 'bg-red-500', score: 3, price: 42 },
  { id: "4da5c414-12f2-40c7-ab00-542dae44c98f", name: 'Banana', color: 'bg-yellow-500', score: 5, price: 69 },
  { id: "0a8de762-68e6-44c8-bd4d-98b4d00a65s4", name: 'Lime', color: 'bg-green-500', score: 4, price: 12 },
  { id: "53182a49-4168-4265-97fe-0c79416f2635", name: 'Chery', color: 'bg-red-500', score: 10, price: 121 },
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
  console.log(fruit);
  return fruit.id
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
