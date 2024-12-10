// import React from "react";

import { FaUser } from "react-icons/fa6";
import XSvg from "../../components/svgs/X";

import { Link } from "react-router-dom";

import {
  MdDriveFileRenameOutline,
  MdOutlineMail,
  MdPassword,
} from "react-icons/md";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState([]);
  console.log(formData);

  const handleInputChange = (e) => {
    // console.log({[e.target.name]:e.target.name});
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-screen-xl mx-auto flex h-screen px-10">
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <XSvg className="fill-white lg:w-2/3" />
      </div>
      <div className=" flex-1 flex justify-center items-center flex-col">
        <form
          action=""
          className="flex flex-col gap-4 mx-auto md:mx-20 lg:w-2/3"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center items-center gap-4">
            <XSvg className="fill-white lg:hidden w-24 " />
            <h1 className=" font-extrabold text-2xl">Join today.</h1>
          </div>
          <label
            htmlFor=""
            className="input  input-bordered flex items-center gap-2 rounded"
          >
            <MdOutlineMail />
            <input
              type="email"
              className="grow"
              placeholder="Email"
              name="email"
              onChange={(e) => handleInputChange(e)}
              value={formData.email}
            />
          </label>
          <div className="flex gap-4 flex-wrap">
            <label
              htmlFor=""
              className="input input-bordered flex items-center gap-2 rounded flex-1"
            >
              <FaUser />
              <input
                type="text"
                className=""
                placeholder="UserName"
                name="username"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <label
              htmlFor=""
              className="input input-bordered flex items-center gap-2 rounded flex-1"
            >
              <MdDriveFileRenameOutline />
              <input
                type="text"
                name="fullName"
                className="grow"
                placeholder="FullName"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>
          <label
            htmlFor=""
            className="input input-bordered flex items-center gap-2 rounded"
          >
            <MdPassword />
            <input
              type="password"
              className="grow"
              name="password"
              placeholder="password"
              onChange={handleInputChange}
            />
          </label>
          <button className="btn rounded-full btn-primary text-white">
            onSubmit
          </button>
          <p className="text-red-500">Error</p>
        </form>
        <div className=" flex flex-col gap-2 lg:w-2/3 mt-4">
          <p className=" text-white text-lg">Already have an account?</p>
          <Link to={"/signin"}>
            <button className="btn rounded-full btn-primary text-white btn-outline w-full  ">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
