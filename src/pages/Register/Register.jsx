import React, { useState } from 'react'

const RegisterPage = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail]=useState('')

  const register=async(e)=>{
    e.preventDefault();
const response = await fetch('https://julisha.onrender.com/register',{
  method:'POST',
  body:JSON.stringify({username,email,password}),
  headers:{'Content-Type':'application/json'},
})
if(response.status===200){
  alert('registration succesful,proceed to login')
}else{
  alert('something went wrong')
}

  }

  return (

  <div class="flex min-h-full items-center  justify-center  px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8  ">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
       
      </div>
      <form class="mt-8 space-y-6" onSubmit={register} action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="-space-y-px rounded-md   flex-col shadow-sm">
        <div className='flex-col  '>
            <input id="username" 
            name="username" 
            type="text" 
            autocomplete="" required 
            className="relative 
            outline-none 
            my-2 
            block
             w-full
             px-2
            rounded-md 
            border-0 py-1.5 text-gray-900 
            ring-1 ring-inset mb-4 ring-gray-300 
            placeholder:text-gray-400
           focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
           sm:text-sm sm:leading-6"
            placeholder="Username"
            value={username}
            onChange={e=>setUsername(e.target.value)}
            
            />
          </div>
          <div className='flex-col  '>
            <input id="email-address" 
            value={email}
            name="email" type="email"
             autocomplete="email" required 
             className="relative outline-none 
             my-2 block w-full px-2 rounded-md border-0 py-1.5
              text-gray-900 ring-1 ring-inset mb-4
               ring-gray-300 placeholder:text-gray-400 
               focus:z-10 focus:ring-2 focus:ring-inset
                focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 placeholder="Email address"
            onChange={e=>setEmail(e.target.value)}
                 
                 />
          </div>
          <div>
            <input id="password" name="password" 
            type="password" autocomplete="current-password"
             required className="relative  outline-none px-2  
             w-full rounded-md border-0 py-1.5
              text-gray-900 ring-1 ring-
               ring-gray-300 placeholder:text-gray-400 
               focus:z-10 focus:ring-2 focus:ring-inset
               
               focus:ring-indigo-600 sm:text-sm sm:leading-6" 
               placeholder="Password" 
               value={password}
            onChange={e=>setPassword(e.target.value)}
               
               />
          </div>
        </div>
  
        
  
        <div>
          <button type="submit" class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
              </svg>
            </span>
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
  
  )
}

export default RegisterPage