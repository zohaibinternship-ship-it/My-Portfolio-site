import { useEffect, useRef } from "react";

const GLYPHS = [
  "</>",
  "</",
  "/>",
  "{ }",
  "( )",
  "=>",
  "===",
  ";",
  "const",
  "let",
  "fn()",
  "if",
  "map()",
  "async",
  "await",
  "git",
  "npm",
  "1010",
  "0101",
  "0xFF",
];

const COLORS = ["#22d3ee", "#7c5cff", "#a78bfa", "#8fb4ff", "#34d399"];

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function createParticle(width, height, spawnInside) {
  return {
    x: Math.random() * width,
    y: spawnInside ? Math.random() * height : height + 30,
    glyph: randomGlyph(),
    color: randomColor(),
    size: 11 + Math.random() * 16,
    speed: 0.18 + Math.random() * 0.5,
    swayPhase: Math.random() * Math.PI * 2,
    swaySpeed: 0.4 + Math.random() * 0.9,
    swayAmp: 12 + Math.random() * 26,
    baseAlpha: 0.07 + Math.random() * 0.2,
    twinklePhase: Math.random() * Math.PI * 2,
    twinkleSpeed: 0.5 + Math.random() * 1.2,
  };
}

function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let rafId = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.min(64, Math.max(24, Math.round((width * height) / 26000)));
      particles = Array.from({ length: target }, () => createParticle(width, height, true));
    }

    function drawFrame(time) {
      ctx.clearRect(0, 0, width, height);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const p of particles) {
        const swayX = Math.sin(time * 0.001 * p.swaySpeed + p.swayPhase) * p.swayAmp;
        const twinkle = 0.6 + 0.4 * Math.sin(time * 0.001 * p.twinkleSpeed + p.twinklePhase);

        ctx.globalAlpha = p.baseAlpha * twinkle;
        ctx.fillStyle = p.color;
        ctx.font = `600 ${p.size}px "JetBrains Mono", Consolas, "Courier New", monospace`;
        ctx.fillText(p.glyph, p.x + swayX, p.y);
      }

      ctx.globalAlpha = 1;
    }

    function tick(time) {
      drawFrame(time);

      for (const p of particles) {
        p.y -= p.speed;
      }
      particles = particles.map((p) => (p.y < -30 ? createParticle(width, height, false) : p));

      rafId = window.requestAnimationFrame(tick);
    }

    resize();

    if (reduceMotion) {
      drawFrame(0);
    } else {
      rafId = window.requestAnimationFrame(tick);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__code-bg" aria-hidden="true" />;
}

export default HeroBackground;
