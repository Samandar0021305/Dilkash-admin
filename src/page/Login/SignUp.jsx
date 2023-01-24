import React from 'react'
import ButtonComponent from './ButtonComponentWith';
import InputComponent from './InputComponent';

const SignUp = () => {
  return (
    <div className="flex m-auto items-center">
      <div>
        <div className="text-center">
          <h1 className="text-[#4F4F4F] text-5xl font-bold tracking-widest pb-5">
            Sign Up
          </h1>
          <p className="text-[#4F4F4F] text-2xl font-medium pb-10">
            Get started absolutely free
          </p>
        </div>
        <div>
          <InputComponent type="email" label="Email" />
          <InputComponent type="password" label="Password" />
          <div className="flex w-[405px] mb-11">
            <input type="checkbox" />
            <p className="text-[#4F4F4F] text-sm ml-2 font-normal">
              Creating an account means you’re okay with our Terms of Service,
              Privacy Policy, and default Notification Settings
            </p>
          </div>
          <ButtonComponent title="Sign up" />   
        </div>
      </div>
    </div>
  );
}

export default SignUp