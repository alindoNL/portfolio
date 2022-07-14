import React from 'react';
import Profdrive from '../assets/profdrive.png';
import realEstate from '../assets/realestate.jpg';
import Theoriex from '../assets/theoriex.png';
import { Link } from 'react-router-dom';
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// bekijk mijn recente werk</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Theoriex})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Theoriex.nl
              </span>
              <p className='text-lg mx-2 '>bezig, als je naar examens gaat en op examen 2 klikt kun je zien hoe het systeem gaat werken.</p>
              <div className='pt-8 text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://theoriex.nl/'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    website
                  </button>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/alindoNL/theoriex.nl'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}

          <div
            style={{ backgroundImage: `url(${Profdrive})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Rijschool Profdrive
              </span>
              <div className='pt-8 text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.profdrive.nl/'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Website
                  </button>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/alindoNL/rijschool-profdrive'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Work;
