import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
});

// ── SVG Icons ──────────────────────────────────────────────────────────────
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const TwitterXIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const MailIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const TelegramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const ExternalLinkIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const MenuIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SendIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

// ── SpecialText (glitch animation) ────────────────────────────────────────
const RANDOM_CHARS = "_!X$0-+*#";
function getRandomChar(prev?: string): string {
  let c: string;
  do { c = RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)]; } while (c === prev);
  return c;
}

function SpecialText({ children, speed = 18, className = "", loop = false }: { children: string; speed?: number; className?: string; loop?: boolean }) {
  const text = children;
  const [display, setDisplay] = useState(" ".repeat(text.length));
  const [phase, setPhase] = useState<"p1" | "p2">("p1");
  const [step, setStep] = useState(0);
  const [key, setKey] = useState(0);
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplay(" ".repeat(text.length));
    setPhase("p1");
    setStep(0);
  }, [key, text]);

  useEffect(() => {
    if (interval.current) clearInterval(interval.current);
    interval.current = setInterval(() => {
      if (phase === "p1") {
        const maxSteps = text.length * 2;
        const len = Math.min(step + 1, text.length);
        const chars: string[] = [];
        for (let i = 0; i < len; i++) chars.push(getRandomChar(chars[i - 1]));
        for (let i = len; i < text.length; i++) chars.push("\u00A0");
        setDisplay(chars.join(""));
        if (step < maxSteps - 1) setStep(s => s + 1);
        else { setPhase("p2"); setStep(0); }
      } else {
        const revealed = Math.floor(step / 2);
        const chars: string[] = [];
        for (let i = 0; i < revealed && i < text.length; i++) chars.push(text[i]);
        if (revealed < text.length) chars.push(step % 2 === 0 ? "_" : getRandomChar());
        while (chars.length < text.length) chars.push(getRandomChar());
        setDisplay(chars.join(""));
        if (step < text.length * 2 - 1) setStep(s => s + 1);
        else {
          setDisplay(text);
          clearInterval(interval.current!);
          if (loop) setTimeout(() => setKey(k => k + 1), 3000);
        }
      }
    }, speed);
    return () => { if (interval.current) clearInterval(interval.current); };
  }, [phase, step, text, speed, loop]);

  return <span className={`font-mono ${className}`}>{display}</span>;
}

// ── Scroll reveal hook ─────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

// ── Skill data with scores ─────────────────────────────────────────────────
const SKILLS_DATA = {
  Languages: [
    { name: "Python", score: 82, level: "Advanced" },
    { name: "Bash / Shell", score: 90, level: "Expert" },
    { name: "JavaScript", score: 68, level: "Intermediate" },
    { name: "HTML / CSS", score: 72, level: "Advanced" },
    { name: "SQL", score: 55, level: "Intermediate" },
  ],
  "Frameworks / Tools": [
    { name: "FastAPI", score: 78, level: "Advanced" },
    { name: "Docker", score: 85, level: "Expert" },
    { name: "Linux (Ubuntu)", score: 95, level: "Expert" },
    { name: "Git / GitHub", score: 88, level: "Expert" },
    { name: "Node.js", score: 60, level: "Intermediate" },
    { name: "Svelte", score: 55, level: "Intermediate" },
    { name: "VPS Infra", score: 92, level: "Expert" },
    { name: "API Systems", score: 75, level: "Advanced" },
  ],
  "Blockchain / Web3": [
    { name: "Validator Nodes", score: 95, level: "Expert" },
    { name: "Cosmos Ecosystem", score: 88, level: "Expert" },
    { name: "EVM Chains", score: 75, level: "Advanced" },
    { name: "Wallet Automation", score: 90, level: "Expert" },
    { name: "RPC / APIs", score: 80, level: "Advanced" },
    { name: "Republic AI", score: 95, level: "Expert" },
    { name: "Telemetry Dashboards", score: 78, level: "Advanced" },
    { name: "ZK Networks", score: 60, level: "Intermediate" },
  ],
  Database: [
    { name: "PostgreSQL", score: 65, level: "Intermediate" },
    { name: "SQLite", score: 70, level: "Advanced" },
    { name: "MongoDB", score: 55, level: "Intermediate" },
  ],
  Others: [
    { name: "Automation Scripts", score: 92, level: "Expert" },
    { name: "Chrome Profile Scaling", score: 85, level: "Expert" },
    { name: "On-chain Ops", score: 90, level: "Expert" },
    { name: "Testnet Farming", score: 95, level: "Expert" },
  ],
};

