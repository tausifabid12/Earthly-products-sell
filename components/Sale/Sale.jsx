import React from 'react';

const Sale = () => {
  return (
    <section
      style={{
        background: `linear-gradient(184deg, rgba(162,89,255,0) 0%, rgba(162,89,255,1) 91%), url('/assets/sale.jpg')`,
        backgroundPosition: 'top',
      }}
      className="w-full h-[500px] p-28"
    >
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-end ">
        <div className="space-y-8">
          <h2 className="text-5xl font-semibold text-white">
            Our Yearly Biggest Sale
          </h2>
          <button className="px-7 py-3 rounded-xl bg-white text-primary font-semibold">
            View Offer
          </button>
        </div>
        <div className="bg-black/20 backdrop-blur-lg p-8 w-[350px] mx-auto rounded-2xl space-y-4">
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
        </div>
      </div>
    </section>
  );
};

export default Sale;
