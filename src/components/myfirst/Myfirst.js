import React from 'react'
import "./first.css"

const Myfirst = (props) => {

  return (
    <>
    <div className='myfirst-main'>
        <button onClick={props.clik}>My button</button>
    </div>
    </>
  )
}

export default Myfirst