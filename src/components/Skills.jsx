import useScrollReveal from "../hooks/useScrollReveal.js";
import "./Skills.css";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Backend",
    icon: "🗄️",
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Mobile Development",
    icon: "📱",
    skills: ["React Native", "Expo"],
  },
  {
    category: "Tools",
    icon: "🧰",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

function Skills() {
  const headerRef = useScrollReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div ref={headerRef} className="reveal skills__header">
          <span className="section-tag">Skills</span>
          <h2 className="section-heading">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtext">Tools and technologies I use to design, build, and ship products.</p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ group, index }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal skills__group glass" style={{ transitionDelay: `${index * 0.08}s` }}>
      <div className="skills__group-head">
        <span className="skills__group-icon">{group.icon}</span>
        <h3>{group.category}</h3>
      </div>
      <div className="skills__chips">
        {group.skills.map((skill) => (
          <span key={skill} className="skills__chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
