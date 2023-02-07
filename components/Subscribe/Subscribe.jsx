import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react';

const Subscribe = () => {
  const container = useRef(null);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      animate={{ scale: isInView ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="p-24 pt-16 hidden lg:block"
    >
      <div className="bg-secondary h-96 grid grid-cols-1 lg:grid-cols-2 text-white overflow-hidden rounded-xl">
        <div className="min-w-full max-h-96 rounded-lg p-8">
          <img
            src="/assets/all.webp"
            className="w-full h-full rounded-xl shadow-xl"
            alt=""
          />
        </div>
        <div className="grid place-content-center">
          <div className="space-y-6">
            <div className="">
              <h3 className="text-4xl font-semibold">
                Join Our Earthly Program
              </h3>
              <p className="text-md font-semibold text-gray-300 pt-2">
                Get exclusive promotions & updates straight to your inbox.
              </p>
            </div>

            <div className="flex">
              <input
                type="text"
                placeholder="Enter Your Email Here"
                className="input input-bordered w-full max-w-xs rounded-2xl h-[55px]"
              />
              <button className="bg-primary text-lg font-semibold text-white h-[56px] px-12 rounded-2xl -ml-16">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Subscribe;
