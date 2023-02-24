import React from 'react'
import Button from '../Button'

import useCounter from '../../hooks/use-counter'

const CounterPage = ({ initialCount }) => {
  const { count, incrementCounter, resetCounter } = useCounter(initialCount)

  return (
    <div className="mt-5">
      <h1> Count is {count}</h1>
      <div className="flex mt-2">
        <Button className="mr-2" success onClick={incrementCounter}>
          increment
        </Button>
        <Button danger outline onClick={resetCounter}>
          Reset
        </Button>
      </div>
    </div>
  )
}

export default CounterPage
