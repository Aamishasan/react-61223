import React from 'react'
import "./home.css"
import Myfirst from "../../components/myfirst/Myfirst"
import Second from '../../components/second-comp/Second'
import Third from '../../components/thirsd/Third'

// let a= 5;
let a="";

const Homepage = (props) => {
  function handleClick (){
    
    {a='you pressed the button'}
    {console.log(a)}
  }
  return (
    <div className='home-main'>
        
        <Myfirst clik={handleClick}/>

    </div>
  )
}

export default Homepage