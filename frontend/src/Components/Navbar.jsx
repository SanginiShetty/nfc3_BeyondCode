import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav className="bg-slate-500 text-white p-4 shadow-md  w-full z-50 flex justify-start items-center gap-96 sticky top-0">
      <div className='cursor-pointer w-max'>
        Logos
      </div>
      <div className=" container mx-auto flex justify-start items-center gap-16">
        <div className="flex space-x-6">
          <Link to="/" className="font-bold hover:text-gray-200">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-gray-200">
            Blog
          </Link>
          <Link to="/AddBlog" className="hover:text-gray-200">
            Add Blog
          </Link>
          <Link to="/community" className="hover:text-gray-200">
            Open Community
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
