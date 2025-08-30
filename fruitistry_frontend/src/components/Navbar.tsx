"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.jpg";

export default function WowNavbar() {
  const [isScrolled, setIsScrolled] = useState(true); // set to true
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* Aurora background movement */
  const auroraRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!auroraRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      auroraRef.current.style.backgroundPosition = `${x}% ${y}%`;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  /* Scroll logic */
  useEffect(() => {
    const onScroll = () => setIsScrolled(true); // always true
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Catalogue", href: "/catalogue" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        {/* Aurora glass background */}
        <div
          ref={auroraRef}
          className={`absolute inset-0 -z-10 transition-all duration-500
            bg-gradient-to-br from-emerald-400/20 via-green-500/10 to-cyan-400/20
            backdrop-blur-xl saturate-150
            ${isScrolled ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundSize: "200% 200%" }}
        />
        <div
          className={`absolute inset-0 -z-20 transition-all duration-500
            ${isScrolled ? "bg-white/10" : "bg-transparent"}`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              aria-label="home"
            >
              <Image
                src={logo}
                alt="logo"
                width={40}
                height={40}
                className="rounded-full object-cover transition-transform duration-500 group-hover:rotate-[360deg]"
              />
              <span className="hidden sm:block font-bold text-white tracking-wider">
                Brand
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-4 py-2 text-sm font-semibold text-white/90 hover:text-white transition-colors"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:-translate-x-1/2" />
                </Link>
              ))}
              <Magnetic>
                <button className="relative overflow-hidden px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-emerald-700 hover:shadow-[0_0_20px_rgba(255,255,255,.5)]">
                  <span className="relative z-10">Order Now</span>
                </button>
              </Magnetic>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-8 h-8 flex items-center justify-center text-white focus:outline-none"
                aria-label="toggle menu"
              >
                <span className="sr-only">menu</span>
                <Hamburger open={isMobileMenuOpen} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-slate-900/80 backdrop-blur-lg
            transition-[max-height,opacity] duration-500 ease-in-out
            ${
              isMobileMenuOpen
                ? "max-h-[100vh] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="flex flex-col items-center space-y-6 py-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button className="mt-4 px-6 py-3 rounded-full bg-white text-emerald-800 font-bold shadow-lg">
              Order Now
            </button>
          </div>
        </div>
      </nav>

      {/* Safe area spacer */}
      <div className="h-12 md:h-15" />
    </>
  );
}

/* Magnetic wrapper */
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  const onMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0,0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="transition-transform duration-100 ease-out"
    >
      {children}
    </div>
  );
}

/* Morphing hamburger icon */
const Hamburger = ({ open }: { open: boolean }) => (
  <div className="relative w-6 h-5">
    <span
      className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out
        ${open ? "top-2 rotate-45" : "top-0"}`}
    />
    <span
      className={`absolute left-0 top-2 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out
        ${open ? "opacity-0" : "opacity-100"}`}
    />
    <span
      className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out
        ${open ? "top-2 -rotate-45" : "top-4"}`}
    />
  </div>
);
