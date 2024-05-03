import React from 'react';
import { FaGithub } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="dark:bg-[#212121] dark:text-white text-black bg-white flex flex-col items-start justify-center px-24 py-24">
      <h1 className="text-6xl font-bold mb-8">Dark Horses 🐎</h1>
      <p className="text-lg text-center mb-8">Collecting stories of startup rejections turned successes!</p>
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-md text-lg">
          Join Us
        </button>
        <a href="https://github.com/brahmandhq/darkhorses" target="_blank" rel="noopener noreferrer" className="bg-slate-950 hover:bg-slate-800 text-white font-bold py-2 px-6 rounded-md text-lg ">
          <div className='flex items-center justify-between space-x-2'>
            <h1>Visit Repository</h1>
            <FaGithub/>
          </div>
        </a>
      </div>
      <div className="mt-12">
        <p>Our aim with this project is to inspire, educate, and provide tangible hope to entrepreneurs and innovators facing similar hurdles.  </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">We are Looking for Contributors</h2>
        <p>1. Smash that Star button on this <a href="https://github.com/brahmandhq/darkhorses" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">repository</a>.</p>
        <p>2. Drop a comment with your 3-liner intro + a 3-liner on What role and Why do you want to do it + LinkedIn URL on <a href="https://github.com/brahmandhq/darkhorses/issues/5" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">this page</a>.</p>
      </div>
    </div>
  );
};

export default LandingPage;
