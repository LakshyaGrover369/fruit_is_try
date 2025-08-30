"use client";
import Image from "next/image";
import {
  GlobeEuropeAfricaIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export const metadata = {
  title: "About Us",
  description: "Learn our story, mission and meet the team.",
};

const values = [
  {
    icon: HeartIcon,
    title: "Passion",
    text: "We pour heart into every fruit basket we craft.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Quality",
    text: "Hand-picked produce, rigorously checked for perfection.",
  },
  {
    icon: LightBulbIcon,
    title: "Innovation",
    text: "Eco-friendly packaging and creative combinations.",
  },
  {
    icon: GlobeEuropeAfricaIcon,
    title: "Sustainability",
    text: "Supporting local farmers and greener planet initiatives.",
  },
];

const milestones = [
  { year: "2018", label: "Founded in a small village shed" },
  { year: "2020", label: "First 10k happy customers" },
  { year: "2022", label: "Zero-waste packaging launch" },
  { year: "2024", label: "Serving nationwide + EU exports" },
];

const team = [
  {
    name: "Aisha Khan",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Leo Chen",
    role: "Head of Product",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Maria Silva",
    role: "Sustainability Lead",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sam Wilson",
    role: "Customer Delight",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Aurora blob (decorative) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-300/20 blur-3xl -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 blur-3xl translate-x-1/2 translate-y-1/2 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* HERO */}
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-500">
            Our Story
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-700">
            From a back-yard fruit stand to a nationwide movement—our journey is
            rooted in love for fresh produce and the people who grow it.
          </p>
        </section>

        {/* VALUES */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Core Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="group relative p-6 bg-white/40 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-emerald-200/50 hover:-translate-y-1 transition"
              >
                <v.icon className="w-10 h-10 mb-4 text-emerald-600" />
                <h3 className="font-semibold text-slate-800 mb-1">{v.title}</h3>
                <p className="text-sm text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Timeline
          </h2>
          <div className="relative flex flex-col md:flex-row justify-between gap-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex-1 text-center">
                <div className="text-3xl font-bold text-emerald-600">
                  {m.year}
                </div>
                <div className="mt-2 text-slate-600">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <div
                key={person.name}
                className="group relative rounded-2xl overflow-hidden shadow-xl bg-white"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg">{person.name}</h3>
                  <p className="text-sm text-emerald-200">{person.role}</p>
                  <a
                    href="mailto:hello@brand.com"
                    className="inline-block mt-2 p-1.5 bg-white/20 rounded-full"
                    aria-label="email"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
