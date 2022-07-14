import React, {useState,useRef, useEffect} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from '@emailjs/browser'
const Contact = () => {
   const [isarrived, setisarrived] = useState(false)
   const [isnotarrived, setisnotarrived] = useState(false)
   const [time, settime] = useState(5)
   const [timeon, settimeon] = useState(false)
   const [notverified, setnotverified] = useState(false)
   const form = useRef()
  //  const navigate = useNavigate()
   const [token, setToken] = useState(null)

   function onChange(value) {
     console.log('Captcha value:', value)
     setToken(value)
   }

   const sendEmail = (e) => {
     e.preventDefault()
     emailjs
       .sendForm(
         'service_t9xg3h8',
         'template_v4xq0wr',
         form.current,
         'SqujDPbDS51qul-nQ'
       )
       .then(
         () => {
           setisarrived(true)
           settimeon(true)
         },
         (error) => {
           console.log(error)
           setisnotarrived(true)
         }
       )
   }
   useEffect(() => {
     if (timeon) {
       let myInterval = setInterval(() => {
         if (time > 0) {
           settime(time - 1)
         }
         if (time === 0) {
           clearInterval(myInterval)
          //  navigate('/')
          window.location.reload()
         }
       }, 1000)
       return () => {
         clearInterval(myInterval)
       }
     }
   }, [timeon, time])
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
    >
      <form
        onSubmit={sendEmail}
        ref={form}
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <div className='my-4'>

        <ReCAPTCHA
          sitekey='6Lf__O0gAAAAAJbCktaCHeuBrHgZ_iG7w1gEBYmu'
          onChange={onChange}
        />
        </div>
        {/* <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Laten we samen werken
        </button> */}
        {token ? (
          <>
            <button
              type='submit'
              className='
                      mb-6
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out'
            >
              verstuur
            </button>
          </>
        ) : (
          <>
            <button
              className='bg-gray-200  hover:bg-gray-300 rounded p-3  mb-4 mt-6'
              onClick={() => {
                setnotverified(true)
              }}
              type='button'
            >
              Versturen
            </button>
            {notverified ? <div className='text-white'>verifieer je zelf eerst </div> : <div></div>}
          </>
        )}
        {isarrived ? (
          <div className='text-white'>
            je bericht is ontvangen we proberen binnen 24 uur je vraag te
            beantwoorden
          </div>
        ) : (
          <div></div>
        )}
        {isnotarrived ? (
          <div className='text-white'>
            je bericht is niet ontvangen je kan me mailen op alindo_2002@hotmail.com
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </div>
  )
}

export default Contact