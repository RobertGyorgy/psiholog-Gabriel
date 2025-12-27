

"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function AboutHomeOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div id="about" className="azzle-section-padding pt-0 overflow-hidden blue-section-top" style={{ paddingTop: "100px !important", paddingBottom: "40px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="azzle-content-thumb" data-aos="fade-right" data-aos-delay="500" style={{ backgroundColor: "#e0e0e0", borderRadius: "8px", marginTop: "120px", width: "100%", height: "500px" }}>
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="azzle-default-content pl-110" data-aos="fade-left" data-aos-delay="700" style={{ marginTop: "60px" }}>
                <h2>Despre mine</h2>
                <p>Ofer un spațiu sigur, clar și onest, în care nu etichetez și nu judec, dar ajut oamenii să înțeleagă ce li se întâmplă și să găsească direcții care funcționează în viața lor reală. Nu promit soluții rapide, ci un proces profund, bine fundamentat și orientat spre stabilitate și sens.</p>
                <div style={{ marginTop: "30px" }}>
                  <button 
                    type="button"
                    onClick={openModal} 
                    style={{ 
                      background: 'rgba(197, 166, 99, 1)', 
                      border: 'none', 
                      cursor: 'pointer', 
                      padding: '12px 28px',
                      borderRadius: '50px',
                      color: '#24293c',
                      fontSize: '16px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      pointerEvents: 'auto'
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
                    Citește mai mult
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="azzle-section-padding pt-0 overflow-hidden blue-section-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-lg-2">
              <div className="azzle-content-thumb" data-aos="zoom-in" data-aos-delay="500" style={{ backgroundColor: "#e0e0e0", borderRadius: "8px", marginTop: "120px", width: "100%", height: "500px" }}>
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="azzle-default-content pr-110" data-aos="fade-up" data-aos-delay="700" style={{ marginTop: "60px" }}>
                <h2>Unde?</h2>
                <p className="mb-0">Strada Castelului 52, Brasov, Romania.</p>
                <div className="azzle-listicon-wrap mt-50">
                  <ul>
                    <li>
                     
                      <h3>Sprijin psihologic adaptat nevoilor tale</h3>
                    </li>
                    <li>                     
                      <h3>Totul incepe cu o discutie</h3>
                    </li>
                    <li>
                      <a 
                        href="https://wa.me/40728561826" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          display: 'inline-block',
                          background: 'rgba(197, 166, 99, 1)', 
                          border: 'none', 
                          cursor: 'pointer', 
                          padding: '12px 28px',
                          borderRadius: '50px',
                          color: '#24293c',
                          fontSize: '16px',
                          fontWeight: '600',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#25D366';
                          e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(197, 166, 99, 1)';
                          e.currentTarget.style.color = '#24293c';
                        }}
                      >
                        Hai sa vorbim.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {mounted && isModalOpen && createPortal(
        (
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
            animation: 'fadeIn 0.3s ease-out',
            backdropFilter: 'blur(4px)'
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
              type="button"
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
              <h2 style={{ margin: '0 0 30px 0', color: '#24293c', fontSize: '32px' }}>Despre mine</h2>
              <div style={{ 
                fontSize: '16px', 
                lineHeight: '1.8', 
                color: '#333'
              }}>
                <p style={{ marginBottom: '20px' }}>
                  Sunt psiholog, cu un parcurs profesional vast, format în contexte diverse și adesea provocatoare. Încă din copilărie eram prietenul pe care toți și-l doreau – pentru că îi tratam pe ceilalți cu dragoste și empatie. Această înclinație naturală m-a însoțit întotdeauna: în timpul studiilor universitare în SUA, lucram pe șantier și am ajuns să cunosc toți membrii familiilor colegilor mei și problemele cu care se confruntau. Am fost mereu vindecătorul informal al celor în suferință, ascultătorul care înțelegea fără să judece.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Sunt familist, tată a trei copii, și cred că viața personală este una dintre cele mai serioase școli de înțelegere a relațiilor, limitelor și responsabilității.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Am călătorit mult – din zone ecuatoriale până la regiuni glaciare – iar aceste călătorii mi-au lărgit perspectiva asupra modului în care oamenii gândesc, simt și se adaptează la provocări. Am cunoscut personal foamea, suferința, eșecul și pierderea cuiva drag. Am trecut prin crize financiare, doliu, dar și prosperitate și succes. Aceste treceri prin întuneric și lumină nu doar că m-au format ca om, dar îmi permit astăzi să înțeleg profund ceea ce traversează cei care vin la terapie – nu din teorie, ci din viață trăită.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Întotdeauna m-au atras situațiile complexe, în care este nevoie de claritate, structură și soluții bine gândite, nu de răspunsuri superficiale. De ani de zile lucrez cu veterani de armată (rangers, marines) și am fost implicat timp de un deceniu în coordonarea unei grădinițe și a unui program afterschool. Toate acestea se reflectă astăzi în felul în care lucrez: pragmatic, profund, respectuos și orientat spre soluții reale.
                </p>
                <p style={{ marginBottom: '0' }}>
                  Hobby-ul meu actual este restaurarea mașinilor – o activitate care reflectă perfect modul în care văd terapia. Pentru că, la fel ca în restaurarea unei mașini, munca mea nu este despre a ascunde imperfecțiunile sau a oferi soluții rapide de suprafață, ci despre a înțelege ce s-a deteriorat, a repara cu grijă fiecare componentă și a reda funcționalitatea și frumusețea originală. A fost pusă în mine dorința restaurării – a lucrurilor, dar mai ales a oamenilor.
                </p>
              </div>
            </div>
          </div>
        </div>
        ),
        document.body
      )}
    </>
  )
}
