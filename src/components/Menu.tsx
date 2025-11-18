import { ImageWithFallback } from './figma/ImageWithFallback';

export function Menu() {
  const menuItems = [
    {
      name: 'Truffle Risotto',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing',
      price: '$28',
      category: 'Main Course',
    },
    {
      name: 'Grilled Salmon',
      description: 'Sed do eiusmod tempor incididunt ut labore',
      price: '$32',
      category: 'Main Course',
    },
    {
      name: 'Beef Tenderloin',
      description: 'Consectetur adipiscing elit sed do eiusmod',
      price: '$42',
      category: 'Main Course',
    },
    {
      name: 'Lobster Bisque',
      description: 'Ut enim ad minim veniam quis nostrud',
      price: '$18',
      category: 'Starter',
    },
    {
      name: 'Caesar Salad',
      description: 'Duis aute irure dolor in reprehenderit',
      price: '$14',
      category: 'Starter',
    },
    {
      name: 'Chocolate Soufflé',
      description: 'Excepteur sint occaecat cupidatat non proident',
      price: '$12',
      category: 'Dessert',
    },
  ];

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-amber-600 mb-2 tracking-widest uppercase">
            Our Menu
          </p>
          <h2 className="text-neutral-900 mb-4">
            Signature Dishes
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 md:mb-16">
          <div className="aspect-[21/9] max-h-[400px] relative rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzYzMzE5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Gourmet food plating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-neutral-200 pb-6 last:border-b-0"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-neutral-900">{item.name}</h3>
                  <p className="text-amber-600">{item.category}</p>
                </div>
                <span className="text-amber-600">{item.price}</span>
              </div>
              <p className="text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
