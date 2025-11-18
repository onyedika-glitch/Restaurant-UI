import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Culinary Avenue', 'New York, NY 10001'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@vistarestaurant.com', 'reservations@vistarestaurant.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 11:00 - 23:00', 'Sat-Sun: 10:00 - 00:00'],
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-amber-600 mb-2 tracking-widest uppercase">
            Contact Us
          </p>
          <h2 className="text-neutral-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-neutral-900 mb-6">Visit Us</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title}>
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h4 className="text-neutral-900 mb-2">{info.title}</h4>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-neutral-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-[4/3] bg-neutral-200 rounded-lg flex items-center justify-center">
              <MapPin className="w-12 h-12 text-neutral-400" />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-neutral-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-neutral-700 mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-neutral-700 mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-neutral-700 mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-neutral-700 mb-2">
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div>
                <label htmlFor="message" className="block text-neutral-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}