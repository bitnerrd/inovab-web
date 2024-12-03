import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineMail, AiOutlinePhone, AiOutlineLock, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineArrowRight, AiOutlineClose, AiOutlineUser, AiOutlineGlobal } from 'react-icons/ai'; // Importing icons
import { FcGoogle } from 'react-icons/fc'; // Import Google icon

const ContactUs = () => {
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
          <div className="order-1 md:order-1 lg:col-span-2 md:h-screen w-full md:rounded-tr-xl md:rounded-br-xl">
            <img 
              src="/src/assets/contactUs.png" 
              className="w-full h-full object-cover" 
              alt="ContactUs-image" 
            />
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
                <h3 className="text-gray-800 text-3xl font-extrabold">Contact Us</h3>
                </div>

              <div className="mt-4">
                <div className="relative flex items-center">
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Enter your name"
                  />
                  <AiOutlineUser className="w-[18px] h-[18px] absolute right-4 text-gray-500" />
                </div>
                {errors.name && <span className="text-red-500 text-xs mt-1 block">Name is required</span>}
              </div>

              <div className="mt-4">
                <div className="relative flex items-center">
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Enter your email"
                  />
                  <AiOutlineMail className="w-[18px] h-[18px] absolute right-4 text-gray-500" />
                </div>
                {errors.email && <span className="text-red-500 text-xs mt-1 block">Email is required</span>}
              </div>

              <div className="mt-4">
                <div className="relative flex items-center">
                  <input
                    {...register('country', { required: true })}
                    type="text"
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Enter your country"
                  />
                  <AiOutlineGlobal className="w-[18px] h-[18px] absolute right-4 text-gray-500" />
                </div>
                {errors.country && <span className="text-red-500 text-xs mt-1 block">Country is required</span>}
              </div>

              <div className="mt-4">
                <div className="relative">
                  <textarea
                    {...register('message', { required: true })}
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600 min-h-[120px]"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                {errors.message && <span className="text-red-500 text-xs mt-1 block">Message is required</span>}
              </div>

              <div className="mt-8">
                <button type="submit" className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>
        </div>
      </div>
   
  );
};

export default ContactUs;