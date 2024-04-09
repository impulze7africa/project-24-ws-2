import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between py-4 px-10 mb-10'>
            <div className='flex gap-6 items-center px-16'>
                <a className='text-white text-xl' href="#">Penny</a>
                <a className='text-white font-semibold' href="">Home</a>
                <a className='text-white opacity-60' href="#">Our Mission</a>


            </div>
            <div className='flex gap-4 items-center'>
                <button className='text-white py-2 px-5'>Login</button>
                <button className='bg-white rounded-lg text-primary_text py-2 px-5'>Sign Up</button>

            </div>
        </div>
    )
}
