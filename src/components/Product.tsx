import React from "react";
import Image from "next/image";

const ProductGrid: React.FC = () => {
  // Mock data for 8 products
  const products = [
    {
      id: 1,
      image: "/p1.png", // Ensure these images are in the public directory
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"],
    },
    {
      id: 2,
      image: "/p2.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"],
    },
    {
      id: 3,
      image: "/p3.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"],
    },
    {
      id: 4,
      image: "/p4.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"],
    },
    {
      id: 5,
      image: "/p5.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"],
    },
    {
      id: 6,
      image: "/p6.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"],
    },
    {
      id: 7,
      image: "/p7.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"],
    },
    {
      id: 8,
      image: "/p8.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"],
    },
  ];

  return (
    <section className="bg-black text-white py-10 px-4">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold uppercase">Featured Products</h2>
        <h3 className="text-2xl font-semibold text-gray-200 mt-2">
          Bestseller Products
        </h3>
        <p className="text-gray-400 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white text-black p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Product Image */}
            <div className="w-full h-auto">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={250}
                className="rounded-md"
                loading="lazy"
              />
            </div>

            {/* Product Details */}
            <h4 className="text-lg font-semibold mt-4">{product.title}</h4>
            <p className="text-sm text-gray-600">{product.department}</p>

            {/* Price Section */}
            <div className="flex items-center gap-2 mt-3">
              <span className="text-gray-500 line-through">{product.oldPrice}</span>
              <span className="text-green-500 font-bold">{product.newPrice}</span>
            </div>

            {/* Product Colors */}
            <div className="flex space-x-2 mt-4">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className={`${color} w-4 h-4 rounded-full border border-gray-300`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
