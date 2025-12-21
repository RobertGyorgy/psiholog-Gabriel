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
            // Calculate offset for fixed navbar
            const navbarHeight = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            
            // Smooth scroll to the element with offset
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
            
            // Force show all AOS elements in the target section
            setTimeout(() => {
              const aosElements = targetElement.querySelectorAll('[data-aos]');
              aosElements.forEach((el) => {
                el.classList.add('aos-animate');
              });
              
              // Refresh AOS
              if (typeof window !== "undefined" && (window as any).AOS) {
                (window as any).AOS.refresh();
              }
            }, 300);
            
            // Additional refresh after scroll completes
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
