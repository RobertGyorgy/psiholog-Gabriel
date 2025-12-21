 

import { ReactNode } from "react"; 
import AnimationProvider from "@/common/AnimationProvider";
import ScrollToTop from "@/common/ScrollToTop";
import ScrollAnimations from "@/common/ScrollAnimations";

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
    </>
  );
};

export default Wrapper;
 