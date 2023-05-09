import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';

const CreatePost = () => {
    const[title,setTitle]=useState('')
    const[summary,setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);


    const createPost=async(e)=>{
      const data = new FormData()
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    e.preventDefault();
    console.log(files)
 


    const response = await fetch('http://localhost:4000/createPost', {
        method: 'POST',
        body: data,
        credentials: 'include',
      });
      if (response.ok) {
        setRedirect(true);
      }

    }
    if (redirect) {
        return <Navigate to={'/'} />
      }

  return (
    <div>
        <div>
        <p>Create a New Post</p>

        </div>
        <div>
        <form className='flex-col' onSubmit={createPost}>
            <div>
            <input type="text"
             name="title" 
             value={title} 
             placeholder='Title' 
             onChange={e=>setTitle(e.target.value)} 
             className='
             my-2 block w-full px-2 rounded-md border-0 py-1.5
              text-gray-900 ring-1 ring-inset mb-4
               ring-gray-300 placeholder:text-gray-400 
               focus:z-10 focus:ring-2 focus:ring-inset
                focus:ring-black-600 sm:text-sm sm:leading-6 '
             id="" />

            </div>
            <div>

            <input type="text" 
                className='
                my-2 block w-full px-2 rounded-md border-0 py-1.5
                 text-gray-900 ring-1 ring-inset mb-4
                  ring-gray-300 placeholder:text-gray-400 
                  focus:z-10 focus:ring-2 focus:ring-inset
                   focus:ring-black-600 sm:text-sm sm:leading-6 '
            name="summary" placeholder='summary' onChange={e=>setSummary(e.target.value)} id="" />

            </div>
            <div>
            <input type="file"
            onChange={e=>setFiles(e.target.files)}
            className='
                my-2 block w-full px-2 rounded-md border-0 py-1.5
                 text-gray-900 ring-1 ring-inset mb-4
                  ring-gray-300 placeholder:text-gray-400 
                  focus:z-10 focus:ring-2 focus:ring-inset
                   focus:ring-black-600 sm:text-sm sm:leading-6 ' name="image" 
             id="" />

            </div>
            <ReactQuill theme="snow" value={content} onChange={setContent} />
            <button type='submit' className="bg-blue-500 mt-4 w-full text-white px-4 py-2 rounded-md ring-1 ring-inset">Create Post</button>

        </form>
        </div>
        
    </div>
  )
}

export default CreatePost