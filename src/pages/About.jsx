import React from 'react';
import aboutImage from '/pr.jpg';

function About() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-16">
      <div className="flex flex-col justify-center items-center max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-xl text-gray-700 mb-8">
          Welcome to Julisha Media, a full-service marketing agency that helps businesses achieve their marketing goals and drive growth. Our team of experienced marketing professionals is passionate about creating customized marketing solutions that deliver results and exceed client expectations.
        </p>
        <p className="text-xl text-gray-700 mb-8">
          At Julisha Media, we believe that every business has a unique story and personality, and our mission is to help clients tell their stories in a compelling and engaging way. We combine creativity, strategy, and technology to develop integrated marketing solutions that are tailored to each client's needs and goals.
        </p>
        <p className="text-xl text-gray-700 mb-8">
          Our team is made up of experts in branding, positioning, digital marketing, social media management, content creation, and crisis management. We are dedicated to staying up-to-date with the latest trends and technologies in marketing and continuously improving our skills and knowledge to deliver the best possible results to our clients.
        </p>
        <p className="text-xl text-gray-700 mb-8">
          We take a client-centric approach to marketing, working closely with each client to understand their unique needs and goals and develop customized marketing solutions that align with their business objectives. We value transparency and communication and keep clients informed and involved throughout the marketing process.
        </p>
        <p className="text-xl text-gray-700 mb-8">
          At Julisha Media, we are committed to delivering measurable and tangible results to clients. We use data-driven insights and metrics to optimize the marketing strategy and improve performance. We set clear and achievable goals for each campaign and track progress to ensure that we are delivering the desired outcomes.
        </p>
        <p className="text-xl text-gray-700 mb-8">
          Our mission is to help businesses achieve their marketing goals and drive growth by creating customized marketing solutions that are effective, efficient, and innovative. We are passionate about what we do and strive to exceed client expectations with every project.
        </p>
      </div>
      <div className="max-w-4xl mt-12">
        <img src={aboutImage} alt="Julisha Media Team" className="w-full" />
      </div>
    </div>
  );
}

export default About;
