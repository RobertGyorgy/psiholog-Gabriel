"use client";
import Link from "next/link";
import Navmenu from "./Navmenu";
import UseSticky from "@/hooks/UseSticky";
import { useState } from "react";
import MobileMenu from "./MobileMenu"; 
 

export default function HeaderOne() {
  const { sticky, hidden } = UseSticky();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={`site-header azzle-header-section ${sticky ? "sticky-menu" : ""} ${hidden ? "hide-header" : ""}`} id="sticky-menu">
        <div className="container" style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "space-between" }}>
          {/* Island 1: Logo */}
          <div style={{ display: "flex", alignItems: "center", padding: "12px 20px", borderRadius: "50px", background: "#FDBE34", boxShadow: "0 8px 32px 0 rgba(253, 190, 52, 0.2)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
            <div className="header-logo">
              <Link href="/">
                <img src="/assets/images/logo-1-dark.svg" alt="logo" />   
              </Link>
            </div>
          </div>

          {/* Island 2: Navigation */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div className="azzle-main-menu-item">
              <nav className="main-menu menu-style1 d-none d-lg-block menu-center">
                <Navmenu />                   
              </nav>
            </div>
          </div>

          {/* Island 3: Contact */}
          <Link href="/contact-us" className="contact-cta-btn azzle-default-btn" style={{ padding: "14px 28px", borderRadius: "50px", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#FDBE34", border: "none", boxShadow: "0 8px 32px 0 rgba(253, 190, 52, 0.2)", color: "rgb(16, 49, 107)", fontWeight: 600 }}>Contact</Link>
          
          <div className="azzle-header-menu d-lg-none">
            <nav className="navbar site-navbar justify-content-between">
              <button onClick={() => setIsOpen(!isOpen)} className="azzle-menu-toggle d-inline-block d-lg-none">
                <span></span>
              </button>
            </nav>
          </div>
        </div>

      </header>
      <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  )
}
