import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const Sale = () => {
  const textRef = useRef(null);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false }); // observer
  const isTextInView = useInView(textRef, { once: false }); // observer

  return (
    <section
      style={{
        background: `linear-gradient(184deg, rgba(162,89,255,0) 0%, rgba(162,89,255,1) 91%), url('/assets/sale.jpg')`,
        backgroundPosition: 'top',
      }}
      className="w-full h-auto lg:h-[500px] lg:p-28"
    >
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-end ">
        <motion.div
          ref={textRef}
          animate={{ x: isTextInView ? [-500, 0] : 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="space-y-8"
        >
          <h2 className="text-md lg:text-5xl font-semibold text-white">
            Our Yearly Biggest Sale
          </h2>
          <button className="px-7 py-3 rounded-xl bg-white text-primary font-semibold">
            View Offer
          </button>
        </motion.div>
        <motion.div
          ref={ref}
          animate={{ x: isInView ? [500, 0] : 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="bg-black/20 backdrop-blur-lg p-8 w-full lg:w-[350px] mx-auto rounded-2xl space-y-4"
        >
          <p className="font-semibold text-white">Offer Ends In :</p>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max mx-auto text-white">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ '--value': 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ '--value': 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ '--value': 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ '--value': 35 }}></span>
              </span>
              sec
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sale;
