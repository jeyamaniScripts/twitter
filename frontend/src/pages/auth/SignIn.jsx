// import React from 'react'

import { MdOutlineMail, MdPassword, MdRemoveRedEye } from "react-icons/md";
import Xsvg from "../../components/svgs/X";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState([]);
  const handleInputChange = (e) => {
    // console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(formData);

  const hanldeSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" max-w-screen-xl mx-auto h-screen flex px-10">
      <div className=" flex-1 hidden lg:flex items-center ">
        <Xsvg className="fill-white lg:w-2/3 " />
      </div>
      <div className="flex-1 flex flex-col  items-center justify-center">
        <form className="flex flex-col gap-4" onSubmit={hanldeSubmit}>
          <div className=" flex items-center justify-center">
            <Xsvg className="fill-white lg:hidden w-24" />
            <h1 className=" text-3xl lg:text-5xl font-extrabold">
              {`Let's`} go.
            </h1>
          </div>

          <label
            htmlFor="email"
            className="input input-bordered border-cyan-50 rounded   flex items-center  gap-2"
          >
            <MdOutlineMail />
            <input
              type="email"
              placeholder="Email"
              className="grow"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </label>
          <label
            htmlFor="password"
            className=" input input-bordered border-cyan-50 flex items-center justify-center gap-2"
          >
            <MdPassword />
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="password"
              onChange={handleInputChange}
              value={formData.password}
            />
            <MdRemoveRedEye />
          </label>
          <button className=" btn text-white btn-primary rounded-full  ">
            Signin
          </button>
        </form>
        <div className="flex flex-col items-center justify-center lg:w-2/3 mt-5 gap-3 ">
          <p className=" text-lg text-white">{"Don't have an Account?"}</p>
          <Link to={"/signup"}>
            <button className=" text-white btn btn-primary w-full rounded-full btn-outline">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
