import React, { useReducer } from 'react'


const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  

  return (
    <>
    <div className='container'>
    
    <div className='number'>{state.count}</div>  
    <div className='btns-container'>
    <button className='increment' onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    <button className='increment' onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    <button className='increment' onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
    </div>
    </div>
    </>
  )
}

export default Counter

const initialState = { count: 0 }
  const reducer = (state, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 }
      case 'DECREMENT':
        return { count: state.count - 1 }
      case 'Reset':
        return { count: 0}
      default:
        return state
    }
  }