const LEVEL_COLOR: Record<string, string> = {
  Expert: "text-purple-400",
  Advanced: "text-blue-400",
  Intermediate: "text-gray-400",
  Beginner: "text-gray-600",
};

const LEVEL_BAR: Record<string, string> = {
  Expert: "bg-purple-500",
  Advanced: "bg-blue-500",
  Intermediate: "bg-gray-500",
  Beginner: "bg-gray-700",
};

// ── Projects ───────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: "republicstats.xyz",
    role: "Builder & Maintainer",
    desc: "Real-time analytics dashboard for Republic AI ecosystem — live nodes, telemetry stats, merge counts, activity insights and infrastructure transparency.",
    tags: ["FastAPI", "Svelte", "Python", "VPS"],
    live: "https://republicstats.xyz",
    code: "https://github.com/0xDarkSeidBull",
    badge: "Moderator",
  },
  {
    title: "QuipStats Dashboard",
    role: "Infrastructure & Quantum Dev",
    desc: "Real-time analytics for Quip Network AI ecosystem with live node stats, telemetry, and Grafana monitoring integration.",
    tags: ["HTML", "Grafana", "Python"],
    live: "https://quipstats.vercel.app/",
    code: "https://github.com/0xDarkSeidBull/quipstats",
    badge: "Infra Dev",
  },
  {
    title: "Multi Wallet Automation Suite",
    role: "Builder",
    desc: "Custom systems managing dozens of wallets across testnets — farming, transaction rotation, anti-sybil patterns, and daily task execution.",
    tags: ["Python", "Bash", "Shell"],
    code: "https://github.com/0xDarkSeidBull",
  },
  {
    title: "Node Infrastructure Lab",
    role: "Operator",
    desc: "Deployment and maintenance of validator/prover/operator nodes across multiple ecosystems using Linux, Docker, VPS automation and monitoring.",
    tags: ["Docker", "Linux", "Cosmos", "EVM"],
    code: "https://github.com/0xDarkSeidBull",
  },
  {
    title: "Community Guides & Docs",
    role: "Author",
    desc: "Detailed setup guides for Aztec, Drosera, Nexus, Sahara, Monad and other ecosystems helping hundreds of users deploy nodes.",
    tags: ["Shell", "Markdown"],
    code: "https://github.com/0xDarkSeidBull",
  },
  {
    title: "Dark Chat",
    role: "Developer",
    desc: "Modern communication interface built with Hyperscale API — sleek UI, secure interactions, and next-gen community networking.",
    tags: ["Node.js", "API", "React"],
  },
];

const FUN_FACTS = [
  { icon: "🤖", text: "Runs dozens of wallets & nodes like a one-man ops army" },
  { icon: "💪", text: "Mixes gym discipline with tech obsession" },
  { icon: "⚙️", text: "Loves building systems that save time & scale effort" },
  { icon: "🟩", text: "530+ GitHub contributions in the last year" },
  { icon: "🔴", text: "Node operator since 2022 — production-grade over hype" },
  { icon: "🇮🇳", text: "Building Web3 infra from Mumbai, India" },
];

