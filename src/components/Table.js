import React from 'react'
import { Fragment } from 'react'

const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>
    }

    return <th key={column.label}>{column.label}</th>

  })

  /* Rows and Cols */
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      )
    })

    /* Table */
    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    )
  })

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  )
}

export default Table
