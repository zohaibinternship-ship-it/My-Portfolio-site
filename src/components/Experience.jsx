import useScrollReveal from "../hooks/useScrollReveal.js";
import "./Experience.css";

const timeline = [
  {
    title: "Web & App Development Internship",
    period: "Present",
    desc: "Gaining practical, hands-on experience by working on real websites and applications in a team environment.",
    icon: "💼",
  },
  {
    title: "Personal Projects",
    period: "Ongoing",
    desc: "Designing, building, and deploying my own websites and applications from scratch to production.",
    icon: "🚀",
  },
  {
    title: "Continuous Learning",
    period: "Always",
    desc: "Continuously improving my skills in web development, backend development, mobile development, and modern development tools.",
    icon: "📚",
  },
];

function Experience() {
  const headerRef = useScrollReveal();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div ref={headerRef} className="reveal experience__header">
          <span className="section-tag">Experience</span>
          <h2 className="section-heading">
            My <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="experience__timeline">
          {timeline.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal experience__item" style={{ transitionDelay: `${index * 0.12}s` }}>
      <div className="experience__marker">
        <span>{item.icon}</span>
      </div>
      <div className="experience__card glass">
        <span className="experience__period">{item.period}</span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

export default Experience;
