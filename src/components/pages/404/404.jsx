import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className='flex flex-col justify-start items-center h-screen'>
      <span className='font-handWrite text-6xl mt-44'>404 Not Found :(</span>

      <Link
        className='bg-gradient-to-b from-slate-800 to-slate-500  text-xl mt-16 text-white py-3 px-10 rounded shadow-inner shadow-slate-400 hover:from-slate-500 hover:to-slate-800 hover:shadow-md'
        to='/'
      >
        Login
      </Link>
    </div>
  );
};

export default NotFoundPage;
