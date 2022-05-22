import React from "react";

const About = () => {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. UI made
        with
        <a href='https://tailwindcss.com/'>
          <strong> TailwindCSS</strong>
        </a>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-gray-400'>1.0.0</span>
      </p>
    </div>
  );
};

export default About;
