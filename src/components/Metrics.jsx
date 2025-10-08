"use client";

import { useState, useRef, useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";
import CountUp from "react-countup";

const metrics = [
  { title: "Satisfied Clients", value: 98, symbol: "%" },
  { title: "Projects Completed", value: 12, symbol: "+" },
  { title: "Hours Worked", value: 1140, symbol: "+" },
];

export default function Metrics() {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.AOS) {
      AOS.init({
        duration: 800,
        easing: "ease-out",
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="w-full bg-black border-b border-white text-white py-20 px-5 lg:px-10">
      <div className="w-full flex flex-wrap justify-center lg:justify-between items-center gap-10 text-center">
        {metrics.map((metric, index) => (
          <MetricItem key={index} metric={metric} index={index} />
        ))}
      </div>
    </div>
  );
}

function MetricItem({ metric, index }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5, rootMargin: "-50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center space-y-2"
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      <span className="michroma text-5xl lg:text-7xl font-light text-white">
        {isInView ? (
          <CountUp end={metric.value} duration={2.5} separator="," />
        ) : (
          "0"
        )}
        <span>{metric.symbol}</span>
      </span>
      <p className="text-lg lg:text-xl tracking-wide">{metric.title}</p>
    </div>
  );
}
