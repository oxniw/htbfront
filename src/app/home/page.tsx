import React from 'react';
import Towatch from "@/app/components/Towatch"
import Link from 'next/link';
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
        <header className="line-b fixed inset-x-0 top-0 z-20 flex h-14 items-center justify-between bg-transparent px-4 after:-bottom-px sm:px-6 text-white">
          <div>
            <h1 className='text-xl font-bold'> Create in TB18<span></span> </h1>
          </div>
          <div className='flex flex-1 justify-start pl-8'>
          </div>
          <p>
              
            My: {" "}
            <Link
              href="https://www.instagram.com/namnourng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                instagram
              </span>
            </Link>
            
          </p>
        </header>
        <div className="relative z-10 flex items-center justify-center h-full text-white flex-col gap-8">
          <h1 className="text-5xl font-bold lg:text-9xl md:text-8xl sm:text-6xl">View Point</h1>
          <Towatch/>
        </div>
      </div>

  );
}

export default Page;
