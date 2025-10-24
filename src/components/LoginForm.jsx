import React, { useState } from "react";
import google from "../assets/google.png";
import fb from "../assets/facebook.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dummyData = {
    email: "test@example.com",
    password: "123456789",
  };

  const login = (e) => {
    e.preventDefault();
    if (email === dummyData.email || password === dummyData.password) {
      navigate("/home");
    }
  };

  return (
    <div className="flex flex-col sm:items-center sm:justify-center sm:p-28 sm:min-w-[500px]">
      <div className="flex flex-col items-start justify-start sm:min-w-[380px]">
        <h1 className="text-[20px] sm:text-[30px] font-roboto font-semibold mb-2">
          Welcome Back👋
        </h1>
        <p className="md:text-[14px] text-[12px] tracking-wide font-roboto">
          Today is a new day. It's your day. You shape it <br /> Sign in to
          start managing your projects
        </p>
      </div>

      <form
        action=""
        onSubmit={login}
        className="flex flex-col gap-3 mt-6 items-stretch"
      >
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="email" className="text-[12px] mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example@email.com"
            className="border-2 focus:outline-none sm:w-[380px] sm:h-[45px] w-full rounded-xl p-2 border-gray-300 bg-sky-50"
          />
        </div>

        <div className="flex flex-col items-start justify-center">
          <label htmlFor="password " className="text-[12px] mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            minLength={"8"}
            className="border-2 focus:outline-none sm:w-[380px] sm:h-[45px] border-gray-300 rounded-xl p-2 bg-sky-50 w-full"
            required
          />
        </div>

        <a
          href="#"
          className="justify-end text-right font-semibold text-[#1E4AE9] text-[12px] sm:text-[14px]"
        >
          Forgot Password?
        </a>

        <button
          type="submit"
          className="border-2 rounded-xl bg-gray-700 text-white sm:w-[380px] h-[45px]"
        >
          Sign In
        </button>
      </form>

      <div className="flex justify-center w-full mb-8">
        <div className="flex flex-row items-center justify-center mt-9 text-center">
          <hr className="border-t-2 min-w-[80px] sm:min-w-[150px]  border-gray-300" />
          <div>
            <p className="mx-3 hidden md:block text-gray-600">Or</p>
            <p className="mx-3 md:hidden text-[14px] text-gray-600">
              Or sign in with
            </p>
          </div>
          <hr className="border-t-2 min-w-[80px] sm:min-w-[150px] border-gray-300" />
        </div>
      </div>

      <div className="flex md:flex-col flex-row justify-center items-center gap-6">
        <div className="flex flex-row items-center justify-center border-2 w-full sm:w-[380px] h-[45px] rounded-xl bg-sky-50 cursor-pointer">
          <img src={google} alt="" className="w-[30px] h-[30px] mr-1" />
          <p className="text-gray-600 md:flex hidden">Sign in with Google</p>
          <p className="text-gray-600 md:hidden">Google</p>
        </div>
        <div className="flex flex-row items-center justify-center border-2 w-full sm:w-[380px] h-[45px] rounded-xl bg-sky-50 cursor-pointer">
          <img src={fb} alt="" className="w-[30px] h-[30px] mr-1" />
          <p className="md:flex hidden text-gray-600">Sign in  with Facebook</p>
          <p className="text-gray-600 md:hidden">Facebook</p>
        </div>
      </div>
      <p className="text-[14px] text-center mt-6">
        Don't have an account?{" "}
        <Link to="/signup" className="text-[#1E4AE9]">
          Sign up
        </Link>
      </p>

      <p className="text-gray-400 mt-9 mb-5 text-center max-sm:text-[12px]">
        ©2023 ALL RIGHT RESERVED
      </p>
    </div>
  );
};

export default Login;