// ── DotMatrix ──────────────────────────────────────────────────────────────
function DotMatrix({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-1.5 ${className}`} style={{ gridTemplateColumns: "repeat(6, 5px)" }}>
      {[...Array(36)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-gray-600/40" />)}
    </div>
  );
}

function SectionTitle({ title, slash = false }: { title: string; slash?: boolean }) {
  return (
    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
      <span className="text-purple-400">{slash ? "/" : "#"}</span>
      <SpecialText>{title}</SpecialText>
      <span className="flex-1 h-px bg-purple-500/30 ml-2" />
    </h2>
  );
}

// ── GitHub Contribution Graph (SVG visual) ────────────────────────────────
function ContributionGraph() {
  const weeks = 52;
  const days = 7;
  const data = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const density = w > 30 ? 0.7 : w > 20 ? 0.5 : w > 10 ? 0.4 : 0.2;
      const v = Math.random();
      if (v < 1 - density) return 0;
      if (v < 1 - density + 0.15) return 1;
      if (v < 1 - density + 0.25) return 2;
      if (v < 1 - density + 0.35) return 3;
      return 4;
    })
  );
  const colors = ["#1e1e2e", "#1a3a1a", "#2d6a2d", "#3cb33c", "#57e557"];
  const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];

  return (
    <div className="bg-[#161622] border border-gray-700/40 rounded p-4">
      <div className="text-xs text-gray-400 mb-3 font-semibold">530 contributions in the last year</div>
      <svg viewBox={`0 0 ${weeks * 13} ${days * 13 + 20}`} className="w-full">
        {months.map((m, i) => (
          <text key={m} x={i * (weeks * 13 / 13)} y="10" fontSize="8" fill="#6b7280">{m}</text>
        ))}
        {data.map((week, w) =>
          week.map((val, d) => (
            <rect key={`${w}-${d}`} x={w * 13} y={d * 13 + 14} width="10" height="10" rx="2"
              fill={colors[val]} />
          ))
        )}
      </svg>
      <div className="flex items-center gap-2 mt-2 justify-end">
        <span className="text-xs text-gray-600">Less</span>
        {colors.map((c, i) => <rect key={i} width="10" height="10" fill={c} rx="2" className="inline-block" style={{ display: "inline-block", width: 10, height: 10, backgroundColor: c, borderRadius: 2 }} />)}
        <span className="text-xs text-gray-600">More</span>
      </div>
    </div>
  );
}

// ── Main Portfolio ─────────────────────────────────────────────────────────
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = ["home", "works", "about-me", "contact"];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.3 }
    );
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const navLinks = ["home", "works", "about-me", "contact"];

  return (
    <div className="min-h-screen bg-[#1e1e2e] text-gray-300" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>

      {/* Left line */}
      <div className="fixed left-16 top-0 bottom-0 w-px bg-gray-700/30 z-10 hidden md:block" />

      {/* Left socials */}
      <div className="fixed left-3 top-1/2 -translate-y-1/2 z-20 flex-col gap-5 hidden md:flex">
        <a href="https://github.com/0xDarkSeidBull" target="_blank" className="text-gray-600 hover:text-white transition-colors"><GithubIcon size={16} /></a>
        <a href="https://x.com/cryptobhartiyax" target="_blank" className="text-gray-600 hover:text-white transition-colors"><TwitterXIcon size={16} /></a>
        <a href="mailto:0xdarkseidbull@gmail.com" className="text-gray-600 hover:text-white transition-colors"><MailIcon size={16} /></a>
        <a href="https://www.youtube.com/@CryptoBhartiya" target="_blank" className="text-gray-600 hover:text-white transition-colors"><YoutubeIcon size={16} /></a>
        <a href="https://t.me/DarkSeidBull" target="_blank" className="text-gray-600 hover:text-white transition-colors"><TelegramIcon size={16} /></a>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-[#1e1e2e]/95 backdrop-blur-md border-b border-gray-700/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-purple-400 rounded flex items-center justify-center">
              <span className="text-purple-400 text-xs font-bold">D</span>
            </div>
            <SpecialText className="text-white font-semibold text-sm">DarkSeidBull</SpecialText>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(id => (
              <button key={id} onClick={() => scrollTo(id)}
                className={`text-xs transition-colors hover:text-white flex items-center gap-1 ${activeSection === id ? "text-purple-400" : "text-gray-500"}`}>
                <span className="text-purple-400">#</span>
                <SpecialText key={activeSection === id ? "active" : id}>{id}</SpecialText>
                {activeSection === id && <span className="block h-px w-full bg-purple-400 absolute bottom-0 left-0" />}
              </button>
            ))}
            <button className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-500 hover:text-white text-xs transition-colors">☀</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 border-t border-gray-700/30 pt-3 flex flex-col gap-3">
            {navLinks.map(id => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-gray-400 hover:text-white text-sm">
                <span className="text-purple-400"># </span>{id}
              </button>
            ))}
          </div>
        )}
      </nav>

      <div className="md:pl-24 max-w-6xl mx-auto px-6 pt-24">

        {/* ── HOME ── */}
        <section id="home" className="min-h-screen flex flex-col justify-center py-20 relative">
          <DotMatrix className="absolute right-0 top-24 opacity-20 hidden md:grid" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                <SpecialText loop className="text-purple-400">DarkSeidBull</SpecialText>
                <span className="block text-xl md:text-2xl mt-2 text-gray-300 font-normal">
                  is a <span className="text-purple-400">Web3 Infrastructure</span> builder<br />
                  and <span className="text-purple-400">Node Operator</span>
                </span>
              </h1>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                Production-grade validator & testnet operator since 2022. Building dashboards, automation suites, and blockchain infra across Cosmos, EVM, ZK and AI-native networks. Based in Mumbai, India 🇮🇳
              </p>
              <div className="flex gap-3 flex-wrap">
                <button onClick={() => scrollTo("contact")}
                  className="px-5 py-2 border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 transition-colors text-xs">
                  <SpecialText>Contact me !!</SpecialText>
                </button>
                <button onClick={() => scrollTo("works")}
                  className="px-5 py-2 border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-colors text-xs">
                  <SpecialText>View Work →</SpecialText>
                </button>
              </div>
            </div>

            <div className="space-y-3 relative">
              <DotMatrix className="absolute -right-2 top-0 opacity-15 hidden md:grid" />
              <div className="bg-[#252535] border border-gray-700/40 p-4 rounded">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-sm bg-purple-500" />
                  <span className="text-xs text-gray-500">Currently working on</span>
                  <span className="text-white text-xs font-bold">Republic AI Testnet</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { icon: "🟢", title: "Mainnet Validator", sub: "Redbelly Network" },
                    { icon: "🔴", title: "Testnet Validator", sub: "Republic AI" },
                    { icon: "530+", title: "GitHub Contributions", sub: "Last 12 months" },
                    { icon: "900+", title: "YouTube Subscribers", sub: "CryptoBhartiya" },
                  ].map(s => (
                    <div key={s.title} className="bg-[#1a1a2a] p-2.5 rounded border border-gray-700/30">
                      <div className="text-base mb-1">{s.icon}</div>
                      <div className="text-white font-semibold text-xs">{s.title}</div>
                      <div className="text-gray-600 text-xs">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-gray-700/40 p-4 relative">
                <span className="text-purple-400 text-xl absolute -top-3 left-3 bg-[#1e1e2e] px-1">"</span>
                <p className="text-gray-500 text-xs italic leading-relaxed">Production-grade over hype. Running blockchain nodes since 2022 — correctness and operational responsibility first.</p>
                <span className="text-purple-400 text-xl absolute -bottom-4 right-3 bg-[#1e1e2e] px-1">"</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── WORKS ── */}
        <section id="works" className="py-20">
          <Reveal>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-purple-400">/</span>
                <SpecialText>my-projects</SpecialText>
              </h2>
              <a href="https://github.com/0xDarkSeidBull" target="_blank"
                className="text-gray-600 hover:text-white text-xs flex items-center gap-1 transition-colors">
                View all --&gt;
              </a>
            </div>
            <p className="text-gray-600 text-xs mb-8">List of my projects</p>
          </Reveal>

          <Reveal delay={100}><SectionTitle title="projects" /></Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="border border-gray-700/40 bg-[#252535]/30 flex flex-col hover:border-purple-500/40 transition-all hover:-translate-y-1 duration-300 h-full">
                  <div className="bg-[#1a1a2a] h-32 flex items-center justify-center border-b border-gray-700/40 relative overflow-hidden">
                    <div className="w-8 h-8 border border-purple-400/30 rounded flex items-center justify-center text-purple-400">⚙</div>
                    {p.badge && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 bg-purple-500/20 border border-purple-500/40 text-purple-400 text-xs rounded">
                        {p.badge}
                      </div>
                    )}
                  </div>
                  <div className="px-4 pt-3 flex flex-wrap gap-1.5">
                    {p.tags.map(t => <span key={t} className="text-gray-600 text-xs">{t}</span>)}
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="text-xs text-purple-400/60 mb-1">{p.role}</div>
                    <h3 className="text-white font-semibold text-sm mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed flex-1">{p.desc}</p>
                    <div className="flex gap-2 mt-4">
                      {p.code && (
                        <a href={p.code} target="_blank" className="px-3 py-1.5 border border-gray-700 text-gray-500 hover:text-white text-xs transition-colors flex items-center gap-1">
                          Code &gt;= <ExternalLinkIcon size={10} />
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" className="px-3 py-1.5 border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 text-xs transition-colors flex items-center gap-1">
                          Live &lt;-&gt; <ExternalLinkIcon size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── ABOUT ME ── */}
        <section id="about-me" className="py-20">
          <Reveal>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-1">
              <span className="text-purple-400">/</span>
              <SpecialText>about-me</SpecialText>
            </h2>
            <p className="text-gray-600 text-xs mb-10">Who am I?</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <Reveal>
              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>Hello, I'm DarkSeidBull (Sachin Sahani)!</p>
                <p>I'm a Web3 Infrastructure Builder and Node Operator based in Mumbai, India. I've been running blockchain nodes since 2022, starting with early networks like Aptos and continuing across a wide range of testnet and mainnet ecosystems.</p>
                <p>My work focuses on operating non-custodial, production-grade infrastructure that supports network security, reliability, and long-term growth.</p>
                <p>Driven by curiosity and discipline — continuously exploring Cosmos, EVM, ZK, and AI-native networks with emphasis on correctness and operational responsibility.</p>
                <button onClick={() => scrollTo("contact")}
                  className="px-5 py-2 border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 transition-colors text-xs flex items-center gap-2 mt-2">
                  Reach out →
                </button>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-3">
                <div className="bg-[#252535] border border-gray-700/40 p-3 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-sm bg-purple-500" />
                  <span className="text-xs text-gray-500">Currently working on</span>
                  <span className="text-white text-xs font-bold">Republic AI Testnet</span>
                </div>
                {[
                  { emoji: "🟢", label: "Redbelly Network • Mainnet", sub: "Active Mainnet Validator", href: "https://redbelly.routescan.io/address/0xd688ccf03589347CEa7654F444458419069FdbBe" },
                  { emoji: "🔴", label: "Republic AI • Testnet", sub: "Active Validator + Community Moderator", href: "https://explorer.republicai.io/validators/raivaloper1xcr42hlh85kutaqtmyxw2zu8pr3nk5rkh0nz2z" },
                ].map(v => (
                  <div key={v.label} className="border border-gray-700/40 p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span>{v.emoji}</span>
                      <span className="text-purple-400 text-xs font-semibold">{v.label}</span>
                    </div>
                    <div className="text-gray-600 text-xs mb-2">{v.sub}</div>
                    <a href={v.href} target="_blank" className="text-xs text-gray-700 hover:text-purple-400 transition-colors flex items-center gap-1">
                      View on-chain proof <ExternalLinkIcon size={10} />
                    </a>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* GitHub Contribution Graph */}
          <Reveal delay={100}>
            <div className="mb-16">
              <SectionTitle title="github-contributions" />
              <ContributionGraph />
            </div>
          </Reveal>

          {/* Skills with scores */}
          <Reveal delay={100}>
            <SectionTitle title="skills" />
          </Reveal>
          <div className="space-y-8 mb-16">
            {Object.entries(SKILLS_DATA).map(([cat, skills], ci) => (
              <Reveal key={cat} delay={ci * 60}>
                <div>
                  <div className="text-gray-500 text-xs mb-3 border-b border-gray-700/30 pb-1">{cat}</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {skills.map((s, si) => (
                      <div key={s.name} className="flex items-center gap-3">
                        <span className="text-gray-400 text-xs w-36 shrink-0">{s.name}</span>
                        <div className="flex-1 bg-gray-800 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${LEVEL_BAR[s.level]} transition-all duration-1000`}
                            style={{ width: `${s.score}%`, transitionDelay: `${si * 50}ms` }}
                          />
                        </div>
                        <span className={`text-xs w-20 text-right ${LEVEL_COLOR[s.level]}`}>{s.level} {s.score}/100</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Fun facts */}
          <Reveal>
            <SectionTitle title="my-fun-facts" />
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {FUN_FACTS.map((f, i) => (
              <Reveal key={f.text} delay={i * 60}>
                <div className="border border-gray-700/40 px-4 py-2 text-gray-500 text-xs hover:border-purple-500/40 hover:text-gray-300 transition-all flex items-center gap-2">
                  <span>{f.icon}</span> {f.text}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20">
          <Reveal>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-1">
              <span className="text-purple-400">/</span>
              <SpecialText>contacts</SpecialText>
            </h2>
            <p className="text-gray-600 text-xs mb-10">Want to reach out?</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Reveal>
              <div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">I'm open to collaborating on Web3 infrastructure, node operations, dashboard tooling, and automation projects.</p>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">If you have a question, opportunity, or just want to connect — don't hesitate to reach out.</p>
                <a href="mailto:0xdarkseidbull@gmail.com"
                  className="px-5 py-2 border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 transition-colors text-xs inline-flex items-center gap-2">
                  Reach out →
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-4">
                <div className="border border-gray-700/40 p-4">
                  <div className="text-white text-xs font-semibold mb-3 border-b border-gray-700/40 pb-2">Message me</div>
                  <div className="space-y-3">
                    <a href="mailto:0xdarkseidbull@gmail.com" className="flex items-center gap-3 text-gray-500 hover:text-white text-xs transition-colors">
                      <MailIcon size={14} /><span className="text-purple-400">0xdarkseidbull@gmail.com</span>
                    </a>
                    <a href="tel:+918652894357" className="flex items-center gap-3 text-gray-500 hover:text-white text-xs transition-colors">
                      <span>📞</span> +91 86528 94357
                    </a>
                    <a href="https://t.me/DarkSeidBull" target="_blank" className="flex items-center gap-3 text-gray-500 hover:text-white text-xs transition-colors">
                      <TelegramIcon size={14} /> @DarkSeidBull
                    </a>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <input placeholder="Name" className="bg-transparent border border-gray-700/40 px-3 py-2 text-xs text-gray-300 placeholder-gray-700 focus:outline-none focus:border-purple-500/50 w-full" />
                    <input placeholder="Email" className="bg-transparent border border-gray-700/40 px-3 py-2 text-xs text-gray-300 placeholder-gray-700 focus:outline-none focus:border-purple-500/50 w-full" />
                  </div>
                  <input placeholder="Subject" className="bg-transparent border border-gray-700/40 px-3 py-2 text-xs text-gray-300 placeholder-gray-700 focus:outline-none focus:border-purple-500/50 w-full" />
                  <textarea placeholder="Message" rows={4} className="bg-transparent border border-gray-700/40 px-3 py-2 text-xs text-gray-300 placeholder-gray-700 focus:outline-none focus:border-purple-500/50 w-full resize-none" />
                  <button className="px-5 py-2 border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 text-xs flex items-center gap-2 transition-colors">
                    Send <SendIcon />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* All media */}
          <Reveal>
            <SectionTitle title="all-media" />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {[
              { icon: <GithubIcon size={16} />, label: "@0xDarkSeidBull", href: "https://github.com/0xDarkSeidBull" },
              { icon: <TwitterXIcon size={16} />, label: "@cryptobhartiyax", href: "https://x.com/cryptobhartiyax" },
              { icon: <TwitterXIcon size={16} />, label: "@Web3Sachin", href: "https://x.com/Web3Sachin" },
              { icon: <YoutubeIcon size={16} />, label: "CryptoBhartiya", href: "https://www.youtube.com/@CryptoBhartiya" },
              { icon: <TelegramIcon size={16} />, label: "GuruPedia Channel", href: "https://t.me/GuruPediaChannel" },
              { icon: <TelegramIcon size={16} />, label: "@DarkSeidBull", href: "https://t.me/DarkSeidBull" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 50}>
                <a href={s.href} target="_blank" className="flex items-center gap-3 text-gray-500 hover:text-white text-xs transition-colors py-1">
                  <span className="text-purple-400">{s.icon}</span> {s.label}
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-700/30 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 border border-purple-400 rounded flex items-center justify-center">
                  <span className="text-purple-400 text-xs">D</span>
                </div>
                <span className="text-white text-xs font-semibold">DarkSeidBull</span>
                <span className="text-gray-700 text-xs">0xdarkseidbull@gmail.com</span>
              </div>
              <p className="text-gray-700 text-xs">Web3 Infrastructure Builder & Node Operator</p>
            </div>
            <div>
              <div className="text-gray-600 text-xs mb-2">Media</div>
              <div className="flex gap-4">
                <a href="https://github.com/0xDarkSeidBull" target="_blank" className="text-gray-700 hover:text-white transition-colors"><GithubIcon size={14} /></a>
                <a href="https://x.com/cryptobhartiyax" target="_blank" className="text-gray-700 hover:text-white transition-colors"><TwitterXIcon size={14} /></a>
                <a href="https://www.youtube.com/@CryptoBhartiya" target="_blank" className="text-gray-700 hover:text-white transition-colors"><YoutubeIcon size={14} /></a>
                <a href="mailto:0xdarkseidbull@gmail.com" className="text-gray-700 hover:text-white transition-colors"><MailIcon size={14} /></a>
                <a href="https://t.me/DarkSeidBull" target="_blank" className="text-gray-700 hover:text-white transition-colors"><TelegramIcon size={14} /></a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-700 text-xs mt-6">© Copyright 2026, DarkSeidBull</div>
        </footer>

      </div>
    </div>
  );
}