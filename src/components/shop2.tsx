"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProductDetailsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-10">
      {/* Tabs Navigation */}
      <div className="border-b border-gray-300">
        <nav className="flex justify-center space-x-10" aria-label="Tabs">
          {[
            { id: "description", label: "Description" },
            { id: "additional-info", label: "Additional Information" },
            { id: "reviews", label: "Reviews (0)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg font-semibold pb-2 ${
                activeTab === tab.id
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-10">
        {activeTab === "description" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column: Image */}
            <div className="flex justify-center lg:col-span-1">
              <Image
                src="/quick.png"
                alt="Decorative"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            {/* Middle Column: Paragraph 1 */}
            <div className="text-gray-700 text-base text-left lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">
                The Quick Fox Jumps Over
              </h3>
              <p className="mb-4">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            {/* Right Column: Paragraph 2 */}
            <div className="text-gray-700 text-base text-left lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">
                The Quick Fox Jumps Over
              </h3>
              <p className="mb-4">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
        )}

        {activeTab === "additional-info" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="text-gray-700 text-left">
              <h3 className="text-lg font-semibold mb-4">
                The Quick Fox Jumps Over
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>The quick fox jumps over the lazy dog</li>
                <li>The quick fox jumps over the lazy dog</li>
                <li>The quick fox jumps over the lazy dog</li>
                <li>The quick fox jumps over the lazy dog</li>
              </ul>
            </div>
            <div className="text-gray-700 text-left">
              <h3 className="text-lg font-semibold mb-4">
                The Quick Fox Jumps Over
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>The quick fox jumps over the lazy dog</li>
                <li>The quick fox jumps over the lazy dog</li>
                <li>The quick fox jumps over the lazy dog</li>
                <li>The quick fox jumps over the lazy dog</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="flex justify-center">
            <p className="text-gray-600 text-base">
              No reviews yet. Be the first to write one!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTabs;
