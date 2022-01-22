import { CCard, CCardBody } from "@coreui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    // login form
    <div className='h-screen w-screen flex flex-col items-center justify-evenly'>
      {/* Logo  */}
      <div
        className='flex flex-col items-center justify-between gap-2'
        style={{ maxWidth: "150px" }}
      >
        <img
          alt='Logo'
          src='https://cdn0.iconfinder.com/data/icons/octicons/1024/dashboard-512.png'
        />
        <span>Logo Here</span>
      </div>
      {/* Card */}
      <CCard className='w-11/12 md:w-7/12 lg:w-4/12'>
        <CCardBody>
          {/* Header */}
          <div className='mb-10'>
            <h1 className='text-3xl'>Login</h1>
            <span className='text-gray-400'>
              Login using username and password
            </span>
          </div>
          {/* From */}
          <form>
            {/* Email input */}
            <div className='mb-5 my-3 input-div'>
              <input
                required
                placeholder=' '
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type={"email"}
                className=' form-input w-full border-t-0 border-x-0 border-b-2  outline-none shadow-none'
              />

              <label className='text-lg input-label'>
                {"Email".split("").map((letter, idx) => (
                  <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
                    {letter}
                  </span>
                ))}
              </label>
            </div>
            {/* Password */}
            <div className='my-3 input-div'>
              <input
                required
                placeholder=' '
                minLength='6'
                type='password'
                className='form-input w-full border-t-0 border-x-0 border-b-2  outline-none shadow-none'
              />
              <label className='input-label text-lg'>
                {" "}
                {"Password".split("").map((letter, idx) => (
                  <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
                    {letter}
                  </span>
                ))}
              </label>
            </div>
            <div className='my-3'>
              <Link to='#'>Forget your password?</Link>
            </div>
            <button
              type='submit'
              className='w-full shadow-md shadow-blue-500 duration-100 active:scale-[0.97] bg-blue-600 text-white p-2 rounded hover:bg-blue-700'
            >
              Login
            </button>

            <div className='my-3'>
              Don't have an account?{" "}
              <Link className='font-bold' to='/register'>
                SignUp
              </Link>
            </div>
          </form>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Login;
