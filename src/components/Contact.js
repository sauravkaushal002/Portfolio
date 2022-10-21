import React from 'react'
 import { useState } from 'react'
import Swal from 'sweetalert2'
const Contact = () => {
    
  const [fullname, setName] = useState([])
  const [email,setEmail] =useState([])
 const onChange=(e)=>{
  const {name,value}=e.target
  setEmail((preval)=>{
    return {...preval,[name]:value}
  })
  setName((Value)=>{
    return {...Value,[name]:value}
  })
 }
 const SubmitForm =(e)=>{
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        e.preventDefault()
      
        if(fullname||regex.test(email)===true)
        { console.log(fullname,email)
          
          setEmail('')
           Swal.fire({
            icon:"success",
            title: "thankyou i'll reply you soon"
         
          })
         }
          // setForm([...form, data])
          else{
            Swal.fire({
              icon:"error",
              title:"Please fill the valid details",
              text:"email should be valid"
            })
          }
         
          }
       
        
      
       
       
    
  return (
    <div id='contact' className=' mt-16 pt-6 bg-[#dddddbd1]'>
     <div className='font-semibold text-4xl flex justify-center'>
        <h1 className=''>Contact me</h1>
        </div> 
        <div>
        <hr className=' mt-4 lg:ml-[25%] lg:mr-[25%] ml-16 mr-16'></hr>
        </div>
        <div  className=' lg:flex sm:grid ml-12 mt-4 lg:ml-96'>
       
            <form onSubmit={(e) => SubmitForm(e)}  className=' inline-grid'>
            <label className=' text-2xl font-mono'>Name:</label> 
             <input onChange={onChange} name='fullname' className=' w-60 mb-2 rounded-sm shadow-2xl bg-slate-200'></input> 
             <label  className='text-2xl font-mono'>Email:</label> 
            <input placeholder=' Eg:saurav@gmail.com'  onChange={onChange}  name='email' className=' rounded-sm shadow-2xl bg-slate-200'></input>
            <label className='mt-2 text-2xl font-mono'>Message:</label>
            <textarea   className='mt-1 rounded-sm shadow-2xl bg-slate-200   '></textarea>
            <div className='flex justify-center'>
            <button onClick={SubmitForm} className=' font-semibold mt-4 pt-1 pb-1  rounded-lg w-32 text-2xl bg-green-500'>Submit</button>
            </div>
            
            </form>
            <div className=' ml-16 mt-8  lg:ml-80'>
          <h1 className=' mt-4 ml-2 text-2xl font-semibold'>Social Links</h1>
          <div className=' mt-6 lg:mt-16 gap-6 relative right-6 flex '>
          <a href='' className=" ">
      <img className='w-12' src='https://www.facebook.com/images/fb_icon_325x325.png'></img>
      </a>
  <a href='https://www.instagram.com/sourabhkaushal002/' className=''>
  <img className='w-12' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'></img>
  </a>
  <a href='https://www.linkedin.com/in/saurav-kaushal-231a39188/' className=''>
  <img className='w-12' src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></img>
  </a>
          </div>
     
          
        </div>
        </div>
        <div className='mt-10 p-10 flex justify-center'>
          <p className='text-lg font-light'>© 2022 Saurav kaushal</p>
        </div>
    </div>
   
  )
}

export default Contact  
