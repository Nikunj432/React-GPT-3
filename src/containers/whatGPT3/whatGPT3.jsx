import React from 'react';
import Feature from '../../components/feature/Feature';
import './WhatGPT.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3"   style={{width:"80%",marginLeft:"10%",marginRight:"10%",marginTop:"10%"}} >  
    <div className="gpt3__whatgpt3-feature " >
        <div className="container" style={{display:"flex",flexDirection:"row"}} > 
        <div/>
          <div className="row"> <div className="col-md-2" style={{textAlign:"left",fontSize:"30px",fontWeight:"bold",marginLeft:"1%",color:"white"}} >What is GPT-3</div> <div className="col-md-10" style={{textAlign:"center",marginLeft:"50%",color: "#81AFDD"}} >We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</div>  </div>
        </div>
    </div> 
    <div className="gpt3__whatgpt3-heading" style={{display:"flex"}}>
      <h1 className="gradient__text">The possibilities are beyond <br /> your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container" style={{display:"flex",flexDirection:"row" ,color: "#81AFDD"}}>
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default WhatGPT3;