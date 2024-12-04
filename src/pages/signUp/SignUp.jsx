import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineMail, AiOutlinePhone, AiOutlineLock, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai'; // Importing icons
import { FcGoogle } from 'react-icons/fc'; // Import Google icon

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission here, e.g., send data to your API
  };

  return (
    <div className="relative">
      <button 
        type="button" 
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-50"
        onClick={() => window.history.back()}
      >
        <AiOutlineClose className="w-4 h-4 text-gray-600" />
      </button>
      <div className="font-[sans-serif]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-4 h-full">
          <div className="order-1 md:order-1 lg:col-span-2 md:h-screen w-full md:rounded-tr-xl md:rounded-br-xl relative">
            <img 
              src="/src/assets/signup.png" 
              className="w-full h-full object-cover" 
              alt="SignUp-image" 
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
              <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg cursor-pointer">
                <AiOutlineFacebook className="w-4 h-4 text-black" />
              </div>
              <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg cursor-pointer">
                <AiOutlineInstagram className="w-4 h-4 text-black" />
              </div>
              <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg cursor-pointer">
                <AiOutlineTwitter className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 w-full p-6 relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/src/assets/logo.png" 
                    alt="Logo" 
                    className="h-10 w-auto"
                  />
                </div>
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign Up</h3>
                <p className="text-sm mt-4 text-gray-800">Please fill your information below</p>
              </div>

              <div className="mt-4">
                <div className="relative flex items-center">
                  <input
                    {...register('email', { required: true })}
                    type="text"
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Enter email"
                  />
                  <AiOutlineMail className="w-[18px] h-[18px] absolute right-4 text-gray-500" />
                </div>
                {errors.email && <span className="text-red-500 text-xs mt-1 block">Email is required</span>}
              </div>

              <div className="mt-4">
                <div className="relative flex items-center">
                  <input
                    {...register('phone', { required: true })}
                    type="tel"
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Enter phone number"
                  />
                  <AiOutlinePhone className="w-[18px] h-[18px] absolute right-4 text-gray-500" />
                </div>
                {errors.phone && <span className="text-red-500 text-xs mt-1 block">Phone number is required</span>}
              </div>

              <div className="mt-4">
                <div className="relative flex items-center">
                  <input
                    {...register('password', { required: true })}
                    type="password"
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />
                  <AiOutlineLock className="w-[18px] h-[18px] absolute right-4 text-gray-500" />
                </div>
                {errors.password && <span className="text-red-500 text-xs mt-1 block">Password is required</span>}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                <div className="flex items-center">
                  <input id="remember-me" {...register('rememberMe')} type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <button type="button" className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline">
                    Next <AiOutlineArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <button type="submit" className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Sign Up
                </button>
              </div>

              <div className="my-4 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">or</p>
                <hr className="w-full border-gray-300" />
              </div>

              <button type="button" className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none">
                <FcGoogle className="w-5 h-5" />
                Continue with Google
              </button>
              <p class="text-sm mt-4 text-gray-800">Don't have an account <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</a></p>
            </form>
          </div>
        </div>
        </div>
      </div>
   
  );
};

export default SignUp;