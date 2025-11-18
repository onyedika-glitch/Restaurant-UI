import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Clock } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    },
    {
      icon: Users,
      title: 'Expert Chefs',
      description: 'Consectetur adipiscing elit sed do eiusmod tempor',
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Incididunt ut labore et dolore magna aliqua',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759419038843-29749ac4cd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc2MzM0Njg3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-8 rounded-lg shadow-xl">
              <p className="tracking-wide">Since</p>
              <p>1998</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-amber-600 mb-2 tracking-widest uppercase">
              About Us
            </p>
            <h2 className="text-neutral-900 mb-6">
              Crafting Culinary Excellence Since 1998
            </h2>
            <p className="text-neutral-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-neutral-600 mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title}>
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-neutral-900 mb-2">{feature.title}</h3>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
