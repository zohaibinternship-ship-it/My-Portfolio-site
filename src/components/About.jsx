import useScrollReveal from "../hooks/useScrollReveal.js";
import "./About.css";

const highlights = [
  {
    title: "Web Development",
    desc: "Building fast, responsive, and accessible websites from the ground up.",
    icon: "🌐",
  },
  {
    title: "App Development",
    desc: "Creating cross-platform mobile experiences with React Native & Expo.",
    icon: "📱",
  },
  {
    title: "Frontend Development",
    desc: "Crafting clean, interactive UIs with React and modern JavaScript.",
    icon: "🎨",
  },
  {
    title: "Backend Development",
    desc: "Designing reliable APIs and services with Node.js and Express.",
    icon: "🛠️",
  },
  {
    title: "UI/UX",
    desc: "Designing intuitive, user-first interfaces that feel effortless.",
    icon: "✨",
  },
  {
    title: "Modern Dev Tools",
    desc: "Working with Git, Vercel, and the latest developer tooling.",
    icon: "⚡",
  },
];

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "2+", label: "Years Learning & Building" },
  { value: "5+", label: "Technologies Mastered" },
  { value: "100%", label: "Commitment to Quality" },
];

function About() {
  const revealRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div ref={revealRef} className="reveal about__header">
          <span className="section-tag">About Me</span>
          <h2 className="section-heading">
            Turning ideas into <span className="gradient-text">real products</span>
          </h2>
          <p className="section-subtext">
            I'm a web and app developer who enjoys building websites and applications end-to-end — from
            the first line of code to a live, deployed product that real users interact with.
          </p>
        </div>

        <div className="about__grid">
          {highlights.map((item, index) => (
            <AboutCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <div ref={statsRef} className="reveal about__stats glass">
          {stats.map((stat) => (
            <div key={stat.label} className="about__stat">
              <span className="about__stat-value gradient-text">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCard({ item, index }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal about__card glass" style={{ transitionDelay: `${index * 0.06}s` }}>
      <span className="about__card-icon">{item.icon}</span>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
}

export default About;
