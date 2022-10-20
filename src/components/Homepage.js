import React from 'react'
import Projects from "./Projects"
import About from "./About"
import Work from "./Work"
import Connect from "./Connect"
import Contact from "./Contact"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
function Homepage() {
    
  return (
    <>
    <div>

      <div  className='relative'>
        
      {/* <span className='ml-2 text-[#f0860c] font-thin'>Iam Saurav kaushal</span> */}
      
       <img className='w-full h-[460px] lg:h-[500px] o' src ="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80"/>
       <p className="absolute text-5xl lg:text-8xl top-40 font-bold  text-[#f9f3f3] left-1/2 -translate-x-1/2 -translate-y-1/2">WELCOME</p> 
       <p className="absolute whitespace-nowrap text-[19px] lg:mt-12  font-semibold lg:text-4xl left-1/2 text-[#f0860c] top-64 lg:top-56 lg:font-bold  -translate-x-1/2 -translate-y-1/2">Thank You For Visiting My Portfolio</p> 
      <a href='mailto:sauravkaushal002@gmail.com' className='absolute whitespace-nowrap text-4xl left-1/2  text-white rounded-xl pl-3 pt-1  pb-2  bg-[#f0860c88] font-medium top-[380px] lg:top-96  -translate-x-1/2 -translate-y-1/2'>E-mail 📩</a>
      {/* </div> */}
     
    </div>
  <div className='lg:flex mb-4 lg:mt-4 lg:mx-4   '>
    <div className='lg:w-[800px] w-full  '>
      <img className=''  src='https://media.tenor.com/2uyENRmiUt0AAAAC/coding.gif'></img>
    </div>
    <div className='mt-8 px-4 lg:mt-16 pb-4'>
    <h1 className='  text-6xl lg:text-8xl'>Hello!</h1>
    <p className='text-justify font-style: italic text-2xl lg:text-4xl mt-6'>My name is Saurav Kaushal. I'm a web developer and i work on react and nodejs technology.   </p>
    </div>
    <div className='fixed w-44 float-right bottom-20 left-[218px]'>
   <a href='https://wa.me/918219465020'><img className='' src='https://i0.wp.com/bannerwishes.com/wp-content/uploads/2020/11/whatsapp-icon-1.png?fit=738%2C256&ssl=1'/></a>
</div>
  </div>
  <Router>
    <Routes>
      <Route path='/project' element={<Projects/>}></Route>
  </Routes>
  </Router>
  {/* <Projects/> */}
<Work/>
<About/>
<Connect/>
<Contact/>

</div>
    </>

  )
}

export default Homepage
