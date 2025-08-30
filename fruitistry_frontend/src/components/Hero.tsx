"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentFruit, setCurrentFruit] = useState(0);

  const fruits = [
    { name: "Strawberries", color: "from-red-400 to-red-600", emoji: "🍓" },
    { name: "Oranges", color: "from-orange-400 to-orange-600", emoji: "🍊" },
    { name: "Blueberries", color: "from-blue-400 to-blue-700", emoji: "🫐" },
    { name: "Pineapples", color: "from-yellow-400 to-yellow-600", emoji: "🍍" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFruit((prev) => (prev + 1) % fruits.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [fruits.length]);

  return (
    <section className="py-8 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-yellow-50 to-amber-100 z-0"></div>

      {/* Floating fruit elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">
        🍎
      </div>
      <div
        className="absolute top-40 right-16 text-5xl opacity-30 animate-float"
        style={{ animationDelay: "1s" }}
      >
        🍊
      </div>
      <div
        className="absolute bottom-32 left-24 text-7xl opacity-25 animate-float"
        style={{ animationDelay: "2s" }}
      >
        🍇
      </div>
      <div
        className="absolute bottom-40 right-20 text-6xl opacity-20 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        🍋
      </div>
      <div
        className="absolute top-1/3 left-1/4 text-4xl opacity-30 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        🫐
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg mb-6">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-semibold text-green-700">
              Fresh Seasonal Fruits Available Now
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-green-900">Handpicked.</span>{" "}
          <span className="text-amber-600">Heartfelt.</span>{" "}
          <span
            className={`bg-gradient-to-r ${fruits[currentFruit].color} bg-clip-text text-transparent`}
          >
            Heavenly.
          </span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Discover our premium fruit baskets crafted with love and care. Fresh,
          healthy, and delicious.
        </p>

        {/* Animated fruit showcase */}
        <div className="my-10 flex justify-center items-center">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center justify-center">
              <span className="text-6xl mr-4">
                {fruits[currentFruit].emoji}
              </span>
              <span
                className={`text-3xl font-bold bg-gradient-to-r ${fruits[currentFruit].color} bg-clip-text text-transparent`}
              >
                {fruits[currentFruit].name}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="group relative bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <span className="relative z-10">Explore Our Collections</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group relative bg-white/90 hover:bg-white text-gray-800 font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-lg border border-green-100 transition-all duration-300 transform hover:-translate-y-1">
            <span className="relative z-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              Shop Now
            </span>
          </button>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "100%", label: "Organic" },
            { value: "24h", label: "Freshness" },
            { value: "50+", label: "Varieties" },
            { value: "1000+", label: "Happy Customers" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/20"
            >
              <div className="text-2xl font-bold text-green-800">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
