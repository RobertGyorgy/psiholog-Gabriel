"use client";
import Link from "next/link";

export default function PricingHomeOne() { 
  return (
    <div id="portfolio" className="azzle-section-padding2 position-r" style={{ paddingTop: "200px" }}>
      <div className="azzle-pricing-shape" style={{ backgroundColor: "#f5f5f5", minHeight: "100px" }}>
      </div>
      <div className="container" style={{ paddingTop: "40px" }}>
        <div
          className="azzle-section-title center"
          data-aos="fade-up"
          data-aos-delay="500"
          style={{ marginBottom: "100px", marginTop: "0" }}
        >
          <h2>Latest Blog Posts</h2>
        </div>

        <div className="row">
          {/* Blog Post 1 */}
          <div className="col-xl-4 col-md-6">
            <div
              className="azzle-pricing-wrap"
              data-aos="fade-up"
              data-aos-delay="500"
              style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "400px" }}
            >
              <div className="azzle-pricing-header">
                <h3>Getting Started with AI</h3>
                <p>December 15, 2024</p>
              </div>
              <div className="azzle-pricing-body" style={{ flex: 1 }}>
                <p>
                  Learn the fundamentals of artificial intelligence and how it can transform your business operations with practical examples.
                </p>
              </div>
              <div className="azzle-pricing-footer mt-50">
                <Link
                  className="azzle-default-btn d-block outline-btn"
                  href="/blog/getting-started-ai"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="col-xl-4 col-md-6">
            <div
              className="azzle-pricing-wrap active"
              data-aos="fade-up"
              data-aos-delay="700"
              style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "400px" }}
            >
              <div className="azzle-pricing-header">
                <h3>Future of Machine Learning</h3>
                <p>December 12, 2024</p>
              </div>
              <div className="azzle-pricing-body" style={{ flex: 1 }}>
                <p>
                  Explore the cutting-edge trends in machine learning and discover how modern AI is reshaping industries and creating new opportunities.
                </p>
              </div>
              <div className="azzle-pricing-footer mt-50">
                <Link
                  className="azzle-default-btn d-block outline-btn btn2"
                  href="/blog/future-machine-learning"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="col-xl-4 col-md-6">
            <div
              className="azzle-pricing-wrap"
              data-aos="fade-up"
              data-aos-delay="900"
              style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "400px" }}
            >
              <div className="azzle-pricing-header">
                <h3>Best Practices for AI Implementation</h3>
                <p>December 10, 2024</p>
              </div>
              <div className="azzle-pricing-body" style={{ flex: 1 }}>
                <p>
                  Discover proven strategies and best practices for successfully implementing AI solutions in your organization without disrupting operations.
                </p>
              </div>
              <div className="azzle-pricing-footer mt-50">
                <Link
                  className="azzle-default-btn d-block outline-btn"
                  href="/blog/ai-implementation-practices"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
