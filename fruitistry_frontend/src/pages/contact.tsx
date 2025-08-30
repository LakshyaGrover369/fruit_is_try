import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_i4pm1dl", // Replace with your EmailJS service ID
        "template_ihkg43s", // Replace with your EmailJS template ID
        form.current,
        "HFkeUCTLvPxRr05Ou" // Replace with your EmailJS user/public key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          if (form.current) form.current.reset();
        },
        (err: unknown) => {
          setError("Failed to send message. Please try again later.");
          console.error(err);
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/80 to-amber-600/90 z-0"></div>
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Get In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-emerald-300">
              Touch
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Have questions about our fruits or need assistance with an order?
            We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative">
        <div className="absolute left-0 top-40 -translate-x-1/2 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <div className="inline-block mb-4">
                <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-gray-700 rounded-full uppercase">
                  Send Message
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Let&apos;s Talk About Fruits
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-amber-400 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-80 disabled:transform-none disabled:hover:shadow-none"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
                {sent && (
                  <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 font-semibold flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}
                {error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-semibold flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {error}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-700 rounded-full uppercase">
                  Contact Info
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                How to Reach Us
              </h2>
              <div className="space-y-8">
                <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="bg-emerald-100 p-4 rounded-xl mr-5">
                    <span className="text-2xl text-emerald-600">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-700">
                      123 Orchard Lane
                      <br />
                      Freshtown, CA 90210
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="bg-amber-100 p-4 rounded-xl mr-5">
                    <span className="text-2xl text-amber-600">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-700">
                      +1 (555) 123-4567
                      <br />
                      <span className="text-sm text-gray-500">
                        Mon-Fri, 9am-5pm PST
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="bg-emerald-100 p-4 rounded-xl mr-5">
                    <span className="text-2xl text-emerald-600">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700">
                      hello@fruitistry.com
                      <br />
                      support@fruitistry.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10 p-6 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-2xl text-white">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      name: "Facebook",
                      icon: "📘",
                      color: "hover:bg-blue-500",
                    },
                    {
                      name: "Instagram",
                      icon: "📸",
                      color: "hover:bg-pink-500",
                    },
                    { name: "Twitter", icon: "🐦", color: "hover:bg-blue-400" },
                    {
                      name: "Pinterest",
                      icon: "📌",
                      color: "hover:bg-red-500",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl transition-all duration-300 ${social.color} backdrop-blur-sm`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-emerald-600 to-transparent opacity-20"></div>
        <div className="absolute top-20 right-0 -mr-40 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              Quick answers to common questions about our fruits and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I place an order?",
                answer:
                  "You can place an order through our website, mobile app, or by calling our customer service team. We make it easy to get fresh fruits delivered to your door.",
              },
              {
                question: "What areas do you deliver to?",
                answer:
                  "We currently deliver to all major cities across the country. Enter your zip code during checkout to confirm availability in your area.",
              },
              {
                question: "How fresh are your fruits?",
                answer:
                  "We source fruits directly from orchards and deliver within 24-48 hours of harvesting for maximum freshness. Our quality guarantee ensures you receive the best.",
              },
              {
                question: "Can I customize my fruit basket?",
                answer:
                  "Yes! We offer fully customizable fruit baskets for all occasions. Choose from our selection or create your own combination of favorite fruits.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-emerald-500 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                    ?
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Not Sure Where to Start?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Our fruit experts are ready to help you choose the perfect selection
            for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Schedule a Call
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300">
              Browse Our Selection
            </button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
