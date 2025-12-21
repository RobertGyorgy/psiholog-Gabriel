"use client";
import Link from "next/link";
import Slider from "react-slick";

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
    <div className="azzle-hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="azzle-hero-content1">
              <h1 data-aos="fade-left" data-aos-delay="500" style={{ fontSize: "64px", paddingBottom: "20px" }}>Simplify your SaaS solution with AI</h1>
              <p data-aos="zoom-in" data-aos-delay="700" style={{ fontSize: "18px" }}>Our AI SAAS tool is a cloud-based software delivery model. It helps businesses forecast demand for products and services and optimize inventory management and supply chain operations.</p>
              <div className="azzle-hero-button mt-50">
                <Link className="azzle-default-btn" data-aos="fade-up" data-aos-delay="900" href="/contact-us" data-text="Get started for free">
                  <span className="button-wraper">Get started for free</span>
                </Link>
                <Link className="azzle-default-btn outline-btn" data-aos="fade-up" data-aos-delay="1000" href="/contact-us" data-text="Learn more">
                  <span className="button-wraper">Learn more</span>
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
        <div className="divider"></div>
        <div className="azzle-brand-slider-wraper">
          <div className="azzle-brand-slider-title" data-aos="fade-up" data-aos-delay=".9s">
            <p>Companies of all sizes trust us to find AI SaaS critical to their growth and innovation</p>
          </div>
          <Slider {...settings} className="azzle-brand-slider">
            <div className="azzle-logo-icon-item">
              <img src="assets/images/home1/icon1.svg" alt="Icon" />
            </div>
            <div className="azzle-logo-icon-item">
              <img src="assets/images/home1/icon2.svg" alt="Icon" />
            </div>
            <div className="azzle-logo-icon-item">
              <img src="assets/images/home1/icon3.svg" alt="Icon" />
            </div>
            <div className="azzle-logo-icon-item">
              <img src="assets/images/home1/icon4.svg" alt="Icon" />
            </div>
            <div className="azzle-logo-icon-item">
              <img src="assets/images/home1/icon5.svg" alt="Icon" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
