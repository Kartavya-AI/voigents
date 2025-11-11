import React from 'react';

const TrustSection = () => {
  return (
    <section className="bg-[#121212] py-12 lg:py-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <p className="text-base lg:text-lg text-white/80 text-center m-0">
            Trusted by 4k+ customers building AI agents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 items-center">
            <div className="flex items-center gap-2 text-white text-sm lg:text-base">
              <span className="font-medium">4.8/5 rating</span>
              {/* <span className="bg-white/10 px-2 py-1 rounded text-xs font-semibold">G2</span> */}
            </div>
            <div className="flex items-center gap-2 text-white text-sm lg:text-base">
              <span className="text-xl">👥</span>
              <span className="font-medium">200k+ users</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 opacity-70">
            <div className="text-white/90 text-lg lg:text-xl font-medium tracking-wide">bHub</div>
            <div className="text-white/90 text-lg lg:text-xl font-medium tracking-wide">Citizens™</div>
            <div className="text-white/90 text-lg lg:text-xl font-medium tracking-wide">CVS</div>
            <div className="text-white/90 text-lg lg:text-xl font-medium tracking-wide">amazon</div>
            <div className="text-white/90 text-lg lg:text-xl font-medium tracking-wide">Cisco</div>
            <div className="text-white/90 text-lg lg:text-xl font-medium tracking-wide">TURO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
