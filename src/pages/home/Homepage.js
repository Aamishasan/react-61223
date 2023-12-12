import React from 'react'
import "./home.css"
import Myfirst from "../../components/myfirst/Myfirst"
import Second from '../../components/second-comp/Second'
import Third from '../../components/thirsd/Third'

// let a= 5;

const Homepage = (props) => {
  return (
    <div className='home-main'>
        <div>
        <Myfirst/>
        </div>

        <div>
        <Myfirst/>
        <Second value1={props.pic1} value2={props.pic2}/>
        {/* <Third/> */}
        </div>

        <div>
          <br/>
          <br/>
          Muhammad Amish Hasan
        <Third/>
        </div>


    </div>
  )
}

export default Homepage