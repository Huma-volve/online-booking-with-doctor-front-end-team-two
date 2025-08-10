import { Button } from '@/components/ui/button'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router'

export default function EmptyCards() {
   const navigate = useNavigate()
  return (
   
    <>
      <section className='min-h-screen p-4 space-y-4 '>
        <div className='flex flex-col items-center' >

         <div className=''>  
             <img src="/public/911f4f7102864af437c2079def62dc7d8ddfdb1a (1).png" alt="EmptyCards image" 
          className='w-[100%] h-64 md:h-[350px] lg:h-[400px]   '/>
       </div>
       <div className='space-y-2'>
        <h2 className=' text-xl md:text-3xl text-center font-semibold '>Nothing to display here!</h2>
        <p className='text-gray-500 text-center text-base'>Add your cards to make payment easier</p>
       </div>
</div>

        <div>
      
          <Button type="submit"
                  className="mt-8 w-full  py-2 rounded-lg  bg-[#145DB8] hover:bg-[#0f4c9e]"
                  onClick={()=>{
                    navigate('/VisaVersion')
                  }}>
                      Add Card  <FaPlus />
                    </Button>
       </div>
    </section>
    </>
  )
}
