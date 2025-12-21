"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    ScrollSmoother: any;
    SplitText: any;
  }
}

export default function ScrollAnimations() {
  useEffect(() => {
    // Load GSAP libraries dynamically
    loadGSAPLibraries();
  }, []);

  const loadGSAPLibraries = () => {
    console.log("Starting GSAP library load...");
    
    if (typeof window === "undefined") return;

    // Scripts to load in order
    const scripts = [
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.14.1/gsap.min.js",
      "https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js",
      "https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollSmoother.min.js",
      "https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/SplitText.min.js",
    ];

    let loaded = 0;

    const loadNext = (index: number) => {
      if (index >= scripts.length) {
        console.log("✓ All GSAP libraries loaded!");
        setTimeout(() => {
          if (window.gsap && window.ScrollTrigger) {
            console.log("✓ GSAP ready, initializing animations...");
            initializeAnimations();
          }
        }, 500);
        return;
      }

      const script = document.createElement("script");
      script.src = scripts[index];
      script.async = false; // Load sequentially
      
      script.onload = () => {
        loaded++;
        console.log(`✓ Loaded (${loaded}/4): ${scripts[index].split("/").pop()}`);
        loadNext(index + 1);
      };

      script.onerror = () => {
        console.log(
          `⚠ Failed to load: ${scripts[index]}, trying next...`
        );
        loadNext(index + 1);
      };

      document.head.appendChild(script);
    };

    loadNext(0);
  };

  const initializeAnimations = () => {
    try {
      const gsap = window.gsap as any;
      const ScrollTrigger = window.ScrollTrigger as any;
      const ScrollSmoother = window.ScrollSmoother as any;
      const SplitText = window.SplitText as any;

      // Register plugins
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
      console.log("✓ Plugins registered");

      // Create ScrollSmoother
      try {
        const wrapper = document.querySelector("#smooth-wrapper");
        const content = document.querySelector("#smooth-content");
        if (wrapper && content) {
          ScrollSmoother.create({
            wrapper: wrapper,
            content: content,
            smooth: 1.5,
            effects: true,
          });
          console.log("✓ ScrollSmoother created");
        }
      } catch (e) {
        console.log("⚠ ScrollSmoother setup skipped:", e);
      }

      // Split text animations for headings
      const headings = document.querySelectorAll("h1, h2, h3");
      console.log(`Found ${headings.length} headings for SplitText animation`);

      headings.forEach((heading, idx) => {
        // Remove AOS attributes to prevent conflicts
        heading.removeAttribute("data-aos");
        heading.removeAttribute("data-aos-delay");
        heading.removeAttribute("data-aos-duration");
        heading.classList.remove("aos-init", "aos-animate");

        try {
          const split = new SplitText(heading, { type: "chars" });

          gsap.from(split.chars, {
            opacity: 0,
            y: 10,
            duration: 0.6,
            stagger: 0.03,
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              end: "top 55%",
              scrub: 0,
              markers: false,
            },
          });
          console.log(`✓ SplitText animation added to heading ${idx}`);
        } catch (e) {
          console.log("⚠ SplitText animation skipped for heading:", heading, e);
        }
      });

      // Parallax effect for images and content blocks
      const parallaxElements = document.querySelectorAll("img, .azzle-content-thumb");
      console.log(`Found ${parallaxElements.length} elements for parallax`);

      parallaxElements.forEach((element, idx) => {
        try {
          gsap.to(element as any, {
            y: (index: number) => index % 2 === 0 ? -30 : 30,
            scrollTrigger: {
              trigger: element,
              start: "top center",
              end: "bottom center",
              scrub: 1,
              markers: false,
            },
          });
          console.log(`✓ Parallax added to element ${idx}`);
        } catch (e) {
          console.log("⚠ Parallax skipped for element:", e);
        }
      });
    } catch (error) {
      console.error("❌ Error initializing scroll animations:", error);
    }
  };

  return null;
}
