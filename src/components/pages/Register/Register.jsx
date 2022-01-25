/* eslint-disable react-hooks/exhaustive-deps */
import { CCard, CCardBody, CSpinner } from "@coreui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./../../../context/auth/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  });
  const { email, name, password, repeatPassword } = data;

  const { register, loading } = useContext(AuthContext);

  function registerHandler(e) {
    e.preventDefault();
    if (email === "" || password === "" || name === "") {
      alert("Please fill out all fields !! ");
    } else if (password === repeatPassword) {
      register({
        email,
        name,
        password,
      });
    } else {
      alert("Passwords dos't match ");
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      navigate("/app/dashboard");
    }
  }, []);

  return (
    // Register Form
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
      <CCard className='w-11/12 md:w-7/12 lg:w-4/12'>
        <CCardBody>
          <div>
            <h1 className='text-3xl'>Register</h1>
            <span className='text-gray-400'>
              Register using username and password
            </span>
          </div>
          {/* Form */}
          <form>
            {/* Name */}
            <div className='mb-5 my-3 input-div'>
              <input
                required
                placeholder=' '
                onChange={(e) => setData({ ...data, name: e.target.value })}
                type={"text"}
                className=' form-input w-full border-t-0 border-x-0 border-b-2  outline-none shadow-none'
              />
              <label className='text-lg input-label'>
                {"Name".split("").map((letter, idx) => (
                  <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
                    {letter}
                  </span>
                ))}
              </label>
            </div>
            {/* Email */}
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
            <div className='mb-5 my-3 input-div'>
              <input
                required
                minLength='6'
                placeholder=' '
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type='password'
                className=' form-input w-full border-t-0 border-x-0 border-b-2  outline-none shadow-none'
              />
              <label className='text-lg input-label'>
                {"Password".split("").map((letter, idx) => (
                  <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
                    {letter}
                  </span>
                ))}
              </label>
            </div>
            {/* Password Repeat */}
            <div className='mb-4 my-3 input-div'>
              <input
                required
                minLength='6'
                placeholder=' '
                onChange={(e) =>
                  setData({ ...data, repeatPassword: e.target.value })
                }
                type='password'
                className=' form-input w-full border-t-0 border-x-0 border-b-2  outline-none shadow-none'
              />
              <label className='text-lg input-label'>
                {"Repeat\xa0Password".split("").map((letter, idx) => (
                  <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
                    {letter}
                  </span>
                ))}
              </label>
            </div>
            {/* Submit BTN */}
            <button
              type='submit'
              disabled={loading}
              onClick={registerHandler}
              className='w-full shadow-md shadow-blue-500 duration-100 active:scale-[0.97] bg-blue-600 text-white p-2 rounded hover:bg-blue-700'
            >
              {loading ? <CSpinner /> : "Register"}
            </button>
            <div className='my-3'>
              Already have an account?{" "}
              <Link className='font-bold' to='/login'>
                Login
              </Link>
            </div>
          </form>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Register;
