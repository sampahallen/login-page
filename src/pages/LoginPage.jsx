import React from "react";
import Login from "../components/LoginForm";
import flowers from "../assets/flowers.jpg";

const LoginPage = () => {
  return (
    <div className="lg:min-h-screen flex flex-col-reverse lg:flex-row">
      <div className="flex flex-col items-center w-full lg:w-1/2 px-10 sm:px-24">
        <div className="w-full max-w-[430px]">
          <Login />
        </div>
      </div>

      <div className="flex lg:w-1/2">
        <img
          src={flowers}
          alt="Floral artwork"
          className="w-full h-[200px] md:h-[300px] max-sm:mb-3 lg:h-[900px] object-cover lg:object-cover rounded-3xl py-4 px-5 sm:py-2 sm:px-2"
        />
      </div>
    </div>
  );
};

export default LoginPage;
