"use client";

import React from "react";
import { Button } from "./Button";

export default function CTASection() {
  return (
    <section className="py-16 bg-white flex justify-center" data-aos="zoom-in">
      <div className="max-w-6xl w-full bg-gradient-to-r from-[#2a6071] to-cyan-500 bg-opacity-10 backdrop-blur-md rounded-2xl px-8 py-12 shadow-xl shadow-[#82d9f4] text-center" data-aos="zoom-in">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Ready to Find Your Dream Property?
        </h2>
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          Join thousands of satisfied customers who found their perfect home or investment property through NestifyBD. Let our experts guide you through every step of your real estate journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button variant="gradient" size="lg" href="/properties" className="font-bold text-zinc-800 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-[#2a6071]">
            Browse Properties
          </Button>
          <Button variant="outline" size="lg" href="/help" className="border-[1px] border-amber-400 font-bold transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-amber-400">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
