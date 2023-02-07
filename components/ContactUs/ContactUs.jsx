import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineEmail, MdPhoneIphone } from 'react-icons/md';

const ContactUs = () => {
  const textRef = useRef(null);
  const ref = useRef(null);
  const fromRef = useRef(null);

  const isInView = useInView(ref, { once: false }); // observer
  const isTextInView = useInView(textRef, { once: false }); // observer
  const isFromInView = useInView(textRef, { once: false }); // observer

  return (
    <section className="lg:p-28 pt-16 ">
      <motion.div
        ref={textRef}
        animate={{ y: isTextInView ? [-100, 0] : 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h2 className="text-lg text-center font-semibold text-primary">
          Contact Us
        </h2>
        <h3 className="text-4xl text-center font-semibold text-white ">
          We are Always Happy To Hear From You
        </h3>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-24">
        <motion.div
          ref={ref}
          animate={{ x: isInView ? [-500, 0] : 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="hidden lg:block"
        >
          <ul className="list-none lg:pl-12">
            <li className="flex items-center justify-start space-x-5 pb-7">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg ">
                <FaMapMarkerAlt className="text-4xl text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">Address</p>
                <p className="text-md font-bold text-gray-500">
                  Xyz, New time, Nyu
                </p>
              </div>
            </li>
            <li className="flex items-center justify-start  space-x-5 pb-9">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg ">
                <MdOutlineEmail className="text-4xl text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">Email</p>
                <p className="text-md font-bold text-gray-500">
                  example@gmail.com
                </p>
              </div>
            </li>
            <li className="flex items-center justify-start  space-x-5">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg ">
                <MdPhoneIphone className="text-4xl text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">Phone</p>
                <p className="text-md font-bold text-gray-500">
                  +1001002348544
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
        <motion.div
          ref={fromRef}
          animate={{ x: isFromInView ? [500, 0] : 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className=" grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              class="block text-lg mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-transparent px-7 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-gray-600  dark:text-gray-300 dark:focus:border-primary"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              class="block text-lg mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-transparent px-7 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-gray-600  dark:text-gray-300 dark:focus:border-primary"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Phone"
              class="block text-lg mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-transparent px-7 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-gray-600  dark:text-gray-300 dark:focus:border-primary"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Subject"
              class="block text-lg mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-transparent px-7 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-gray-600  dark:text-gray-300 dark:focus:border-primary"
            />
          </div>
          <div className="col-span-2">
            <textarea
              placeholder="Write Your Message Here"
              class="block text-lg  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-transparent px-7 h-32 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-gray-600  dark:text-gray-300 dark:focus:border-primary"
            ></textarea>
          </div>
          <div className="col-span-2">
            <motion.button
              whileTap={{ scale: [1, 0.6, 1] }}
              className="px-12 py-3 w-full mt-1 bg-primary text-white  font-semibold rounded-lg shadow-lg "
            >
              SEND
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
