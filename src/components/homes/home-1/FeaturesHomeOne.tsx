"use client";
import React, { useState } from "react";

interface FeatureDetails {
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactElement;
}

export default function FeaturesHomeOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetails | null>(null);

  const features: FeatureDetails[] = [
    {
      title: "Resource Flexibility",
      shortDesc: "AI SaaS solutions designed be scalable, allowing users to adjust their needs.",
      fullDesc: "Our AI SaaS solutions are built with scalability at their core, enabling businesses to seamlessly adjust resources based on their evolving needs. Whether you're a startup experiencing rapid growth or an enterprise managing fluctuating demands, our platform automatically scales to match your requirements. This flexibility ensures optimal performance while keeping costs under control, as you only pay for what you use. The infrastructure adapts in real-time, providing the computational power needed for complex AI tasks without requiring manual intervention or long-term commitments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M35 8.70058L23.3333 0V23.3333H0L8.70058 35L1.01993e-06 46.6665H23.3333V23.3333H36.6665V0L35 8.70058ZM61.2994 35L70 23.3334H36.6665V46.6665H23.3333V70L35 61.2994L46.6665 70V46.6665H70L61.2994 35Z" fill="#24293c" />
        </svg>
      )
    },
    {
      title: "Managed Services",
      shortDesc: "Providers typically hale the maintenance so patching of the infrastructure.",
      fullDesc: "Our managed services take the burden of infrastructure maintenance off your shoulders. We handle all aspects of system updates, security patching, performance monitoring, and optimization so you can focus on your core business objectives. Our team of experts works around the clock to ensure your AI services run smoothly, with proactive maintenance that prevents issues before they impact your operations. This includes automatic security updates, database optimization, backup management, and continuous monitoring for potential vulnerabilities. With our managed services, you benefit from enterprise-level infrastructure management without the need for a dedicated IT team.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 55.4417C16.155 50.3359 19.6652 53.8457 14.5591 70C23.9937 53.8457 46.0065 53.8457 55.441 70C50.3384 53.8457 53.8489 50.3359 70 55.4417C53.8489 46.0075 53.8489 23.9961 70 14.5621C53.8489 19.6641 50.3384 16.1541 55.441 0C46.0065 16.1541 23.9937 16.1541 14.5591 0C19.6652 16.1541 16.155 19.6641 0 14.5621C16.155 23.9961 16.155 46.0075 0 55.4417ZM35 47.95C42.1522 47.95 47.95 42.1522 47.95 35C47.95 27.8479 42.1522 22.05 35 22.05C27.8479 22.05 22.05 27.8479 22.05 35C22.05 42.1522 27.8479 47.95 35 47.95Z" fill="#24293c" />
        </svg>
      )
    },
    {
      title: "Web-Based Access",
      shortDesc: "Web browsers or making easy to use anywhere with an internet connection.",
      fullDesc: "Access your AI capabilities from anywhere with our web-based platform. No complex installations or specialized hardware required - simply open your web browser and start leveraging powerful AI tools instantly. Our platform is fully responsive and optimized for all devices, from desktops to tablets and smartphones, ensuring a consistent experience across all platforms. Work from the office, home, or on the go with the same seamless interface. The web-based architecture also means automatic updates and new features are deployed instantly to all users without any downloads or installation procedures. Your work is automatically synced across all your devices, providing true mobility and flexibility.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
          <g clipPath="url(#clip0_1_4318)">
            <path d="M54.6224 50.3776L39.2444 35L54.6224 19.6223L70 35L54.6224 50.3776ZM15.3777 50.3776L0 35L15.3777 19.6223L30.7555 35L15.3777 50.3776ZM35 70L19.6223 54.6224L35 39.2444L50.3776 54.6224L35 70ZM35 30.7555L19.6223 15.3777L35 0L50.3776 15.3777L35 30.7555Z" fill="#24293c" />
          </g>
          <defs>
            <clipPath id="clip0_1_4318">
              <rect width="70" height="70" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      title: "Friendly Interfaces",
      shortDesc: "user-friendly interfaces and dashboards, making it easier for non-technical users.",
      fullDesc: "Our intuitive interfaces are designed with all users in mind, from AI experts to those with no technical background. Navigate complex AI operations through clean, well-organized dashboards that present information clearly and actionably. Visual workflows, drag-and-drop functionality, and guided wizards make even advanced AI tasks accessible to everyone on your team. We've eliminated technical jargon where possible and provide contextual help throughout the platform. Real-time visualizations help you understand your data and AI model performance at a glance. Customizable dashboards let you focus on the metrics that matter most to your business, while powerful features remain just a click away when you need them.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.5299 51.7242C20.0703 50.7306 19.2695 49.9298 18.2757 49.4699C10.5407 45.8923 4.42168 40.733 1.15547 37.639C-0.385161 36.1796 -0.385154 33.8204 1.15547 32.3609C4.42168 29.2668 10.5407 24.1076 18.2757 20.53C19.2695 20.0703 20.0703 19.2695 20.5299 18.2757C24.1076 10.5407 29.2668 4.42168 32.3609 1.15547C33.8204 -0.385159 36.1796 -0.385155 37.639 1.15547C40.733 4.42168 45.8923 10.5407 49.4699 18.2757C49.9298 19.2695 50.7306 20.0703 51.7242 20.5299C59.4594 24.1076 65.5784 29.2668 68.8445 32.3609C70.3852 33.8204 70.3852 36.1796 68.8445 37.639C65.5784 40.733 59.4594 45.8923 51.7242 49.4699C50.7306 49.9298 49.9298 50.7306 49.4699 51.7242C45.8923 59.4594 40.733 65.5784 37.639 68.8445C36.1796 70.3852 33.8204 70.3852 32.3609 68.8445C29.2668 65.5784 24.1076 59.4594 20.5299 51.7242ZM35.0001 47.8655C42.1053 47.8655 47.8655 42.1053 47.8655 35.0001C47.8655 27.8946 42.1053 22.1345 35.0001 22.1345C27.8946 22.1345 22.1346 27.8946 22.1346 35.0001C22.1346 42.1053 27.8946 47.8655 35.0001 47.8655Z" fill="#24293c" />
        </svg>
      )
    }
  ];

  const openModal = (feature: FeatureDetails) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedFeature(null), 300);
  };
  return (
    <>
    <section id="features" className="azzle-section-padding">
      <div className="container">
        <div className="azzle-section-title max-width-780" data-aos="fade-left" data-aos-delay="500">
          <h2>Core features that make it valuable</h2>
        </div>
        <div className="azzle-iconbox-wrapper" data-aos="fade-up" data-aos-delay="700">
          <div className="azzle-iconbox-column">
            {features.map((feature, index) => (
              <div key={index} className={`azzle-iconbox-wrap ${index === 3 ? 'wrap2' : ''}`}>
                <div className="azzle-iconbox-icon">
                  {feature.icon}
                </div>
                <div className="azzle-iconbox-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.shortDesc}</p>
                </div>
                <div className="azzle-iconbox-button mt-50">
                  <button 
                    onClick={() => openModal(feature)} 
                    className="azzle-default-btn"
                    style={{ 
                      background: 'rgba(197, 166, 99, 1)', 
                      border: 'none', 
                      cursor: 'pointer', 
                      padding: '12px 28px',
                      borderRadius: '50px',
                      color: '#24293c',
                      fontSize: '16px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#24293c';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(197, 166, 99, 1)';
                      e.currentTarget.style.color = '#24293c';
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Modal */}
    {isModalOpen && selectedFeature && (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px',
          animation: 'fadeIn 0.3s ease-out'
        }}
        onClick={closeModal}
      >
        <div 
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            maxWidth: '700px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            animation: 'modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(197, 166, 99, 1)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#24293c',
              transition: 'transform 0.2s',
              zIndex: 1
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            ×
          </button>

          {/* Modal content */}
          <div style={{ padding: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
              <div style={{ marginRight: '20px', flexShrink: 0 }}>
                {selectedFeature.icon}
              </div>
              <h2 style={{ margin: 0, color: '#24293c', fontSize: '32px' }}>{selectedFeature.title}</h2>
            </div>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.8', 
              color: '#333',
              marginBottom: '0'
            }}>
              {selectedFeature.fullDesc}
            </p>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
