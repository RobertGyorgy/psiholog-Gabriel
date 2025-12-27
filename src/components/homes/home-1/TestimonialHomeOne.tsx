

export default function TestimonialHomeOne() {
  const renderStars = (count = 5) => {
    return "★".repeat(count);
  };

  return (
    <div id="testimonials" className="azzle-section-padding3 bg-heading">
      <div className="container">
        <div className="azzle-section-title title2 center" data-aos="fade-up" data-aos-delay="500">
          <h2>Ce spun pacienții mei</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-iconbox-wrap2" data-aos="fade-up" data-aos-delay="200" style={{ backgroundColor: "rgba(197, 166, 99, 0.1)", padding: "30px", borderRadius: "12px", border: "1px solid rgba(197, 166, 99, 0.2)" }}>
              <div className="azzle-iconbox-rating" style={{ color: "var(--accent-color)", fontSize: "18px", marginBottom: "15px", letterSpacing: "2px" }}>
                {renderStars(5)}
              </div>
              <div className="azzle-iconbox-content2">
                <p>“Mulțumesc din suflet pentru tot ce ai făcut pentru mine în aceste luni. Când am venit prima dată, eram un nod de anxietate și confuzie. Nu știam de unde să încep să deșir ce se întâmplă în mine. Tu ai avut răbdarea să asculți, să pui întrebările potrivite și să mă ajuți să văd lucrurile altfel. Acum dorm mai bine, mă înțeleg mai bine cu soțul meu și, cel mai important, am început să fiu mai blândă cu mine însămi. Cabinetul tău a devenit un loc sigur unde pot să fiu eu, fără mască. Îți mulțumesc că exiști și că faci ceea ce faci cu atâta dedicare.“</p>
              </div>
              <div className="azzle-iconbox-author-wrap" style={{ marginTop: "20px" }}>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-iconbox-wrap2" data-aos="fade-up" data-aos-delay="400" style={{ backgroundColor: "rgba(197, 166, 99, 0.1)", padding: "30px", borderRadius: "12px", border: "1px solid rgba(197, 166, 99, 0.2)" }}>
              <div className="azzle-iconbox-rating" style={{ color: "var(--accent-color)", fontSize: "18px", marginBottom: "15px", letterSpacing: "2px" }}>
                {renderStars(5)}
              </div>
              <div className="azzle-iconbox-content2">
                <p>“Morning, Gabriel. I know I’ve said this before, but I feel like I need to say it again – I appreciate you and your work. Just by being who you are, you help more than you realize. Right now, you’re the only person besides Crystal who can truly understand me and relate to what I’m going through. I’m learning from you. Please know that everything you’ve shared with me gets registered and deeply analyzed in my mind. Like today, for example – I was revisiting what you said about why I keep moving around, avoiding putting down roots, never fully relaxing…”</p>
              </div>
              <div className="azzle-iconbox-author-wrap" style={{ marginTop: "20px" }}>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-iconbox-wrap2" data-aos="fade-up" data-aos-delay="600" style={{ backgroundColor: "rgba(197, 166, 99, 0.1)", padding: "30px", borderRadius: "12px", border: "1px solid rgba(197, 166, 99, 0.2)" }}>
              <div className="azzle-iconbox-rating" style={{ color: "var(--accent-color)", fontSize: "18px", marginBottom: "15px", letterSpacing: "2px" }}>
                {renderStars(5)}
              </div>
              <div className="azzle-iconbox-content2">
                <p> “I can honestly say that some of my traumatic experiences have been archived now – especially the ones from childhood. I can remember them if I choose to, but they don’t have that grip on me anymore. The Afghanistan memories, though… they’re still right there. The anxiety is still debilitating no matter how hard I try to push through it. I’m reaching out because I’m thinking maybe it’s time to go all in and really open all those wounds. Thanks for the input. It means more than you know.”</p>
              </div>
              <div className="azzle-iconbox-author-wrap" style={{ marginTop: "20px" }}>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-iconbox-wrap2" data-aos="fade-up" data-aos-delay="200" style={{ backgroundColor: "rgba(197, 166, 99, 0.1)", padding: "30px", borderRadius: "12px", border: "1px solid rgba(197, 166, 99, 0.2)" }}>
              <div className="azzle-iconbox-rating" style={{ color: "var(--accent-color)", fontSize: "18px", marginBottom: "15px", letterSpacing: "2px" }}>
                {renderStars(5)}
              </div>
              <div className="azzle-iconbox-content2">
                <p> “I’ve been to a few therapists, psychologists, and psychiatrists at the VA over the years. None of them spoke with the kind of empathy you do. None of them made me feel like they truly understood what a veteran goes through every single day. But you do. Somehow, you just get it.”
</p>
              </div>
              <div className="azzle-iconbox-author-wrap" style={{ marginTop: "20px" }}>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-iconbox-wrap2" data-aos="fade-up" data-aos-delay="400" style={{ backgroundColor: "rgba(197, 166, 99, 0.1)", padding: "30px", borderRadius: "12px", border: "1px solid rgba(197, 166, 99, 0.2)" }}>
              <div className="azzle-iconbox-rating" style={{ color: "var(--accent-color)", fontSize: "18px", marginBottom: "15px", letterSpacing: "2px" }}>
                {renderStars(5)}
              </div>
              <div className="azzle-iconbox-content2">
                <p> Colaborarea terapeutică cu dumneavoastră a reprezentat un punct de cotitură în parcursul meu de autocunoaștere. Abordarea dumneavoastră integrativă, care îmbină rigoarea metodologică cu o empatie autentică, m-a ajutat să înțeleg mecanismele anxietății mele și să dezvolt instrumente funcționale de reglare emoțională. Ceea ce apreciez în mod deosebit este capacitatea dumneavoastră de a crea un spațiu terapeutic în care vulnerabilitatea devine putere, iar procesul de vindecare capătă sens și direcție. Vă sunt recunoscător pentru profesionalismul și umanitatea cu care m-ați ghidat.”</p>
              </div>
              <div className="azzle-iconbox-author-wrap" style={{ marginTop: "20px" }}>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-iconbox-wrap2" data-aos="fade-up" data-aos-delay="600" style={{ backgroundColor: "rgba(197, 166, 99, 0.1)", padding: "30px", borderRadius: "12px", border: "1px solid rgba(197, 166, 99, 0.2)" }}>
              <div className="azzle-iconbox-rating" style={{ color: "var(--accent-color)", fontSize: "18px", marginBottom: "15px", letterSpacing: "2px" }}>
                {renderStars(5)}
              </div>
              <div className="azzle-iconbox-content2">
                <p>“Wow. If the VA would employ experts like you… I actually understand what you’re saying. Sometimes I wonder if there’s something buried so deep that I refuse to remember it. It feels like that’s what’s happening, you know?”</p>
              </div>
              <div className="azzle-iconbox-author-wrap" style={{ marginTop: "20px" }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
