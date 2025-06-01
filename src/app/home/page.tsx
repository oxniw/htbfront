import React from 'react';
import Towatch from "@/app/components/Towatch"
function Page() {
  return (
    <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/0525(1).mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex items-center justify-center h-full text-white flex-col gap-8">
          <h1 className="text-5xl font-bold lg:text-9xl md:text-8xl sm:text-6xl">View Point</h1>
          <Towatch/>
        </div>
      </div>

  );
}

export default Page;
