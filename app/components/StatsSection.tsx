"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const stats = [
  {
    label: "Years Experience",
    icon: AccessTimeIcon,
    target: 15,
    suffix: "+",
  },
  {
    label: "Happy Clients",
    icon: PeopleIcon,
    target: 5000,
    suffix: "+",
  },
  {
    label: "Verified Properties",
    icon: VerifiedIcon,
    target: 100,
    suffix: "%",
  },
  {
    label: "Support Service",
    icon: SupportAgentIcon,
    target: 24,
    suffix: "/7",
  },
];

function AnimatedNumber({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1500; // ms
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      const currentCount = Math.floor(progressRatio * target);
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(step);

    return () => {
      setCount(0);
      startTime = null;
    };
  }, [target, inView]);

  return (
    <span className="text-4xl font-extrabold text-cyan-600">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-white to-orange-100 border border-[#2a6071] rounded-lg py-5 mb-16 shadow-xl shadow-orange-100 max-w-6xl mx-auto px-4"
      data-aos="zoom-in"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center" data-aos="zoom-in">
        {stats.map(({ label, icon: Icon, target, suffix }, index) => (
          <div
            key={label}
            className="flex flex-col items-center space-y-2"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <Icon className="text-cyan-600" style={{ fontSize: 48 }} />
            <AnimatedNumber target={target} suffix={suffix} inView={inView} />
            <p className="text-gray-700 font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
