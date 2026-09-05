import "./Footer.css";

const socials = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: "mailto:hello@zohaib.dev" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">&copy; 2026 Zohaib. All rights reserved.</p>

        <nav className="footer__socials">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </nav>

        <button className="footer__top" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
