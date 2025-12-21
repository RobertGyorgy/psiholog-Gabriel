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
            // Calculate offset for fixed navbar (approximately 100px)
            const navbarHeight = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            
            // Smooth scroll to the element with offset
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
            
            // Force AOS to recalculate and refresh animations multiple times
            const refreshAOS = () => {
              if (typeof window !== "undefined" && (window as any).AOS) {
                (window as any).AOS.refreshHard();
              }
            };
            
            // Refresh immediately and after scroll completes
            setTimeout(refreshAOS, 100);
            setTimeout(refreshAOS, 500);
            setTimeout(refreshAOS, 1000);
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
