import React from 'react'
import pic from '../../resource/1.png'
const Second = (props) => {
  return (
    <div style={{background:"blue"}}>
        Main content of the page
        {/* {console.log(props.value)} */}
        <img src={props.value1} />
    </div>
  )
}

export default Second