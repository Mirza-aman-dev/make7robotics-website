"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ScrollAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let items = gsap.utils.toArray(".you-can-scroll-item");
    
    if(items.length > 0) {
      items.forEach((item) => {
        // Set initial dimmed state
        gsap.set(item, { opacity: 0.05, scale: 0.85, filter: "blur(2px)" });
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center+=25%", 
            end: "top center-=25%",   
            scrub: 1.5, // 1.5 seconds of smoothing for that "butter smooth" effect
          }
        });

        // Animate in to illuminated state, then animate out to dimmed state
        tl.to(item, { 
          opacity: 1, 
          scale: 1.1, 
          filter: "blur(0px)",
          textShadow: "0px 0px 40px rgba(255,51,51,1)",
          duration: 0.5, 
          ease: "power2.out"
        })
        .to(item, { 
          opacity: 0.05, 
          scale: 0.85, 
          filter: "blur(2px)",
          textShadow: "0px 0px 0px rgba(255,51,51,0)",
          duration: 0.5, 
          ease: "power2.in" 
        });
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] text-white overflow-hidden py-32 flex flex-col items-center">
      <header className="mb-32 text-center z-10 relative">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight">
          students can<br />achieve.
        </h2>
      </header>
      <main className="w-full max-w-4xl mx-auto px-8 text-center pb-[30vh]">
        <section className="content fluid w-full">
          <ul aria-hidden="true" className="space-y-16 md:space-y-32 text-4xl md:text-7xl font-bold uppercase w-full">
            {[
              "design.",
              "prototype.",
              "solve.",
              "build.",
              "develop.",
              "debug.",
              "learn.",
              "collaborate.",
              "innovate.",
              "transform.",
              "the future."
            ].map((text, i) => (
              <li key={i} className="you-can-scroll-item py-4 text-[#ff3333] tracking-widest">
                {text}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
