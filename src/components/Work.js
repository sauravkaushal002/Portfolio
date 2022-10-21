import React from 'react'

const Work = () => {
  return (
    <div className='mb-8' id='work'>
      <div className=' mt-4 flex justify-center'>
      <h1 className='  text-4xl  font-semibold'>Work Experience</h1>
      </div>
      <div>
        <hr className='lg:ml-[35%] mt-6 lg:mr-[35%] ml-10 mr-10'></hr>
        </div>
      <div className='grid  gap-16 lg:gap-32 pt-8 lg:flex justify-center'>
        
        <div className='hover:scale-110 transition-transform duration-700 work-card bg-blue-800 rounded-lg shadow-2xl w-60 h-72 '>
      
          <img className=' hover:top-10 relative top-[40%]' src="https://saffronchariot.com/wp-content/uploads/2021/05/saffron-chariot-technologies-loader-logo.png"></img>
          <p className='relative opacity-20 text-center hover:opacity-100 top-32'>Mern stack intern at saffron chariot technologies chandigarh.</p>
        </div>
        <div className='hover:scale-110 transition-transform duration-700 work-card bg-[#00838d] hover:bg-[#00838d]  rounded-lg shadow-2xl w-60 h-72 '>
          
        
        <img className=' relative top-[40%]' src="https://saffronchariot.com/wp-content/uploads/2021/05/saffron-chariot-technologies-loader-logo.png"></img>
        <p className='relative opacity-10 text-center hover:opacity-100 top-32'>Jr. web developer at saffron chariot technologies chandigarh.</p>
          </div>
          
            {/* <div className="relative w-60 h-72 bg-white ">
    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
      <h1  className='' >Title</h1>
      <p  className="mx-auto">Description</p>
      </a>
    <a href="#" className="relative">
        <div className="h-48 flex flex-wrap content-center">
            <img src="/image_url" className="mx-auto  " alt=""/>
        </div>
    </a>
  </div> */}
      </div>
    </div>
  )
}

export default Work
