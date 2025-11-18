import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-neutral-900">
              The Vista Restaurant
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-neutral-900 hover:bg-neutral-800">
              Reserve Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-neutral-900 hover:bg-neutral-800 w-full">
                Reserve Table
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}