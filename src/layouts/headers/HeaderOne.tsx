"use client";
import Link from "next/link";
import Navmenu from "./Navmenu";
import UseSticky from "@/hooks/UseSticky";

export default function HeaderOne() {
  const { sticky, hidden } = UseSticky();
  return (
    <header className={`site-header azzle-header-section ${sticky ? "sticky-menu" : ""} ${hidden ? "hide-header" : ""}`} id="sticky-menu">
      <div className="container" style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "center" }}>
        {/* Island 1: Logo */}
        <div style={{ display: "flex", alignItems: "center", padding: "12px 20px", borderRadius: "50px", background: "#FDBE34", boxShadow: "0 8px 32px 0 rgba(253, 190, 52, 0.2)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
          <div className="header-logo">
            <Link href="/">
              <img src="/assets/images/logo-1-dark.svg" alt="logo" />   
            </Link>
          </div>
        </div>

        {/* Island 2: Navigation - Hidden on Mobile */}
        <div style={{ display: "flex", justifyContent: "center" }} className="d-none d-lg-flex">
          <div className="azzle-main-menu-item">
            <nav className="main-menu menu-style1 menu-center">
              <Navmenu />                   
            </nav>
          </div>
        </div>

        {/* Island 3: Contact */}
        <Link href="#contact" className="contact-cta-btn azzle-default-btn" style={{ padding: "14px 28px", borderRadius: "50px", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#FDBE34", border: "none", boxShadow: "0 8px 32px 0 rgba(253, 190, 52, 0.2)", color: "rgb(16, 49, 107)", fontWeight: 600 }}>Contact</Link>
      </div>
    </header>
  )
}
