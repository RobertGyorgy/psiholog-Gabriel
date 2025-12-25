

"use client";
import { useState } from "react";
import Link from "next/link"; 
 

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faq_data: FaqItem[] = [
  {
    id: 1,
    question: "Când este recomandat să merg la psiholog?",
    answer:
      "Este recomandat să mergi la psiholog atunci când te confrunți cu anxietate, atacuri de panică, depresie, stres, dificultăți relaționale sau când simți că o problemă emoțională îți afectează viața de zi cu zi. De asemenea, consilierea psihologică este utilă și pentru dezvoltare personală, claritate și prevenție.",
  },
  {
    id: 2,
    question: "Ce se întâmplă la prima ședință la psiholog?",
    answer:
      "Prima ședință la psiholog este una de evaluare și cunoaștere. Discutăm despre motivele pentru care ai solicitat consilierea, istoricul dificultăților și obiectivele tale. Este un prim pas pentru a înțelege dacă terapia este potrivită pentru tine și ce direcție vom urma.",
  },
  {
    id: 3,
    question: "Cât durează terapia psihologică?",
    answer:
      "Durata terapiei psihologice diferă în funcție de problemă, de obiectivele stabilite și de ritmul fiecărei persoane. Unele persoane observă rezultate după câteva ședințe, în timp ce altele au nevoie de un proces mai îndelungat. Terapia este personalizată și adaptată nevoilor fiecărui client.",
  },
  {
    id: 4,
    question: "Ședințele de terapie sunt confidențiale?",
    answer:
      "Da, ședințele de terapie psihologică sunt confidențiale. Psihologul are obligația profesională și legală de a respecta confidențialitatea informațiilor discutate în cabinet, cu excepțiile prevăzute de lege. Acest lucru asigură un spațiu sigur și de încredere pentru client.",
  },
  {
    id: 5,
    question: "Lucrează psihologul cu copii, adolescenți și cupluri?",
    answer:
      "Da, cabinetul oferă consiliere psihologică pentru adulți, copii și adolescenți, precum și consiliere de cuplu. Intervenția este adaptată vârstei, contextului și dificultăților specifice, cu accent pe soluții practice și sprijin emoțional.",
  },
];


interface StyleProps {
  style_2?: boolean;
}

export default function FaqHomeOne({ style_2 = false }: StyleProps) {
  const [activeId, setActiveId] = useState<number>(1); 

  const toggleFaq = (index: number) => {
      if (activeId === index) {
      setActiveId(-1);
    } else {
      setActiveId(index);
    }
  };

  return (
    <section id="faq" className={`${style_2 ? 'azzle-section-padding6' : 'azzle-section-padding pt-0'}`} style={{ borderRadius: '50px 50px 0 0' }}>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-6">
            <div
              className="azzle-default-content"
              data-aos="fade-up"
              data-aos-delay="500"
              style={{ marginTop: "200px" }}
            >
              <h2>Intrebari pe care le primesc frecvent</h2>
              <p>
                Voi raspunde cu placere oricaror intrebari aveti, aici imi dau silinta sa ofer raspuns catorva intrebari numa. Daca nu gasiti raspunsul cautat, nu ezitati sa ma contactati.
              </p>
              <div className="mt-50">
                <Link
                  className="azzle-default-btn"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  href="#faq"
                  data-text="Contact"
                >
                  <span className="button-wraper">Contact</span>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ items */}
          <div className="col-lg-5 offset-lg-1">
            <div
              className="azzle-faq-wrap1"
              data-aos="fade-up"
              data-aos-delay="700"
              style={{ marginTop: "200px" }}
            >
              {faq_data.map((faq) => (
                <div
                  key={faq.id}
                  className={`azzle-faq-item ${
                    activeId === faq.id ? "open" : ""
                  }`}
                >
                  <div
                    className="azzle-faq-header"
                    onClick={() => toggleFaq(faq.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{faq.question}</h3>
                    <div className="azzle-active-icon">
                      <img
                        src="assets/images/home1/+.svg"
                        alt="toggle"
                        style={{
                          transform:
                            activeId === faq.id ? "rotate(45deg)" : "rotate(0)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                  <div 
                    className="azzle-faq-body"
                    style={{
                      maxHeight: activeId === faq.id ? "500px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.5s ease-in-out, padding 0.5s ease-in-out, opacity 0.5s ease-in-out",
                      opacity: activeId === faq.id ? 1 : 0,
                      paddingTop: activeId === faq.id ? "12px" : "0px",
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
