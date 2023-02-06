import React from 'react';

const Services = () => {
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
    <section className="p-28 pt-10">
      <div>
        <h3 className="text-4xl text-white font-semibold pb-3">What We Do</h3>
        <p className="text-xl text-gray-300">
          We make affordable reusable eco friendly Products.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
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
      </div>
    </section>
  );
};

export default Services;
