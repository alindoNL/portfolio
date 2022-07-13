import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              over mij
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hallo, mijn naam is Alindo.</p>
          </div>
          <div>
            <p>
              Ik ben een front-end developer. Ik heb een passie voor het maken
              van websites en webapps. Ik ben gespecialiseerd in het maken van
              software voor klanten van particulieren en kleine
              bedrijven tot aan grote ondernemingen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
