import React from 'react'
import "../../components/brand/brand.css"
import{
  google,slack,atlassian,dropbox,shopify
} from "./importbr"
const Brand = () => {
  return (
    <div  className="gpt3__brand setion__padding">
      <div>
        <img src={google} alt="google" />
      </div>  
      <div>
        <img src={slack} alt="slack" />
      </div>  
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>  
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>  
      <div>
        <img src={shopify} alt="shopify" />
      </div>  
    </div>
  )
}

export default Brand
