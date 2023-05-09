import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate} from 'react-router-dom'
import { UserContext } from '../UserContext'

const Navbar = () => {

  const[ toggle,setToggle] = useState(false)
  const NavLinks =['About','Blog','Contact-Us','Login']

  const {setUserInfo,userInfo} = useContext(UserContext);

  
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    })
      .then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      })
      .catch(error => console.error(error));
  }, []);
  

  async function logout() {
    await fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }
  

  const username = userInfo?.username;
  
  
  
  return (
    <div>
       
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JulishaMedia</span>
    </Link>
    {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button> */}
   <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setToggle(!toggle)}>
  <span className="sr-only">Open main menu</span>
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
   </button>

    {/* <div className=" hidden w-full md:block md:w-auto" id="navbar-default"> */}
    {/* <div className={`hidden w-full md:block md:w-auto ${toggle ? 'block' : ''}`} id="navbar-default"> */}
    <div className={`w-full md:w-auto md:flex-grow ${toggle ? 'block' : 'hidden'}`}>

      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       

        {username && (
          <>
           <li>
          <Link to='/home'  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
        </li>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
       <li><a href="#services">Services</a></li>

             {
         NavLinks.map((item,index)=>(
          
          <li>
          <Link to={item} key={index} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{item}</Link>
        </li>
        
         ))

       }
          </>
        )}
     

       

       
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar