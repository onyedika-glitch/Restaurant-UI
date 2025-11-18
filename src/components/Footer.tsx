import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'Quick Links': ['Home', 'About', 'Menu', 'Gallery', 'Contact'],
    'Our Services': ['Dine In', 'Takeaway', 'Delivery', 'Catering', 'Events'],
    'Information': ['Privacy Policy', 'Terms of Service', 'FAQ', 'Careers', 'Blog'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white mb-4">The Vista Restaurant</h3>
            <p className="text-neutral-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-neutral-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-amber-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-white mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-neutral-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400">
            © 2025 The Vista Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}