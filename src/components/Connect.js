import React from 'react'

const Connect = () => {
  return (
    <div className=' mt-6 mb-8 '>
      <div className=' flex justify-center '>
        <h1 className=' text-4xl font-semibold'>Links</h1>
        </div>
      <div className=''>
        <hr className=' mt-4 lg:ml-[42%] lg:mr-[42%] ml-20 mr-20'></hr>
        </div>
        <div className='gap-10 mt-8 lg:gap-40 lg:flex  grid  justify-center'>
        <div className='  '>
        <div  className='  hover:scale-110 transition-transform duration-700 shadow-2xl rounded-lg bg-slate-200 w-40 h-48'>

        <img  className=' h-28 pt-4 w-full px-4 ' src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'></img>
        <p className='  relative  flex justify-center text-2xl font-bold'>Github</p>
        <div className=' mt-2 flex justify-center'>
            <a href='https://github.com/sauravkaushal002' target={'_blank'} className='bg-green-500 pl-4  pr-4 font-bold rounded-2xl  '>Visit</a>
            </div>
</div>

        </div>
        <div className=' '>
        <div  className='hover:scale-110 transition-transform duration-700 shadow-2xl rounded-lg bg-slate-200 w-40 h-48'>
        <div className='flex justify-center'>
           <img  className='h-24 mt-4  ' src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></img>
            </div>
            <p className='flex justify-center text-2xl font-bold'>Linkedin</p>
            <div className=' mt-2 flex justify-center'>
            <a href='https://www.linkedin.com/in/saurav-kaushal-231a39188/' target={"_blank"}  className='bg-green-500 pl-4  pr-4 font-bold rounded-2xl  '>Visit</a>
            </div>
           
</div>
</div>
        </div>
    </div>
  )
}

export default Connect
