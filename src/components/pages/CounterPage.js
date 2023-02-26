import produce from 'immer'
import React, { useReducer } from 'react'
import Button from '../Button'
import Panel from '../Panel'

const INCREMENT_COUNT = 'increment-count'
const DECREMENT_COUNT = 'decrement-count'
const SET_VALUE_TO_ADD = 'change-value-to-add'
const ADD_VALUE_TO_COUNT = 'add-value-to-count'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1
      return
    case DECREMENT_COUNT:
      state.count = state.count - 1
      return
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload
      return
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd
      state.valueToAdd = 0

      return
    default:
      return
  }
}

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  })

  console.log(state)

  const incrementCounter = () => {
    dispatch({ type: INCREMENT_COUNT })
  }

  const decrementCounter = () => {
    dispatch({ type: DECREMENT_COUNT })
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    })
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button className="mr-2" success onClick={incrementCounter}>
          increment
        </Button>
        <Button danger onClick={decrementCounter}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-grey-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage
