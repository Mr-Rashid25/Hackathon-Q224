'use client';

import React from "react";
import Image from "next/image"; // Import Image from Next.js for optimized image loading

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat mt-6 h-[60vh] lg:h-[100vh]"
      style={{
        backgroundColor: 'transparent', 
      }}
      aria-labelledby="hero-section"
      role="banner" // Use semantic HTML elements and roles
    >
      <div className="absolute inset-0 bg-black/40"></div> 
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center text-center lg:text-left px-6 lg:px-7 h-full">
        {/* Content */}
        <div className="text-white max-w-3xl">
          <p className="uppercase text-sm tracking-widest font-semibold">
            Summer 2020
          </p>
          <h1 id="hero-section" className="text-4xl lg:text-6xl font-bold my-4">
            New Collection
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed">
            We know how large objects will act, but things on a small scale.
          </p>
          <button
            className="mt-8 px-8 py-4 bg-green-500 text-white font-medium text-lg rounded-full hover:bg-green-600 transition"
            aria-label="Shop Now"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Using Next.js Image component for better performance */}
      <div className="absolute inset-0">
        <Image 
          src="/hero.jpg" 
          alt="Hero Image" 
          layout="fill" 
          objectFit="cover" 
          priority // Prioritize loading of the hero image
        />
      </div>
    </section>
  );
};

export default Hero;
