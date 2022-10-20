import React from 'react'

function Projects() {
  return (
    <div className=" pb-8 bg-[#dddddbd1]">
        <h1 className='py-4 flex justify-center text-4xl  font-semibold'>Projects</h1>
        <div>
        <hr className='lg:ml-72 lg:mr-72 ml-16 mr-16'></hr>
        </div>
        
   <div className=' flex justify-center gap-20 lg:gap-60 mt-6'>
<div className='bg-blue-600 transition-transform duration-500 hover:scale-110 rounded-lg shadow-2xl hover:bg-green-600 w-36 h-36'>
    <img  className="h-28 rounded-t-lg "src='https://img.freepik.com/premium-photo/breakfast-luxury-hotel-table-full-various-food-from-buffet-modern-resort_130458-1027.jpg?w=2000'></img>
<p className=' text-center'>Food-recipes-app</p>
   </div>

<div className=' transition-transform duration-500  bg-blue-600 hover:scale-110 rounded-lg shadow-2xl  hover:bg-[#28a745] w-36 h-36'>
   <img className='h-28 rounded-t-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9b5h8H0NSJAeyPEU2b2wqXma-bnqLkF54-xhB-vPWv05y0sJ4hfmHeuFFoYqj5176O30&usqp=CAU'></img> 
<p className='text-center'>News-web-app</p>
</div>
</div>
<div className=' rounded-lg mt-10 flex justify-center gap-20'>
<div className='transition-transform duration-500 hover:scale-110 rounded-lg shadow-2xl bg-blue-600 hover:bg-[#28a745] w-36 h-36'>
   <img className='h-28 rounded-t-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBcZy3QX4pZokv34e-GrJJSq1qws1V1kyhQ&usqp=CAU"></img> 
<p className='text-center'>Todo-list</p>
</div>
<div className=' transition-transform duration-500 hover:scale-110 rounded-lg shadow-2xl bg-blue-600 hover:bg-green-600 w-36 h-36'>
   <img className='h-28 rounded-t-lg' src='https://media.tenor.com/2uyENRmiUt0AAAAC/coding.gif'></img> 
<p className='text-center'>Portfolio</p>
</div>
</div>

</div>

  )
}

export default Projects
