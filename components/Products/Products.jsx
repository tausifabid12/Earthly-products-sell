import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const Products = () => {
  const textRef = useRef(null);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false }); // observer
  const isTextInView = useInView(textRef, { once: false }); // observer

  const productData = [
    {
      id: 1,
      name: 'Plant Based Reusable Cups',
      dec: `Barista's love it! Easy to clean, hassle free and Plant Based. Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable cups which can be used hundreds of times. So, every batch is unique, Just. Like. You.`,
      img: '/assets/cups.jpg',
      price: 10,
    },
    {
      id: 2,
      name: 'Reusable Bamboo Straws',
      dec: `We collaborated with artisans in Veitnam, Earthly Organic Bamboo Straws are 100% Compostable, Vegan and BPA free. They can be reused, thrown in a compost bin, or even in your backyard. Serve with cold beverages like ice tea, cold coffee and many more. `,
      img: '/assets/bbmS.jpg',
      price: 10,
    },
    {
      id: 3,
      name: 'Bamboo Loofah',
      dec: `Barista's love it! Easy to clean, hassle free and Plant Based. Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable cups which can be used hundreds of times. So, every batch is unique, Just. Like. You.`,
      img: '/assets/loofah.jpg',
      price: 10,
    },
    {
      id: 4,
      name: 'Bamboo Toothbrush',
      dec: `Barista's love it! Easy to clean, hassle free and Plant Based. Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable cups which can be used hundreds of times. So, every batch is unique, Just. Like. You.`,
      img: '/assets/toothB.jpg',
      price: 10,
    },
    {
      id: 5,
      name: 'Plant Based Reusable Containers',
      dec: `Barista's love it! Easy to clean, hassle free and Plant Based. Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable cups which can be used hundreds of times. So, every batch is unique, Just. Like. You.`,
      img: '/assets/jar.jpg',
      price: 10,
    },
    {
      id: 6,
      name: 'Sustainability Starter Kit',
      dec: `Barista's love it! Easy to clean, hassle free and Plant Based. Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable cups which can be used hundreds of times. So, every batch is unique, Just. Like. You.`,
      img: '/assets/all.webp',
      price: 10,
    },
  ];
  // console.log(productData);
  return (
    <div className="px-3 lg:p-28  py-10">
      <motion.div
        ref={textRef}
        animate={{ x: isTextInView ? [500, 0] : 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h3 className="text-2xl lg:text-4xl text-white font-semibold pb-3">
          Our Best Collections
        </h3>
        <p className="text-md lg:text-xl text-gray-300">
          Checkout our weekly updated trending collection.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        animate={{ x: isInView ? [-500, 0] : 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 mx-2 lg:mx-0"
      >
        {productData.map((p) => (
          <div
            key={p?.id}
            className="card card-compact w-full  shadow-xl gap-4 bg-secondary"
          >
            <figure>
              <img
                src={p?.img}
                className="h-72 w-full transition-all duration-300 hover:scale-125"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-white">
              <h2 className="text-lg font-semibold">{p?.name}</h2>
              <p className="text-sm text-gray-200">Price: {p.price}$</p>
              <motion.button
                whileTap={{ scale: [1, 0.6, 1] }}
                className="px-4 py-2 bg-primary rounded-xl font-semibold"
              >
                Add To Cart
              </motion.button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;

// export default dynamic(() => Promise.resolve(Products), { ssr: false });
