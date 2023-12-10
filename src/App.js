import logo from './logo.svg';
import './App.css';
import { Article,Brand,CTA,Feature,Navbar } from './components';
import {Blog, Features,Footer,Header} from './containers';
import  WhatGPt3  from './containers/whatGPT3/whatGPT3'; 
import Possibility from './containers/possibility/Possibility';


function App() {
  return (
    <>
    <div className='App'>
       <div className='gradient__bg' >  
        <Navbar/>
        <Header/>
       </div>
       <Brand/>
       <Feature/>
       <WhatGPt3/>
       <Features/>
       <Possibility/>
       <CTA/>
       <Blog/>
       <Footer/>

      </div>    
    </>
  );
}

export default App;
