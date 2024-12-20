import React from 'react'
import Image from 'next/image'

const Signup = () => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="  relative flex justify-center items-center modal backdrop-blur-sm">
      <div  className="relative max-tablet:w-[90%] tablet:w-[80%] max-pc:h-full pc:h-[80vh] pc:overflow-y-scroll hide-scrollbar pc:bg-gradient-to-r max-pc:bg-none  " >
          <form  className=" max-pc:hidden" method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="text-base-300 outline-none btn-sm border-none    absolute right-2 top-2 z-10">✕</button>
          </form>
          <div className="flex h-full justify-between  max-pc:justify-center max-pc:bg-transparent items-end ">


          <div className="rounded-none card bg-base-100 max-tablet:w-full tablet:w-[450px] pc:w-1/3 h-full max-pc:overflow-y-scroll pc:overflow-visible hide-scrollbar   shadow-2xl">
          <form className='pc:hidden' method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            <button className="text-base-300 outline-none btn-sm border-none    absolute right-2 top-2 z-10">✕</button>
          </form>

          <div className='mt-4 flex flex-col gap-2 justify-center items-center pc:hidden '>
            <p className='text-secondary text-xl font-roboto font-bold'>Join Our Community</p>
            <p className='text-secondary text-xs font-roboto'>Connect with fellow learners, share knowledge, and grow together.</p>
            </div>
          <form className="card-body bg-base-100">
  <div className="form-control">
    <label className="label">
      <span className="label-text">Full Name</span>
    </label>
    <input type="text" placeholder="Full Name" className="input input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Username</span>
    </label>
    <input type="text" placeholder="Username" className="input input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <input type="password" placeholder="Password" className="input input-bordered" required />
    <label className="label">
      <span className="label-text">Confirm Password</span>
    </label>
    <input type="password" placeholder="Confirm Password" className="input input-bordered" required />
  </div>
  <div className="form-control">
  <label className="label mt-3">
      <span className="label-text">Profile Picture</span>
    </label>
    <input
      type="file"
      className=" file-input-sm file-input-bordered file-input-secondary w-full max-w-xs"
      accept="image/*"
    />
  </div>
  <div className="form-control mt-6">
    <button className="btn btn-base-300">Sign Up</button>
  </div>
</form>
    </div>

        <div className='max-pc:hidden flex flex-col justify-between items-center h-full pt-8'>
        {/* <p className='text-base-100 text-3xl font-roboto font-bold'>Welcome to Peer to Peer</p> */}
            <div className='flex flex-col gap-2 justify-center '>
            <p className='text-base-100 text-3xl font-roboto font-bold'>Join Our Community</p>
            <p className='flex justify-center items-center text-center text-base-100 text-lg font-roboto'>Connect with fellow learners, share knowledge, and grow together.</p>
            </div>
            

            <Image src="/preview1.png" alt="Custom" quality={100} width={600} height={600} className="  border  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" />
        </div>
    
        
          </div>
          
        </div>
      </dialog>
    </>
  )
}

export default Signup