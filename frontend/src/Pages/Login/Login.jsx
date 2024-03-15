import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div className='background_color flex justify-center items-center'>
      <div className=' rounded-xl h-128 shadow-lg w-96 bg-white py-9 px-5'>
        <div className='flex justify-center text-6xl font-serif text-blue-700 mb-12 '>
          Login
        </div>
        <form action='#'>
          <div className='inputs'>
            <div className='input'>
              <input type='text' placeholder='Email' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Email</label>
              <span className='input-highlight'></span>
            </div>
            <div className='input'>
              <input type='text' placeholder='Password' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Password</label>
              <span className='input-highlight'></span>
            </div>
          </div>
        </form>
        <button className='form_buttons'>Forgot Password</button>
        <button className='form_buttons'>Login</button>
        <button className='form_buttons'>Sign Up</button>
      </div>
    </div>
  )
}

export default Login
