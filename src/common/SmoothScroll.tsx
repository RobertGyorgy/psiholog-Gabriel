"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ScrollSmoother: any;
    smootherInstance: any;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Find the anchor element (could be the clicked element or a parent)
      let anchor: HTMLAnchorElement | null = null;
      let currentTarget = e.target as HTMLElement;
      
      // Traverse up the DOM to find the anchor element
      while (currentTarget && currentTarget !== document.body) {
        if (currentTarget.tagName === "A") {
          anchor = currentTarget as HTMLAnchorElement;
          break;
        }
        currentTarget = currentTarget.parentElement as HTMLElement;
      }
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      
      // Handle hash links (internal navigation)
      if (href && href.startsWith("#")) {
        e.preventDefault();
        e.stopPropagation();
        
        const targetId = href.substring(1);
        
        // Handle scroll to top (empty hash or "home")
        if (!targetId || targetId === "home" || targetId === "") {
          scrollToTop();
          return;
        }
        
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          scrollToElement(targetElement);
        } else {
          console.warn(`Element with id "${targetId}" not found`);
        }
      }
    };

    const scrollToElement = (element: HTMLElement) => {
      const navbarHeight = 100;
      let offset = navbarHeight;
      
      // Special handling for footer/contact section
      if (element.id === "contact" || element.classList.contains("azzle-footer-section")) {
        // Footer has negative margin-top (-50px) and padding-top (130px)
        // We want to scroll to show the footer content area, accounting for the negative margin
        // Find the first visible content inside the footer
        const footerContent = element.querySelector('.azzle-footer-one') || element.querySelector('.container');
        if (footerContent) {
          const contentRect = footerContent.getBoundingClientRect();
          const contentTop = contentRect.top + window.pageYOffset;
          // Scroll to show footer content with navbar offset
          offset = navbarHeight;
          const targetPosition = contentTop - offset;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          
          if (typeof window !== "undefined" && window.smootherInstance) {
            try {
              // Scroll to a calculated position that shows footer content
              window.smootherInstance.scrollTo(targetPosition, true);
              refreshAOS();
              return;
            } catch (e) {
              console.log("ScrollSmoother scroll failed, using fallback:", e);
            }
          }
          
          window.scrollTo({
            top: Math.min(Math.max(0, targetPosition), maxScroll),
            behavior: "smooth",
          });
          refreshAOS();
          return;
        }
        // Fallback if content not found
        offset = navbarHeight + 50;
      }
      
      // Special handling for FAQ section
      if (element.id === "faq") {
        // FAQ section has large marginTop (200px) on content
        // Scroll to show the title/heading area, not the very top of section
        offset = navbarHeight + 30;
      }
      
      // Check if ScrollSmoother instance is available and use it
      if (typeof window !== "undefined" && window.smootherInstance) {
        try {
          // Use ScrollSmoother's scrollTo method with calculated offset
          window.smootherInstance.scrollTo(`#${element.id}`, true, `-${offset}`);
          refreshAOS();
          return;
        } catch (e) {
          console.log("ScrollSmoother scroll failed, using fallback:", e);
        }
      }
      
      // Fallback to native smooth scroll
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
      
      refreshAOS();
    };

    const scrollToTop = () => {
      // Check if ScrollSmoother instance is available
      if (typeof window !== "undefined" && window.smootherInstance) {
        try {
          window.smootherInstance.scrollTo(0, true);
          refreshAOS();
          return;
        } catch (e) {
          console.log("ScrollSmoother scroll failed, using fallback:", e);
        }
      }
      
      // Fallback to native smooth scroll
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      
      refreshAOS();
    };

    const refreshAOS = () => {
      setTimeout(() => {
        if (typeof window !== "undefined" && (window as any).AOS) {
          (window as any).AOS.refresh();
        }
      }, 500);
    };

    // Use capture phase to catch events before they bubble
    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
    };
  }, []);

  return null;
}
