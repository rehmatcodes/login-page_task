import COVER_IMAGE from './assets/mock-up-1.png'; 
import GOOGLE_ICON  from './assets/Google__G__logo.svg.webp'
const colors = {
  "primary": "#060606",
  "background": "#E0E0E0",
  "disabled": "#D9D9D9"
};

const App = () => {
  return (
    <>
     <div className='w-full h-screen flex flex-col md:flex-row items-start'>
      <div className='relative w-full md:w-1/2 h-1/3 md:h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>  </div>
        <img src={COVER_IMAGE} className=' bg-[#1E85FF]  w-full h-full object-cover' alt="Cover" />
      </div>

      <div className='w-full md:w-1/2 h-full bg-[#f5f5f5] flex flex-col p-6 md:p-20 justify-between items-center'>
        <div></div>
        <h1 className='w-full max-w-[500px] mx-auto text-xl md:text-2xl text-[#060606] font-semibold mr-auto'>
          Venture Bridge
        </h1>
        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-2xl md:text-3xl font-semibold mb-2'>Login</h3>
            <p className='text-sm md:text-base mb-2'>Welcome back, please enter your details</p>
          </div>
          <div className='w-full flex flex-col'>
            <input
              type='email'
              placeholder='Enter Email'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            />
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            />
          </div>
          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center'>
              <input type='checkbox' className='w-4 h-4 mr-2' />
              <p className='text-sm'>Remember me for 30 days</p>
            </div>
            <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 text-[#1E85FF] '>Forgot Password?</p>
          </div>

          <div className='w-full flex flex-col my-4'>
            <button className='w-full text-white my-2 font-semibold bg-[#1E85FF] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
              Log in
            </button>

            <button className='w-full text-[#] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center'>
              Register
            </button>
          </div>

          <div className='w-full flex items-center justify-center relative py-2'>
            <div className='w-full h-[1px] bg-black/40'></div>
            <p className='text-lg absolute text-black/80 bg-[#f5f5f5] px-2'>or</p>
          </div>

          <div className='w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            <img src={GOOGLE_ICON} className='h-6 mr-2' alt="Google Icon" />
            Sign in With Google
          </div>
        </div>

        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[#060606]'>Don't have an account? <span className='font-semibold underline underline-offset-1 cursor-pointer text-[#1E85FF]  '>Sign up for free</span></p>
        </div>
      </div>
     </div>
    </>
  );
}

export default App;
