import React from 'react'
import "./featuring.css"
const Feature = ({title,text}) => {
  return (
    <>
    <div  className='gpt3__features-container__feature'>
      <div  className='gpt3__features-container__feature-title' style={{color:"white"}} >
      <div/>
      <h1>{title} </h1>
      </div>
      <div className='gpt3__features-container_feature-text' style={{color:"#81AFDD"}}>
      {text} 
      </div>
    </div>


    </>
  )
}

export default Feature
