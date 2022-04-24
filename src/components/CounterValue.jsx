import React from 'react'

const CounterValue = ({value,loading}) => {
  return (
    <div className='count-value'>CounterValue :{!loading && value} </div>
  )
}

export default CounterValue