"use client";
import Link from "next/link";

export default function FooterOne() {
  return (
    <footer id="contact" className="azzle-footer-section">
      {/* Footer content */}
      <div className="container">
        <div className="azzle-footer-one">
          <div className="row align-items-start justify-content-between">
            <div className="col-lg-6 col-md-12">
              <div className="azzle-footer-textarea">
                <Link href="/">
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "36px",
                      fontWeight: 700,
                      color: "#24293c",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Gabriel Anthoni
                  </span>
                </Link>
                <p>
                  Sprijin psihologic pentru anxietate, relații, performanță și momente de blocaj. Cabinet privat. Ședințe individuale. Confidențialitate.
                </p>
                <a href="tel:+40728561826">
                  <span>Număr de telefon:</span> +40 728 561 826
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="azzle-footer-menu">
                <h4>Linkuri rapide</h4>
                <ul>
                  <li><Link href="#services">Servicii</Link></li>
                  <li><Link href="#faq">Întrebări frecvente</Link></li>
                  <li><Link href="#contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="azzle-footer-bottom-text">
          <p>
            © Copyright {new Date().getFullYear()}, Gabriel Anthoni. Made by {" "}
            <a href="https://www.achieve.ro/" target="_blank" rel="noreferrer">
              achieve.ro
            </a>
          </p>
        </div>
         
      </div>
    </footer>
  );
}
