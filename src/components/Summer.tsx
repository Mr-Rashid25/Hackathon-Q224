"use client";  // Add this if you're using any React hooks in the component

import React from "react";
import Image from "next/image";  // Import Image component from Next.js

const Summer: React.FC = () => {
  return (
    <section className="bg-green-700 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left sec */}
        <div className="text-center md:text-left flex-1">
          <p className="text-sm uppercase tracking-wide">Summer 2020</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Vita Classic <br /> Product
          </h1>
          <p className="text-gray-200 mt-6 max-w-lg">
            We know how large objects will act. We know how are objects will
            act. We know.
          </p>
          <div className="mt-6 flex items-center justify-center md:justify-start space-x-4">
            <span className="text-2xl font-semibold">$16.48</span>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-900 transition-all">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Image for right side */}
        <div className="flex-1 mt-8 md:mt-0">
          {/* Use Next.js Image component for optimization */}
          <Image
            src="/classic.png"  // Image path
            alt="Vita Classic Product"
            width={500}  // Set width to your image's size
            height={500} // Set height to your image's size
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Summer;
