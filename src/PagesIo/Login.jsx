import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { UserAuth } from '../context/AuthContext';


const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  
  
  const handlerFromSubmit = async (e) =>{
    e.preventDefault();

    try {
      await logIn(email, password);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" 
          alt="///"
        />

        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen"/>

        <div className='fixed w-full px-3 py-24 z-20'>
          <div className="max-w-[430px] h-[450px] mx-auto bg-black/70 rounded-lg">

            <div className='max-w-[320px] mx-auto py-11'>

              <h1 className='text-3xl font-nsans-bold'>Login</h1>
              <form 
              className='w-full flex flex-col py-4'
              onSubmit={handlerFromSubmit}
              
              >
                <input 
                  className='p-3 my-2 bg-gray-700 border-gray-500 border-[1px] rounded' 
                  type='text' 
                  placeholder='email' 
                  autoComplete='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                  className='p-3 my-2 bg-gray-700 border-gray-500 border-[1px] rounded'
                  type='password' 
                  placeholder='password' 
                  autoComplete='current-password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold'>Login</button>

                <div className='flex justify-between items-center text-gray-600'>
                  <p>
                    <input 
                    type="checkbox" 
                    className="mr-2" 
                    checked = {rememberLogin} 
                    onChange={(e) => setRememberLogin(!rememberLogin)}/>
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">
                    New to Netflix?
                  </span>
                  <Link to="/signup">Sign up now</Link>
                </p>
                
              </form>
            </div>
          </div>
          {/* footer section */}
          <div className='fixed bottom-0 left-0 w-full h-[125px] bg-black/70 py-4'>
            <div className='w-full max-w-[1183px] mx-auto grid grid-cols-4 gap-4 text-center my- underline text-white/60 cursor-pointer text-[14px]'>
              <ul className='space-y-2'>
                <li className=' py-1'>FAQ</li>
                <li className=' py-1'>Privacy</li>
                <li className=' py-1'>Ad Choices</li>
              </ul>
              <ul className='space-y-2'>
                <li className=' py-1'>Help Center</li>
                <li className=' py-1'>Cookie Preferences</li>
              </ul>
              <ul className='space-y-2'>
                <li className=' py-1'>Netflix Shop</li>
                <li className=' py-2'>Corporate Information</li>
              </ul>
              <ul className='space-y-2'>
                <li className=' py-1'>Terms of Use</li>
                <li className=' py-1'>Do Not Sell or Share My Personal Information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
};

export default Login;
