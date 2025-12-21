import ModalVideo from "@/modal/modalVideo";


export default function VideoHomeOne() {
  return (
    <section className="azzle-video-section" style={{ marginTop: "100px", marginLeft: "auto", marginRight: "auto", maxWidth: "calc(100% - 170px)" }}>
      <div className="row">
        <div className="col-xl-6" style={{ paddingRight: "20px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "500px" }}>
          <div className="azzle-video-thumb" style={{ backgroundColor: "#e0e0e0", borderRadius: "8px", aspectRatio: "3 / 4", marginTop: "0", width: "100%", maxWidth: "350px" }}>
          </div>
        </div>
        <div className="col-xl-6 d-flex align-items-center">
          <div className="azzle-video-wrap" data-aos="fade-up" data-aos-delay="500">
            <div className="azzle-video-content">
              <h2>AI-powered that streamline tasks</h2>
              <p>As your business grows or your AI SaaS needs change, you can easily adjust your subscription level to match those needs. This flexibility ensures that AI remains an asset.</p>
              <div className="divider2"></div>
              <div className="azzle-counter-wrap">
                <div className="azzle-counter-item">
                  <h2 className="azzle-counter-data" aria-label="92%">92%</h2>
                  <p>Customer service inquiries</p>
                </div>
                <div className="azzle-counter-item">
                  <h2 className="azzle-counter-data" aria-label="75%">75%</h2>
                  <p>Using financial institutions</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
