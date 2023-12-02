import React from 'react'
import Profdrive from '../assets/profdrive.png'
import Test from '../assets/test.png'
import Theoriex from '../assets/theoriex.png'
import Focuz from '../assets/focuz.png'
import Vbommel from '../assets/vbommel.png'

import Ss from '../assets/ss.png'
import { Link } from 'react-router-dom'
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
            style={{ backgroundImage: `url(${Test})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effescts */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold flex items-center justify-center text-white tracking-wider'>
                Cleanersurvey
              </span>
              <p className='text-lg mx-2 '>
                easily create and send surveys to gather valuable feedback from
                your audience.
              </p>
              <div className='pt-8 text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.cleanersurvey.com/'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    website
                  </button>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/alindoNL'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Ss})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold flex items-center justify-center text-white tracking-wider'>
                Plutendo
              </span>
              <p className='text-lg mx-2 '>Thuiswerk vacatures</p>
              <div className='pt-8 text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.plutendo.com/'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    website
                  </button>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/alindoNL/Plutendo.com'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div
        
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold flex items-center justify-center text-white tracking-wider'>
                APA Generator
              </span>
              <p className='text-lg mx-2 '>Gratis APA generator</p>
              <div className='pt-8 text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://apagenerator.nl/'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    APA Generator
                  </button>
                </a>
               
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Theoriex})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold flex items-center justify-center text-white tracking-wider'>
                Theoriex.nl
              </span>
              <p className='text-lg mx-2 '>
                bezig, als je naar examens gaat en op examen 2 klikt kun je zien
                hoe het systeem gaat werken.
              </p>
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
                  href='https://github.com/alindoNL/theoriex'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Vbommel})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 px-12 group-hover:opacity-100'>
              <span className='text-2xl  font-bold flex items-center justify-center text-white tracking-wider'>
                vanbommel
              </span>
              <p className='text-lg mx-2 '>rijschool vanBommel</p>
              <div className='pt-8 text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.vanbommelverkeersschool.nl/'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    website
                  </button>
                </a>
                {/* <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/alindoNL/theoriex'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          {/* Grid Items */}

          <div
            style={{ backgroundImage: `url(${Profdrive})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold  text-white tracking-wider'>
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
                  href='https://github.com/alindoNL/rijschool-profdrive/tree/main/profdrive-react'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Focuz})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold  text-white tracking-wider'>
                Focuznow productivity website
              </span>
              <div className='pt-8 text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://focuznow.vercel.app/'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Website
                  </button>
                </a>
                {/* <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/alindoNL/rijschool-profdrive/tree/main/profdrive-react'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
