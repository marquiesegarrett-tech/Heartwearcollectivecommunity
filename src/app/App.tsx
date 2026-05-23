import React, { useState } from 'react';
import { Menu, X, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin, ShoppingCart } from 'lucide-react';
import logo from 'figma:asset/568457230b49531ee9a9ea80a16a856ae1269fa7.png';
import jacketImage from '../imports/image.png';
import shirtImage from '../imports/image-2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <img src={logo} alt="Heartwear Collective" className="h-20 w-auto" />
            </a>
          </div>
          
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <a href="#home" className="text-pink-600 font-medium hover:text-pink-700 transition">Home</a>
              <a href="#about" className="text-gray-600 font-medium hover:text-pink-600 transition">About</a>
              <a href="#pricing" className="text-gray-600 font-medium hover:text-pink-600 transition">Products</a>
              <a href="#contact" className="text-gray-600 font-medium hover:text-pink-600 transition">Contact</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#cart" className="text-black hover:text-pink-600 transition relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-pink-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#home" className="block px-3 py-3 text-pink-600 font-medium" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="block px-3 py-3 text-gray-700 font-medium hover:text-pink-600" onClick={() => setIsOpen(false)}>About</a>
            <a href="#pricing" className="block px-3 py-3 text-gray-700 font-medium hover:text-pink-600" onClick={() => setIsOpen(false)}>Products</a>
            <a href="#contact" className="block px-3 py-3 text-gray-700 font-medium hover:text-pink-600" onClick={() => setIsOpen(false)}>Contact</a>
            <div className="mt-6 flex items-center justify-center px-3">
              <a href="#cart" className="text-black hover:text-pink-600 transition relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6">
            Heartwear Collective
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          Upcycled wearable art transformed into unique clothing and accessories. Each piece is hand-painted and crafted emphasizing sustainability while showcasing artistic expression.
          </p>
          <div className="flex items-center justify-center">
            <a href="#pricing" className="px-8 py-3.5 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-md shadow-md transition text-lg">
              View Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded bg-black text-white font-bold text-sm mb-6 uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 leading-tight">
            Heartwear Collective
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Founded by Kanika Green in Seattle, WA, Heartwear Collective transforms upcycled materials into unique wearable art, emphasizing sustainability while showcasing artistic expression.
          </p>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Heartwear Collective has officially been in business since 2020. It was created from love, along with a gift for art and fashion. People are drawn to my items, if they want to stand out and show their individuality.
          </p>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Heartwear Collective was created during COVID. I started painting on jackets and posting them on social media. The response was positive and it continues to evolve. I've been able to merge my background in Fashion Merchandising and Contract Management.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Each piece is hand-painted and crafted with care, turning everyday items into one-of-a-kind clothing and accessories. We believe in giving new life to materials while creating art that tells a story.
          </p>
          <a href="#contact" className="inline-flex px-8 py-3.5 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-md shadow-md transition text-lg">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const products = [
    {
      name: "'All I Need is Love' Jacket",
      priceRange: "$60 - $200",
      image: jacketImage,
      sizes: ['S', 'M', 'L']
    },
    {
      name: "Hats",
      priceRange: "$15 - $35",
      image: null,
      sizes: ['One size']
    },
    {
      name: "'Melanin' T-shirt",
      priceRange: "$20 - $35",
      image: shirtImage,
      sizes: ['S', 'M', 'L']
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="text-pink-600 font-bold tracking-wider uppercase text-sm mb-2 block">Products</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Our Products</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Unique, hand-crafted wearable art pieces made from upcycled materials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200">
              {product.image ? (
                <div className="aspect-square overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-semibold text-lg">Coming Soon</span>
                </div>
              )}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-black mb-2">{product.name}</h3>
                <p className="text-pink-600 font-bold text-xl mb-4">{product.priceRange}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  {product.sizes.map((size, sizeIndex) => (
                    <button key={sizeIndex} className={`${size === 'One size' ? 'px-4' : 'w-10'} h-10 border-2 border-gray-300 hover:border-pink-600 hover:bg-pink-600 hover:text-white rounded-md font-semibold transition-colors`}>
                      {size}
                    </button>
                  ))}
                </div>
                <button className="w-full py-3 px-4 bg-pink-600 text-white hover:bg-pink-700 font-semibold text-center rounded-md transition-colors mb-3">
                  Add to Cart
                </button>
                <p className="text-gray-500 text-xs leading-relaxed">
                  To get in contact with us, please contact us via email at <a href="mailto:kanikagreen@yahoo.com" className="text-pink-600 hover:text-pink-700 underline">kanikagreen@yahoo.com</a> or Instagram <a href="https://instagram.com/heartwear_collective" className="text-pink-600 hover:text-pink-700 underline">@heartwear_collective</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-7/12">
            <span className="text-pink-600 font-bold tracking-wider uppercase text-sm mb-2 block">CONTACT US</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-10 leading-tight">
              Let's Create Something Beautiful Together
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-black mb-2">Our Location</h5>
                  <p className="text-gray-600 text-lg">511 S Sullivan St, Seattle, WA 98108</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-black mb-2">Get in Touch</h5>
                  <p className="text-gray-600 text-lg">kanikagreen@yahoo.com</p>
                  <p className="text-gray-600 text-lg">@heartwear_collective</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Full Name*</label>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-pink-600 focus:ring-1 focus:ring-pink-600 outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Email*</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-pink-600 focus:ring-1 focus:ring-pink-600 outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Phone*</label>
                  <input type="text" placeholder="Your phone number" className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-pink-600 focus:ring-1 focus:ring-pink-600 outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Message*</label>
                  <textarea rows={4} placeholder="Tell us about your project or inquiry..." className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-pink-600 focus:ring-1 focus:ring-pink-600 outline-none transition resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 rounded-md transition shadow-md mb-3">
                  Send Message
                </button>
                <p className="text-gray-500 text-xs leading-relaxed text-center">
                  To get in contact with us, please contact us via email at <a href="mailto:kanikagreen@yahoo.com" className="text-pink-600 hover:text-pink-700 underline">kanikagreen@yahoo.com</a> or Instagram <a href="https://instagram.com/heartwear_collective" className="text-pink-600 hover:text-pink-700 underline">@heartwear_collective</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <a href="#" className="flex items-center mb-6">
              <img src={logo} alt="Heartwear Collective" className="h-24 w-auto" />
            </a>
            <p className="text-gray-400 leading-relaxed">
              Upcycled wearable art transformed into unique clothing and accessories. Each piece is hand-painted and crafted with sustainability and artistic expression.
            </p>
          </div>

          <div>
            <h5 className="text-xl font-bold text-white mb-6">Quick Links</h5>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-pink-500 transition">Home</a></li>
              <li><a href="#about" className="hover:text-pink-500 transition">About</a></li>
              <li><a href="#pricing" className="hover:text-pink-500 transition">Products</a></li>
              <li><a href="#contact" className="hover:text-pink-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-bold text-white mb-6">Connect</h5>
            <ul className="space-y-4">
              <li><a href="mailto:kanikagreen@yahoo.com" className="hover:text-pink-500 transition">Email Us</a></li>
              <li><a href="https://instagram.com/heartwear_collective" className="hover:text-pink-500 transition">Instagram</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Facebook</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© 2026 Heartwear Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-800 antialiased bg-white selection:bg-pink-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}