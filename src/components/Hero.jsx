import { Suspense, lazy } from "react";
import profilePlaceholder from "../assets/images/profile-placeholder.png";
import heroStackVideo from "../assets/videos/hero-stack.mp4";
import HeroBackground from "./HeroBackground.jsx";
import "./Hero.css";

const Hero3D = lazy(() => import("./Hero3D.jsx"));

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.87 10.93c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.78 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.98h8.9V23H.5V8.98ZM14.5 8.98H23v14H14.5v-6.9c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.65 1.8-2.65 3.66V23H1.1V8.98h4.28v1.92h.06c.6-1.13 2.06-2.32 4.24-2.32 4.54 0 5.38 2.99 5.38 6.87V23h-.56Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:Zohaibinternship@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M2 4.5h20a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Zm1.4 2 8.1 6.75a1 1 0 0 0 1 0L20.6 6.5H3.4ZM2 18h20V7.9l-8.3 6.9a3 3 0 0 1-3.4 0L2 7.9V18Z" />
      </svg>
    ),
  },
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg-wrap" aria-hidden="true">
        <video
          className="hero__bg-video"
          src={heroStackVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <HeroBackground />
        <div className="hero__bg-overlay" />
      </div>

      <Suspense fallback={null}>
        <Hero3D />
      </Suspense>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting hero__fade" style={{ "--fade-delay": "0s" }}>
            Hi, I'm Zohaib 👋
          </p>
          <h1 className="hero__title hero__fade" style={{ "--fade-delay": "0.1s" }}>
            <span className="gradient-text">Web &amp; App</span>
            <br />
            Developer
          </h1>
          <p className="hero__intro hero__fade" style={{ "--fade-delay": "0.2s" }}>
            I build modern websites and applications with a focus on clean design, functionality, and user
            experience.
          </p>

          <div className="hero__actions hero__fade" style={{ "--fade-delay": "0.3s" }}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="hero__socials hero__fade" style={{ "--fade-delay": "0.4s" }}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="hero__social-link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero__portrait hero__fade" style={{ "--fade-delay": "0.25s" }}>
          <div className="hero__portrait-glow" />
          <div className="hero__portrait-frame glass">
            <img src={profilePlaceholder} alt="Zohaib — Web & App Developer" />
          </div>
          <div className="hero__badge glass">
            <span className="hero__badge-dot" />
            Available for work
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  );
}

export default Hero;
