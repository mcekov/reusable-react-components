import React, { useEffect, useState } from 'react'

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    console.log(count)
  }, [count])

  const incrementCounter = () => {
    setCount(count + 1)
  }

  const resetCounter = () => {
    setCount(initialCount)
  }

  return {
    count,
    incrementCounter,
    resetCounter,
  }
}

export default useCounter
