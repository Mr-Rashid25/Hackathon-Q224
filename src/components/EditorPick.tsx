import Image from 'next/image';

const EditorPick: React.FC = () => {
  const images = [
    { src: '/pick1.png', alt: 'Beautiful Scenery 1' },
    { src: '/pick2.png', alt: 'Beautiful Scenery 2' },
    { src: '/pick3.png', alt: 'Beautiful Scenery 3' },
    { src: '/pick4.png', alt: 'Beautiful Scenery 4' },
  ];

  return (
    <section className="mx-auto lg:w-[1050px] mt-10 mb-">
      {/* Heading Section */}
      <header className="text-center mb-3">
        <h2 className="text-2xl font-bold mb-1">EDITOR'S PICK</h2>
        <p className="text-gray-600 text-sm">Problems trying to resolve the conflict between</p>
      </header>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md"
            style={{ aspectRatio: '16/9' }} // Consistent aspect ratio
          >
            <Image
              src={image.src}
              alt={image.alt}
                layout="fill"
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-contain"
              priority={index === 0}

            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EditorPick;
