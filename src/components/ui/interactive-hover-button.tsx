import React from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, style, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`interactive-hover-button ${className || ''}`}
      style={style}
      {...props}
    >
      <span className="button-text">{text}</span>
      <div className="button-hover-content">
        <span>{text}</span>
        <ArrowRight style={{ width: '16px', height: '16px' }} />
      </div>
      <div className="button-background"></div>
      
      <style jsx>{`
        .interactive-hover-button {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 9999px;
          padding: 14px 40px;
          text-align: center;
          font-weight: 600;
          border: none;
          transition: all 0.3s ease;
          min-width: 160px;
        }
        
        .interactive-hover-button:hover.hover-gold-border {
          border: 2px solid #D4AF37;
        }
        
        .button-text {
          display: inline-block;
          transform: translateX(4px);
          transition: all 0.3s ease;
        }
        
        .interactive-hover-button:hover .button-text {
          transform: translateX(48px);
          opacity: 0;
        }
        
        .button-hover-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: white;
          opacity: 0;
          transform: translateX(48px);
          transition: all 0.3s ease;
        }
        
        .interactive-hover-button:hover .button-hover-content {
          transform: translateX(-4px);
          opacity: 1;
        }
        
        .button-background {
          position: absolute;
          left: 10%;
          top: 40%;
          width: 8px;
          height: 8px;
          border-radius: 8px;
          background-color: #24293c;
          transform: scale(1);
          transition: all 0.3s ease;
        }
        
        .interactive-hover-button:hover .button-background {
          left: 0%;
          top: 0%;
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          transform: scale(1.8);
        }
        
        /* Yellow variant for Learn More button */
        .interactive-hover-button.yellow-hover .button-background {
          background-color: #D4AF37;
        }
      `}</style>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

