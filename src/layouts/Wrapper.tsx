 

import { ReactNode } from "react"; 
import AnimationProvider from "@/common/AnimationProvider";
import ScrollToTop from "@/common/ScrollToTop";
import ScrollAnimations from "@/common/ScrollAnimations";
import SmoothScroll from "@/common/SmoothScroll";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  
 

  return (
    <>
      {children} 
      <AnimationProvider />
      <ScrollToTop />
      <ScrollAnimations />
      <SmoothScroll />
    </>
  );
};

export default Wrapper;
 