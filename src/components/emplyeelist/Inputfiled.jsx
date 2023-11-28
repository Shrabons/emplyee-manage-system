import React from 'react'

const Inputfiled = () => {
  return (
    <div>
         <div className="w-[50%] m-auto mt-8">
            <div className="flex gap-4">
                <input type="text" placeholder='Name' className='border border-solid border-[#A9A9A9] w-fll py-2 px-8 rounded-full w-full' />
                <input type="time" placeholder='Ofiice Time' className='border border-solid border-[#A9A9A9] w-fll  px-8 py-2 rounded-full w-full' />
            </div>
            <div className="flex gap-4 mt-5">
                <input type="tel" placeholder='Phone' className='border border-solid border-[#A9A9A9] w-fll py-2 px-8 rounded-full w-full' />
                <input type="week" placeholder='Ofiice Time' className='border border-solid border-[#A9A9A9] w-fll  px-8 py-2 rounded-full w-full' />
            </div>
            <div className=" mt-5">
                <input type="text" placeholder='desgination' className='border border-solid border-[#A9A9A9] w-fll py-2 px-8 rounded-full w-full' />   
            </div>
            <button type='button' className='w-full text-xl bg-primary text-white capitalize rounded-full py-2 mt-5'>submit</button>
        </div>
    </div>
  )
}

export default Inputfiled