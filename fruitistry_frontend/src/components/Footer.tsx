export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-2 rounded-lg mr-3 shadow-lg">
                <span className="text-white text-2xl">🍎</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                Fruitistry & Co.
              </h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Bringing nature&apos;s finest fruits directly to your doorstep.
              Fresh, organic, and delivered with care.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: "📘", label: "Facebook" },
                { icon: "📷", label: "Instagram" },
                { icon: "🐦", label: "Twitter" },
                { icon: "📽️", label: "YouTube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Catalogue", href: "/catalogue" },
                { name: "Order", href: "/order" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-2 group-hover:bg-gray-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">
              Contact Us
            </h4>
            <ul className="space-y-3">
              {[
                { icon: "📞", text: "+1 (555) 123-4567" },
                { icon: "✉️", text: "hello@fruitistry.com" },
                { icon: "📍", text: "123 Orchard Lane, Freshtown" },
              ].map((contact, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-lg mr-2 mt-1 text-gray-400">
                    {contact.icon}
                  </span>
                  <span className="text-gray-400">{contact.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-300">
                Payment Methods
              </h4>
              <div className="flex space-x-2">
                {["💳", "📱", "🏦", "🔗"].map((method, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-2 rounded-md shadow-sm"
                  >
                    <span className="text-sm">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for seasonal offers and fruit tips!
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 shadow-inner"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-300">
                Download Our App
              </h4>
              <div className="flex space-x-3">
                <button className="bg-gray-800 hover:bg-gray-700 text-white text-xs py-2 px-3 rounded flex items-center transition-all duration-300 shadow-md">
                  <span className="mr-1">📱</span>
                  App Store
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white text-xs py-2 px-3 rounded flex items-center transition-all duration-300 shadow-md">
                  <span className="mr-1">🤖</span>
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Fruitistry & Co. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
              <span className="inline-flex items-center">
                Handpicked · Heartfelt · Heavenly
                <span className="text-lg ml-2">✨</span>
              </span>
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
