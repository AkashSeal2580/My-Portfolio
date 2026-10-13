import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "../data";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Journey", "#journey"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label={`${profile.name} home`}>
          <span className="brand-mark">AS</span>
          <span>akash<span className="brand-dot">.</span></span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}
