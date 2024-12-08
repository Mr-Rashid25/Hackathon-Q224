import React from "react";
import Image from 'next/image';

const Neural: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 bg-white mb-8 md:mb-0">
          <Image
            src="/neural.png"
            alt="Product"
            width={500}  // Add preferred width
            height={500} // Add preferred height
            className="w-full h-auto rounded-lg shadow-none"
          />
        </div>

        {/* Right side - Text and Buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-xl font-semibold text-gray-700 uppercase">Summer 2020</h4>
          <h2 className="text-3xl font-bold my-4">Part of the Neural Universe</h2>
          <p className="text-lg text-gray-700 mb-6">
            We know how large objects will act, but things on a small scale.
          </p>

          {/* Price & Buttons */}
          <div className="flex space-x-4 justify-center md:justify-start">
            <span className="text-2xl font-semibold">$16.48</span>

            <div className="flex space-x-4">
              <button className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition" aria-label="Buy Now">
                Buy Now
              </button>
              <button className="border-2 border-green-600 py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 text-black focus:outline-none focus:ring-2 focus:ring-green-500 transition" aria-label="Read More">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Neural;
