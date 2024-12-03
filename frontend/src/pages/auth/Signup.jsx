// import React from "react";

import { FaUser } from "react-icons/fa6";
import XSvg from "../../components/svgs/X";

import { Link } from "react-router-dom";

import {
  MdDriveFileRenameOutline,
  MdOutlineMail,
  MdPassword,
} from "react-icons/md";

const Signup = () => {
  return (
    <div>
      <div>
        <div>
          <XSvg className="fill-white" />
        </div>
        <div>
          <form
            action=""
            className="flex flex-col gap-4 mx-auto md:mx-20 lg:w-2/3"
          >
            <h1 className=" font-extrabold text-2xl">Join today.</h1>
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
              />
            </label>
            <div>
              <label
                htmlFor=""
                className="input input-bordered flex items-center gap-2 rounded"
              >
                <FaUser />
                <input
                  type="text"
                  className=""
                  placeholder="UserName"
                  name="username"
                />
              </label>
              <label
                htmlFor=""
                className="input input-bordered flex items-center gap-2 rounded"
              >
                <MdDriveFileRenameOutline />
                <input type="text" className="" placeholder="FullName" />
              </label>
            </div>
            <label
              htmlFor=""
              className="input input-bordered flex items-center gap-2 rounded"
            >
              <MdPassword />
              <input
                type="password"
                className=""
                name="password"
                placeholder="password"
              />
            </label>
            <button>onSubmit</button>
            <p>Error</p>
          </form>
          <div className=" flex flex-col gap-2 lg:w-2/3 mt-4">
            <p>Already have an account?</p>
            <Link>
              <button className="btn rounded-full bg-primary text-white btn-outline w-full  ">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
