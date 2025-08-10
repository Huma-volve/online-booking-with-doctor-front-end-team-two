import React from 'react'
import { Button } from '@/components/ui/button';

export default function AddNewCard() {
  return (
    <>
        <main className='min-h-screen px-16  flex flex-col justify-center'>
        <section className='space-y-6' >
          <h1 className='text-center text-2xl lg:text-4xl font-semibold'>Add New Card</h1>
       <div className=' '>
      <img src="/visa.png" alt="visa image" className='w-full max-h-[250px]  object-fill ' />
    </div>
  
    <div className='space-y-4 mt-6'>
      <div className=' flex flex-col gap-1 '>
          <label htmlFor="CardholderName" className='text-base text-gray-500'>Cardholder Name</label>
      
<input type="text" id="CardholderName" name="CardholderName" placeholder='Cardholder Name' className='input  bg-gray-100 border-none'/>
</div>

      <div className='flex flex-col gap-1 '>
          <label htmlFor="CardNumber" className='text-base text-gray-500'>Card Number</label>
      
<input type="text" id="CardNumber" name="Cardholder Name" placeholder='Card Number' className='input  bg-gray-100 border-none'/>
</div>

  <Button type='submit' className="w-full mt-2  py-2 rounded-lg  bg-[#145DB8] hover:bg-[#0f4c9e]">
              Save
            </Button>


    </div>

        </section>
    </main>
    </>
  )
}
