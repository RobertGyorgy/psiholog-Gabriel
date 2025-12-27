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
                    Gabriel Antohi
                  </span>
                </Link>
                <p>
                  Sprijin psihologic pentru anxietate, relații, performanță și momente de blocaj. Cabinet privat. Ședințe individuale. Confidențialitate.
                </p>
                <a href="tel:+40728561826" style={{ display: 'block', marginBottom: '20px', color: '#24293c', textDecoration: 'none' }}>
                  <span style={{ fontWeight: 600 }}>Număr de telefon:</span> +40 728 561 826
                </a>
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
                    transition: 'all 0.3s ease',
                    marginTop: '10px'
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
                  Contactează-mă pe WhatsApp
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="azzle-footer-menu">
                <h4>Linkuri rapide</h4>
                <ul>
                  <li><Link href="#features">Servicii</Link></li>
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
            © Copyright {new Date().getFullYear()}, Gabriel Antohi. Made by {" "}
            <a href="https://www.achieve.ro/" target="_blank" rel="noreferrer">
              achieve.ro
            </a>
          </p>
        </div>
         
      </div>
    </footer>
  );
}
