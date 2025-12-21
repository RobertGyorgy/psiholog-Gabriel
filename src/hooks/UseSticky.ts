 

'use client'
import { useEffect, useState } from "react";

interface StickyState {
  sticky: boolean;  
  hidden: boolean; 
}

const UseSticky = (): StickyState => {
  const [sticky, setSticky] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const stickyHeader = (): void => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 200) {
      // At the top area → reset sticky
      setSticky(false);
    } else if (currentScroll < lastScroll) {
      // Scrolling up → show sticky
      setSticky(true);
    }

    // Never hide the header - keep it always visible
    setHidden(false);
    setLastScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
    return () => window.removeEventListener("scroll", stickyHeader);
  }, [lastScroll]);

  return { sticky, hidden };
};

export default UseSticky;
