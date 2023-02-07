import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full min:h-screen p-4 pt-8 lg:p-28 bg-accent pb-20 ">
      <div className="w-full h-full  grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 3 }}
          className="space-y-5"
        >
          <h1 className="text-2xl text-center lg:text-left lg:text-6xl lg:leading-[70px] font-semibold text-white">
            You can change tomorrow today by using our products.
          </h1>
          <p className="text-gray-300 text-center lg:text-left text-sm lg:text-xl lg:leading-[35px]">
            The environment will be cleaner if you use our sustainable products
            and inspire others. Don’t be a scumbag – recycle!. Don’t be
            obnoxious; instead, be eco-friendly.
          </p>
          <motion.button
            whileTap={{ scale: [1, 0.6, 1] }}
            className="bg-primary text-base font-semibold text-white px-8 block mx-auto lg:mx-0 py-2 lg:py-4 lg:px-12 rounded-xl"
          >
            Get Started
          </motion.button>
          <div className="grid grid-cols-3 w-full lg:pr-28">
            <div>
              <p className="text-lg lg:text-2xl font-bold text-white">250k +</p>
              <p className="text-sm lg:text-base text-gray-200">Total sale</p>
            </div>
            <div>
              <p className="text-lg lg:text-2xl font-bold text-white">100k +</p>
              <p className="text-sm lg:text-base text-gray-200">Customers</p>
            </div>
            <div>
              <p className="text-lg lg:text-2xl font-bold text-white">
                250kg +
              </p>
              <p className="text-sm lg:text-base text-gray-200">
                Wastage saved
              </p>
            </div>
          </div>
        </motion.div>
        <div className=" w-full h-full ">
          <motion.div
            animate={{ x: [-700, 0], opacity: [0.1, 1], rotate: 360 }}
            transition={{ type: 'spring', stiffness: 40 }}
            className="card card-compact w-full lg:w-[470px]  mt-10 lg:mt-0 lg:h-[470px] shadow-xl mx-auto bg-secondary"
          >
            <figure>
              <img
                src="/assets/hero.jpg"
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  /> */
}

// animate={{ x: [50, 150, 0], opacity: 1, scale: 1 }}
// transition={{
//   duration: 2,
//   delay: 0.3,
//   ease: [0.5, 0.71, 1, 1.5],
// }}
// initial={{ opacity: 0, scale: 0.5 }}
