import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react';

const Services = () => {
  const textRef = useRef(null);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false }); // observer
  const isTextInView = useInView(textRef, { once: false }); // observer

  const servicesData = [
    {
      id: 1,
      name: 'Save Earth',
      img: '/assets/service1.png',
      dec: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    },
    {
      id: 2,
      name: 'Reduce Pollution',
      img: '/assets/service2.png',
      dec: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    },
    {
      id: 3,
      name: 'Earthly Environment',
      img: '/assets/service3.png',
      dec: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    },
  ];
  return (
    <section className="lg:p-28 py-10">
      <motion.div
        ref={textRef}
        animate={{ x: isTextInView ? [-500, 0] : 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h3 className="text-2xl lg:text-4xl text-white font-semibold pb-3">
          What We Do
        </h3>
        <p className="text-md lg:text-xl text-gray-300">
          We make affordable reusable eco friendly Products.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        animate={{ x: isInView ? [500, 0] : 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 mx-2 lg:mx-0"
      >
        {servicesData.map((s) => (
          <div
            key={s?.id}
            className="card card-compact w-full  shadow-xl gap-4 bg-secondary"
          >
            <figure>
              <img src={s?.img} className="h-72 w-full" alt="Shoes" />
            </figure>
            <div className="card-body text-white ">
              <h2 className="text-lg font-semibold">{s?.name}</h2>
              <p className="text-sm text-gray-200 pb-5">{s.dec}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
