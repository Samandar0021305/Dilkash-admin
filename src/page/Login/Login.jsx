import React,{useRef, useState, useEffect, useContext} from 'react'

import {postLogin} from "./login.api"
import {loginResults} from "../../redux/feature/LoginSlice"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Login = React.memo(() => {
  const dispatch = useDispatch()
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [userDate,setUserData] = useState("")
  const [errorMsg,setErrorMsg] = useState(null)
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  
  const handleSubmit = async(e)=>{
   e.preventDefault()
   const value = {phone_number:user,password:pwd}
   try{
    const response = await postLogin(value)
    dispatch(loginResults(response?.data))
    setUser("");
    setPwd("");
    setSuccess(true);
  }
  catch(err){
    setErrorMsg(err)
    if (!err?.response) {
      setErrMsg("No Server Response");
    } else if (err.response?.status === 400) {
      setErrMsg("Missing Username or Password");
    } else if (err.response?.status === 401) {
      setErrMsg("Unauthorized");
    } else {
      setErrMsg("Login Failed");
    }
    errRef.current.focus();
   }
  }
  
  return (
    <>
    
      <div className='flex h-[100vh]'>
        <div className='w-[50%] h-[100%] bg-green-600'></div>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        {/* <h1>Sign In</h1> */}
        <div className='flex flex-col justify-center items-center h-[100%] w-[100%]'>
          <form  onSubmit={handleSubmit}  
        className="bg-white shadow-md w-[400px] h-[300px] ml-[120px]  rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >phone number:</label>
           <input
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
              leading-tight focus:outline-none focus:shadow-outline"
              type="tel" placeholder="phone number"
          /> 
          </div>
          <div className="mb-6">

          <label className="block text-gray-700 text-sm font-bold mb-2" >Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
             className="shadow appearance-none border 
               rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
               placeholder="******************"
          />
          </div>
          
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign In</button>
        </form>
        <p>
          Need an Account?
          <br />
          <span className="line">
            <a href="#">Sign Up</a>
          </span>
        </p>
        </div>
      </section>
      </div>
  </>
  )
})

export default Login
