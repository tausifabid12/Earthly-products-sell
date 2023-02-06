import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-screen p-28 bg-accent ">
      <div className="w-full h-full  grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-5">
          <h1 className="text-6xl leading-[70px] font-semibold text-white">
            You can change tomorrow today by using our products.
          </h1>
          <p className="text-gray-300 text-xl leading-[35px]">
            The environment will be cleaner if you use our sustainable products
            and inspire others. Don’t be a scumbag – recycle!. Don’t be
            obnoxious; instead, be eco-friendly.
          </p>
          <button className="bg-primary text-base font-semibold text-white py-4 px-12 rounded-xl">
            Get Started
          </button>
          <div className="grid grid-cols-3 w-full lg:pr-28">
            <div>
              <p className="text-2xl font-bold text-white">250k +</p>
              <p className="text-gray-200">Total sale</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">100k +</p>
              <p className="text-gray-200">Customers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">250kg +</p>
              <p className="text-gray-200">Wastage saved</p>
            </div>
          </div>
        </div>
        <div className=" w-full h-full ">
          <div className="card card-compact w-[470px] h-[470px] shadow-xl mx-auto bg-secondary">
            <figure>
              <img
                src="/assets/hero.png"
                alt="Earth"
                className="w-full h-full"
              />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">Earthly</h2>
              <p className="text-gray-200">
                Sustainable products at affordable prices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
