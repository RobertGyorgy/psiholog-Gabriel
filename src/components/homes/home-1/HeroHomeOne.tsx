"use client";
import Link from "next/link";
import Slider from "react-slick";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1
    }
  }]
}


export default function HeroHomeOne() {
  return (
    <div id="hero" className="azzle-hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="azzle-hero-content1">
              <h1 data-aos="fade-left" data-aos-delay="500" style={{ fontSize: "36px", paddingBottom: "20px" }}>Cabinet Psihologic </h1>
              <h1 data-aos="fade-left" data-aos-delay="500" style={{ fontSize: "36px", paddingBottom: "20px" }}> Gabriel Antohi</h1>
              <p data-aos="zoom-in" data-aos-delay="700" style={{ fontSize: "16px" }}>Sprijin psihologic pentru anxietate, relații, performanță și momente de blocaj
  <br />Cabinet privat.Ședințe individuale. Confidențialitate
</p>
              <div className="azzle-hero-button mt-50" style={{ display: "flex", gap: "16px", flexWrap: "nowrap" }}>
                <Link href="#about" style={{ textDecoration: 'none' }}>
                  <InteractiveHoverButton
                    text="Despre mine"
                    className="w-36 md:w-44 !bg-[rgba(197,166,99,1)] !text-[rgba(36,41,60)] !border-[rgba(197,166,99,1)] !border-2"
                    style={{ minHeight: '48px', whiteSpace: 'nowrap', fontSize: '14px' }}
                  />
                </Link>
                <Link href="#testimonials" style={{ textDecoration: 'none' }}>
                  <InteractiveHoverButton
                    text="Testimoniale"
                    className="w-36 md:w-44 yellow-hover !bg-white !text-[rgba(197,166,99,1)] !border-[rgba(197,166,99,1)] !border-2"
                    style={{ minHeight: '48px', whiteSpace: 'nowrap', fontSize: '14px' }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <div className="azzle-hero-dashboard" data-aos="fade-up" data-aos-delay=".7s" style={{ maxWidth: "70%", marginLeft: "auto" }}>
              <div style={{ aspectRatio: "5 / 6", overflow: "hidden", borderRadius: "8px", backgroundColor: "#e0e0e0" }}>
              </div>
            </div>
          </div>
        </div>      
      </div>
    </div>
  )
}
