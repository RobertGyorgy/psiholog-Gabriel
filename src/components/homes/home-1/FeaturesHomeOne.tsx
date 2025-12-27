"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";

interface FeatureDetails {
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactElement;
}

export default function FeaturesHomeOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetails | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const features: FeatureDetails[] = [
    {
      title: "Terapie individuala",
      shortDesc: "Spatiu sigur pentru a explora ce te preocupa, in ritmul tau.",
      fullDesc: "<strong>Anxietate, atacuri de panică, fobii</strong>\nTeama devine filtrul prin care privești lumea, limitându-ți alegerile și transformând viața într-un exercițiu constant de evitare.\n\n<strong>Depresie</strong>\nTotul pare greu, gol și lipsit de sens – te simți deconectat de tine însuți și incapabil să mai simți bucurie.\n\n<strong>Stimă de sine scăzută</strong>\nTe judeci mai dur decât ai face-o cu oricine altcineva și crezi că nu ești suficient de bun, indiferent de ceea ce realizezi.\n\n<strong>Tulburări de somn și alimentație</strong>\nCorpul tău nu mai găsește echilibrul – fie că este vorba de nopți albe, coșmaruri sau o relație haotică cu mâncarea.\n\n<strong>Dependențe</strong>\nCeea ce părea o soluție temporară devine acum centrul vieții tale, controlându-ți alegerile și relațiile.\n\n<strong>Traume</strong>\nTrecutul refuză să rămână în trecut și continuă să îți invadeze prezentul prin amintiri, tensiune constantă sau evitare.\n\n<strong>Doliu</strong>\nLumea s-a oprit pentru tine, dar continuă pentru ceilalți – iar tu te simți pierdut într-o durere pe care nimeni nu o mai înțelege pe deplin.\n\n<strong>Stres profesional</strong>\nMunca îți consumă energia, sănătatea și bucuria, transformând ceea ce ar trebui să fie o parte a vieții într-o povară care acoperă totul.\n\n<strong>Dificultăți de comunicare sau luare a deciziilor</strong>\nTe simți blocat între nevoia de a te exprima și teama de conflict, sau între dorința de a avansa și frica de a greși.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true" focusable="false">
          <circle cx="35" cy="20" r="10" stroke="#24293c" strokeWidth="3" />
          <path d="M18 60c1-10 8-18 17-18s16 8 17 18" stroke="#24293c" strokeWidth="3" strokeLinecap="round" />
          <path d="M27 33c-6 2-12 7-14 15" stroke="#24293c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
{
  title: "Terapie pentru relații de cuplu",
  shortDesc: "Regasiti conexiunea si comunicarea cand distanta a inlocuit apropierea",
  fullDesc: "Când distanța dintre voi pare mai mare ca niciodată sau când conversațiile se transformă în conflicte, terapia de cuplu vă oferă șansa de a reconstrui ceea ce s-a erodat în timp.\nFiecare relație are povestea ei unică, cu momente de apropiere și perioade de criză. Aici veți găsi un spațiu sigur în care ambele perspective contează și în care puteți explora sincer ce v-a îndepărtat. Vom identifica tiparele care alimentează conflictele, nevoile care rămân neexprimate și modalitățile prin care puteți comunica autentic.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true" focusable="false">
          <path d="M25 24a8 8 0 1 1 16 0c0 7-8 11-8 11s-8-4-8-11Z" stroke="#24293c" strokeWidth="3" fill="none" />
          <path d="M37 26c0-5 4-9 9-9s9 4 9 9c0 8-9 12-9 12" stroke="#24293c" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M20 46c3-4 8-6 15-6s12 2 15 6" stroke="#24293c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Terapie de Grup",
      shortDesc: "Vindecare prin descoperirea ca nu ești singur",
      fullDesc: "Terapia de grup îți oferă ceva ce terapia individuală nu-ți poate oferi – experiența că nu ești singur în ceea ce trăiești. Într-un mediu sigur și confidențial, vei descoperi că alții se confruntă cu provocări similare, iar această recunoaștere reciprocă devine în sine vindecătoare. Vei învăța din experiențele celorlalți, vei primi perspective diferite și vei construi abilități de comunicare și empatie într-un context real, de susținere reciprocă.\nGrupul funcționează ca un microcosmos al lumii reale, unde poți exersa noi comportamente, poți primi feedback onest și poți experimenta sentimentul de apartenență. Este un spațiu în care vulnerabilitatea este respectată, progresul celorlalți te inspiră, iar fiecare persoană contribuie la vindecarea tuturor. Terapia de grup este eficientă pentru anxietate, depresie, dificultăți relaționale, dezvoltare personală și multe alte provocări – iar puterea colectivului amplifică procesul terapeutic individual.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true" focusable="false">
          <circle cx="22" cy="24" r="7" stroke="#24293c" strokeWidth="3" />
          <circle cx="48" cy="24" r="7" stroke="#24293c" strokeWidth="3" />
          <circle cx="35" cy="42" r="8" stroke="#24293c" strokeWidth="3" />
          <path d="M9 46c2-7 8-11 13-11" stroke="#24293c" strokeWidth="3" strokeLinecap="round" />
          <path d="M61 46c-2-7-8-11-13-11" stroke="#24293c" strokeWidth="3" strokeLinecap="round" />
          <path d="M18 54c3-5 9-8 17-8s14 3 17 8" stroke="#24293c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Evolutie personala și conștientizare de sine",
      shortDesc: "Cunoaștere profundă de sine și direcție autentică",
      fullDesc: "Acest tip de terapie te invită într-o călătorie profundă de cartografiere a sinelui, unde explorezi cine ești cu adevărat, dincolo de rolurile și așteptările celorlalți. Împreună, vom descoperi resursele tale interioare, vom clarifica valorile care te ghidează și vom construi o viziune autentică asupra vieții tale.\Prin conștientizare și reflecție, vei învăța să îți înțelegi mai bine tiparele de gândire și comportament, să iei decizii aliniate cu adevărata ta natură și să devii arhitectul propriei tale evoluții.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true" focusable="false">
          <path d="M35 8c7 0 12 5 12 12 0 10-12 18-12 18S23 30 23 20c0-7 5-12 12-12Z" stroke="#24293c" strokeWidth="3" fill="none" />
          <circle cx="35" cy="20" r="4" stroke="#24293c" strokeWidth="3" fill="none" />
          <path d="M20 48c4-5 9-8 15-8s11 3 15 8" stroke="#24293c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Coaching si Performance coaching",
      shortDesc: "Structura pentru a transforma intențiile în rezultate",
      fullDesc: "Când știi că poți mai mult, dar ceva te ține pe loc. Când visurile tale rămân doar planuri neîmplinite sau când simți că nu evoluezi în direcția dorită – coachingul îți oferă structura, claritatea și susținerea de care ai nevoie pentru a trece la acțiune.\nSpre deosebire de terapie, coachingul nu se concentrează pe vindecarea trecutului, ci pe construirea viitorului pe care ți-l dorești. Împreună, vom clarifica obiectivele tale, vom identifica obstacolele care te blochează și vom crea un plan concret de acțiune. Vei învăța să îți gestionezi timpul și energia eficient, să depășești procrastinarea și să transformi intențiile în rezultate măsurabile.\nPerformance coaching-ul se adresează celor care doresc să exceleze – în carieră, în sport, în proiecte personale sau în orice domeniu care contează pentru tine. Vei descoperi cum să îți maximizezi resursele, să îți construiești disciplina și să devii cea mai productivă și împlinită versiune a ta. Succesul nu este un accident – este rezultatul unor alegeri conștiente și constante.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true" focusable="false">
          <path d="M10 48l13-16 10 12 12-18 15 20" stroke="#24293c" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="16" cy="22" r="4" stroke="#24293c" strokeWidth="3" fill="none" />
          <path d="M8 58h54" stroke="#24293c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Terapie online",
      shortDesc: "Aceeasi calitate terapeutica, din confortul spatiului tau.",
      fullDesc: "Terapia online îți oferă aceeași calitate și profunzime ca terapia tradițională, dar cu flexibilitatea de a accesa suportul psihologic din confortul si siguranta spațiului tău, oriunde te-ai afla. Mulți clienți descoperă ca terapia online le permite sa fie mai relaxați și mai deschisi, eliminand anxietatea deplasării. Este o soluție practică și eficientă pentru cei care doresc continuitate în terapie, indiferent de locație sau circumstanțe.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true" focusable="false">
          <rect x="10" y="15" width="50" height="32" rx="4" stroke="#24293c" strokeWidth="3" />
          <path d="M28 51h14" stroke="#24293c" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 57h26" stroke="#24293c" strokeWidth="3" strokeLinecap="round" />
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
          <h2>Tipuri de terapie</h2>
        </div>
        <div className="azzle-iconbox-wrapper" data-aos="fade-up" data-aos-delay="700">
          <div className="azzle-iconbox-column">
            {features.map((feature, index) => (
              <div key={index} className={`azzle-iconbox-wrap`}>
                <div className="azzle-iconbox-icon feature-icon">
                  {feature.icon}
                </div>
                <div className="azzle-iconbox-content">
                  <h3 style={{ fontWeight: 'bold', fontSize: '1.1em' }}>{feature.title}</h3>
                  <p>{feature.shortDesc}</p>
                </div>
                <div className="azzle-iconbox-button mt-50">
                  <button 
                    type="button"
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
                    Mai mult
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Modal */}
    {mounted && isModalOpen && selectedFeature && createPortal(
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
              marginBottom: '0',
              whiteSpace: 'pre-wrap'
            }}
            dangerouslySetInnerHTML={{ __html: selectedFeature.fullDesc }}
            />
          </div>
        </div>
      </div>
      ),
      document.body
    )}
    <style jsx>{`
      .feature-icon svg,
      .feature-icon svg * {
        fill: none !important;
        stroke: #24293c !important;
        transition: stroke 0.2s ease;
      }
      .azzle-iconbox-wrap:hover .feature-icon svg,
      .azzle-iconbox-wrap:hover .feature-icon svg * {
        fill: none !important;
        stroke: rgba(197, 166, 99, 1) !important;
      }
    `}</style>
    </>
  )
}
