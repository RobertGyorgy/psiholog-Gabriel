"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Handle anchor link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      
      // Check if it's an anchor link
      if (target.tagName === "A" && target.hash) {
        const href = target.getAttribute("href");
        
        if (href && href.startsWith("#")) {
          e.preventDefault();
          
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // Smooth scroll to the element
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            
            // Refresh AOS animations after scrolling
            setTimeout(() => {
              if (typeof window !== "undefined" && (window as any).AOS) {
                (window as any).AOS.refresh();
              }
            }, 800);
          }
        }
      }
    };

    // Add event listener to document
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
