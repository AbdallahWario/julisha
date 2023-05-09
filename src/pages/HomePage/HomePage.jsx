import React, { useContext, useEffect } from 'react'
import Desc_Cards from '../../components/Desc_Cards'
import { UserContext } from '../../UserContext'
import Posts from '../Posts/Posts';



const HomePage = () => {
  const {userInfo,setUserInfo} = useContext(UserContext);
  
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  

  const username = userInfo?.username;
  
  
  return (<>
    {username && (
      <>
        <Posts/>
        
      </>
    )}{!username &&(

      <div id='about' className="md:flex-col  md:gap-2 md:py-4 my-4 w-full md:w-3/4">
         <div className=''>
    <h1 className='text-2xl font-semibold m-2 md:flex md:m-0'>We are JulishaMedia</h1>
  </div>
  <div className=' md:flex-row mb-4 justify-center md:flex py-2 flex-row lg:flex-row h-[400px]'>
    <div className='flex md:flex items-center mt-4 md:w-1/2'>
      <p>
       Welcome to our PR (public relations) company! We specialize in managing and improving the reputation of individuals, organizations, and brands. Our team uses various communication strategies and tactics to create and maintain a positive public image for our clients. Our services include media relations, event planning, branding and messaging, crisis management, and more.
      </p>
    </div>
    <div className='my-0 md:w-1/2'> 
      <img src="/pr2.jpg" alt="" className='h-auto md:max-w-xl  md:max-h-fit'/>
    </div>
  </div>


    
        <div  className='my-24  flex-col items-center justify-center w-full'>
          <p  id='services' className='font-bold text-2xl'>What we do</p>
          <div className="flex flex-wrap items-center lg:items-center lg:justify-center justify-center gap-4 px-2 py-4 md:w-full md:flex-wrap ">
         
          <Desc_Cards
          service={"Media Relations"} 
          desc={"Julisha Media provides Media Relations services to help clients build and maintain relationships with journalists and influencers, generate positive media coverage, and increase brand awareness and sales.This also secures media coverage in targeted publications and outlets"}/>


          <Desc_Cards 
           service={"Content Marketing"}
           desc={"Julisha Media offers Content Marketing services, which involves creating and distributing high-quality, valuable, and engaging content across a range of platforms, including blog posts, social media updates, videos, and infographics. The aim is to attract and retain a clearly defined audience, establish the client as a thought leader and industry expert, and drive engagement and conversions"}
           />
          <Desc_Cards   
          service={"Social Media Management"}
          desc={"At Julisha Media, we offer social media management services to help clients build and maintain a strong social media presence across various platforms, including Facebook, Twitter, Instagram, LinkedIn, and YouTube. Our team of social media experts works closely with clients to develop a social media strategy that aligns with their business goals and target audience."}
          />
          <Desc_Cards
           service={"Branding and Positioning"}
           desc={"At Julisha Media, we understand the importance of creating a strong and memorable brand image that differentiates our clients from their competitors and resonates with their target audience. We offer branding and positioning services to help clients develop a unique brand identity, messaging, and positioning that reflects their values, mission, and vision."}
           />
          <Desc_Cards
           service={"Crisis Management"}
           desc={"At Julisha Media, we understand that crises can happen at any time and can severely damage a client's reputation and business. We offer crisis management services to help clients develop and implement a crisis communication plan that minimizes negative publicity, reputation damage, and customer loss"}
           
           />


        </div>
        </div>
<div className="div">
<p className='font-bold text-2xl'>WhY Choose Us</p>
<div className="  flex flex-wrap items-center justify-center gap-4 px-2 py-4">
         
         <Desc_Cards 
         service={"Results-Driven Approach"}
         desc={"Julisha Media is committed to delivering measurable and tangible results to clients. Our team of experts uses data-driven insights and metrics to optimize the marketing strategy and improve performance. We set clear and achievable goals for each campaign and track progress to ensure that we are delivering the desired outcomes. By focusing on results and continuous improvement, Julisha Media can help clients achieve better ROI and drive business growth."}
         />
         <Desc_Cards
         service={"Client-Centric Approach"}
         desc={" We put clients first and is dedicated to providing exceptional customer service and support. We work closely with clients to understand their unique needs and goals and develop customized marketing solutions that align with their business objectives. We value transparency and communication and keep clients informed and involved throughout the marketing process. By fostering strong relationships with clients, Julisha Media can deliver personalized and effective marketing solutions that drive business success."}
         />
        <Desc_Cards
        service={"Integrated Marketing Solutions"}
        desc={"We offer a comprehensive range of marketing services that are customized to the client's needs and goals. From branding and positioning to digital marketing and social media management, Julisha Media provides integrated marketing solutions that help clients achieve their business objectives. By leveraging the power of multiple marketing channels and strategies, Julisha Media can deliver better results and drive business growth."}
        />

       </div>

</div>
        
        
    </div>
    )

    }
  </>
    
  )
}

export default HomePage