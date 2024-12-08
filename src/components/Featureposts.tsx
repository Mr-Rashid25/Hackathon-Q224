import React from 'react';
import Image from 'next/image';
import { FaRegCalendarAlt, FaRegComments } from 'react-icons/fa';

const FeaturedPosts: React.FC = () => {
  const posts = [
    {
      id: 1,
      image: '/f1.png',
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10,
    },
    {
      id: 2,
      image: '/f2.png',
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10,
    },
    {
      id: 3,
      image: '/f3.png',
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10,
    },
  ];

  return (
    <div className="px-6 py-10 text-center">
      {/* Section Header */}
      <h3 className="text-sm uppercase text-blue-500 font-medium">Practice Advice</h3>
      <h1 className="text-3xl font-bold text-gray-800 mt-2">Featured Posts</h1>
      <p className="text-gray-500 text-sm mt-4">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>

      {/* Posts Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image Section */}
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="rounded-t-lg object-cover"
                style={{ width: '100%', height: '200px' }}
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <p className="text-xs text-blue-500 uppercase mb-2 tracking-wide">Google Trending New</p>
              <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
              <p className="text-sm text-gray-500 mt-2">{post.description}</p>

              {/* Meta Info */}
              <div className="flex justify-between items-center text-gray-400 text-xs mt-4">
                <span className="flex items-center gap-1">
                  <FaRegCalendarAlt /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegComments /> {post.comments} comments
                </span>
              </div>

              {/* Learn More */}
              <a
                href="#"
                aria-label={`Learn more about ${post.title}`}
                className="text-blue-500 text-sm font-medium hover:underline mt-4 flex items-center gap-2"
              >
                <span>Learn More</span> →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
