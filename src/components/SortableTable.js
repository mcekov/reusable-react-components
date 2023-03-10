import React from 'react'
import { RxCaretDown, RxCaretUp, RxCaretSort } from 'react-icons/rx'
import Table from './Table'

import useSort from '../hooks/use-sort'

const SortableTable = (props) => {
  const { config, data } = props
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(data, config)

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    }
  })

  return <Table {...props} data={sortedData} config={updatedConfig} />
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <RxCaretSort />
  }

  if (sortOrder === null) {
    return <RxCaretSort />
  } else if (sortOrder === 'asc') {
    return <RxCaretUp />
  } else if (sortOrder === 'desc') {
    return <RxCaretDown />
  }
}

export default SortableTable
