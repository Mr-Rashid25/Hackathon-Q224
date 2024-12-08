'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

const ShopPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images for the product
  const productImages = ["/shop1.png", "/shop2.jpg", "/shop3.jpg"];

  // Handlers for image navigation
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      {/* Container */}
      <div className="flex justify-between items-center mb-8">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-800">Shop</h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm">
          <a href="#" className="text-gray-800 font-medium hover:underline">
            Home
          </a>
          <span className="text-gray-400">›</span>
          <span className="text-gray-400">Shop</span>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Images Section */}
        <div className="flex flex-col">
          <div className="relative">
            <Image
              src={productImages[currentImageIndex]}  // Dynamically changing images
              alt="Product"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <button
              onClick={handlePrevClick}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              ‹
            </button>
            <button
              onClick={handleNextClick}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              ›
            </button>
          </div>

          {/* Thumbnails for the images */}
          <div className="mt-4 flex space-x-4">
            {productImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}  // Click to change main image
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-cover border border-gray-300 rounded-lg cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800">Floating Phone</h2>
          <div className="flex items-center space-x-2 mt-2">
            <div className="flex text-yellow-400">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
              <span className="text-gray-300">★</span>
            </div>
            <span className="text-sm text-gray-600">(10 Reviews)</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mt-4">$1,139.33</p>
          <p className="text-sm mt-2">
            <span className="font-medium">Availability:</span>{' '}
            <span className="text-green-500">In Stock</span>
          </p>
          <p className="text-gray-600 text-sm mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          {/* Color Options */}
          <div className="mt-6">
            <span className="text-sm font-medium text-gray-700">Colors:</span>
            <div className="flex items-center space-x-3 mt-2">
              <button className="w-6 h-6 rounded-full bg-blue-500"></button>
              <button className="w-6 h-6 rounded-full bg-green-500"></button>
              <button className="w-6 h-6 rounded-full bg-orange-500"></button>
              <button className="w-6 h-6 rounded-full bg-black"></button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 flex items-center">
              Select Options
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-300 flex items-center">
              <FaHeart />
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-300 flex items-center">
              <FaShoppingCart />
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-300 flex items-center">
              <FaEye />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
