import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1740727665746-cfe80ababc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzYzMzA1NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Chef cooking',
    },
    {
      src: 'https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzYzMzE5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Gourmet plating',
    },
    {
      src: 'https://images.unsplash.com/photo-1759419038843-29749ac4cd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc2MzM0Njg3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Restaurant interior',
    },
    {
      src: 'https://images.unsplash.com/photo-1731941465921-eb4285693713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NjMzMzYzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Fine dining',
    },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-amber-600 mb-2 tracking-widest uppercase">
            Gallery
          </p>
          <h2 className="text-neutral-900 mb-4">
            A Taste of Our Experience
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square relative rounded-lg overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
