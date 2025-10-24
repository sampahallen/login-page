import React from "react";
import Signup from "../components/SignupForm";
import flowers from "../assets/flowers.jpg";

const SignupPage = () => {
  return (
    <div className="lg:min-h-screen flex flex-col-reverse lg:flex-row">
      <div className="flex flex-col items-center w-full lg:w-1/2 px-10 lg:px-24">
        <div className="w-full max-w-[430px]">
          <Signup />
        </div>
      </div>

      <div className="flex lg:w-1/2">
        <img
          src={flowers}
          alt="Floral artwork"
          className="w-full h-[200px] md:h-[400px] max-sm:mb-3 lg:h-[900px] object-cover rounded-3xl py-2 px-2 sm:py-2 sm:px-2"
        />
      </div>
    </div>
  );
};

export default SignupPage;
