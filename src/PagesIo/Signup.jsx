import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
    const [rememberLogin, setRememberLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [name, setName] = useState('');

    const {user, signUp} = UserAuth();
    const navigate = useNavigate();

    const handlerFromSubmit = async (e) =>{
        e.preventDefault();
        
        try {
            await signUp(email, password);
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
    };
    return (
    <>
    <div className="w-full h-screen" >
        <img 
        className= "hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" 
        alt='///'>
        </img>
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen"></div>

        <div className="fixed w-full px-4 py-24 z-20">
            <div className="max-w-[450px] h-[500px] mx-auto bg-black/70 rounded-lg">
                <div className="max-w-[320px] mx-auto py-16">
                    <h1 className="text-3xl font-nsans-bold">Sign up</h1>

                    <form 
                    onSubmit={handlerFromSubmit} 
                    className="w-full flex flex-col py-4">
                        {/* <input
                            className='p-3 my-2 bg-gray-700 border-gray-500 border-[1px] rounded' 
                            type='text' 
                            placeholder='Name' 
                            autoComplete='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /> */}
                        <input 
                            className="p-3 my-2 bg-gray-700 rounded" 
                            type="email"
                            placeholder='email'
                            autoComplete='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            className="p-3 my-2 bg-gray-700 rounded" 
                            type="password" 
                            placeholder='password'
                            autoComplete='current-password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">
                            Sign Up
                        </button>
                        <div className="flex justify-between items-center text-gray-600">
                            <p>
                                <input 
                                    type="checkbox"
                                    className="mr-2" 
                                    checked={rememberLogin}
                                    onChange ={(e) => setRememberLogin(!rememberLogin)}>        
                                </input>
                                Remember me
                            </p>
                            <p>Need Help ?</p>
                        </div>
                        <p className="my-2">
                            <span className="text-gray-600 mr-2">Already have an account ?</span>
                            <Link to='/login'>Sign in here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Signup;
