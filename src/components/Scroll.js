import React, { useEffect, useState } from 'react'

const Scroll = () => {

    const [visible ,setVisible] =useState(false)

    const topBtn =()=>{
        window.scrollTo({top:0 , left:0, behavior:"smooth"})
    };

    const gottoTop=()=>{
     let height =250;  
     const scollHeight =document.body.scrollTop || document.documentElement.scrollTop
     console.log(scollHeight)

     if(scollHeight>height){
 setVisible(true)
     }
     else{
setVisible (false)
     }
    }
    useEffect(()=>{
    window.addEventListener('scroll',gottoTop)
    },[])
  return (
    <div>
        {visible&&
         <div className='fixed w-20 lg:left-[95%] bottom-0 left-[78%]'>
         <button onClick={topBtn}><img src='https://www.aliet.ac.in/ict/img/up.png'></img></button>
       </div>}
     
    </div>
  )
}

export default Scroll
