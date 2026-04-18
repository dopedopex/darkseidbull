import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Twitter, Youtube, ExternalLink, ChevronRight, Menu, X } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
});

const NAV_LINKS = ["#home", "#works", "#about-me", "#contact"];

const PROJECTS = [
  {
    title: "republicstats.xyz",
    desc: "Real-time analytics dashboard for Republic AI ecosystem — live nodes, telemetry stats, merge counts, activity insights and infrastructure transparency.",
    tags: ["FastAPI", "Svelte", "Python", "VPS"],
    live: "https://republicstats.xyz",
    code: "https://github.com/0xDarkSeidBull",
  },
  {
    title: "QuipStats Dashboard",
    desc: "Real-time analytics for Quip Network AI ecosystem with live node stats, telemetry, and Grafana monitoring integration.",
    tags: ["HTML", "Grafana", "Python"],
    live: "https://quipstats.vercel.app/",
    code: "https://github.com/0xDarkSeidBull/quipstats",
  },
  {
    title: "Multi Wallet Automation Suite",
    desc: "Custom systems managing dozens of wallets across testnets — farming, transaction rotation, anti-sybil patterns, and daily task execution.",
    tags: ["Python", "Bash", "Shell"],
    code: "https://github.com/0xDarkSeidBull",
  },
  {
    title: "Node Infrastructure Lab",
    desc: "Deployment and maintenance of validator/prover/operator nodes across multiple ecosystems using Linux, Docker, VPS automation and monitoring.",
    tags: ["Docker", "Linux", "Cosmos", "EVM"],
    code: "https://github.com/0xDarkSeidBull",
  },
  {
    title: "Community Guides & Docs",
    desc: "Detailed setup guides for Aztec, Drosera, Nexus, Sahara, Monad and other ecosystems helping users deploy nodes smoothly.",
    tags: ["Shell", "Markdown"],
    code: "https://github.com/0xDarkSeidBull",
  },
  {
    title: "Dark Chat (Private)",
    desc: "Modern communication interface built with Hyperscale API — sleek UI, secure interactions, and next-gen community networking.",
    tags: ["Node.js", "API", "React"],
  },
];

const SKILLS = {
  Languages: ["Python", "Bash / Shell", "JavaScript", "HTML / CSS", "SQL"],
  "Frameworks / Tools": ["FastAPI", "Docker", "Linux (Ubuntu)", "Git / GitHub", "Node.js", "Svelte", "VPS Infra", "API Systems"],
  "Blockchain / Web3": ["Validator Nodes", "Cosmos Ecosystem", "EVM Chains", "Wallet Automation", "RPC / APIs", "Republic AI", "Telemetry Dashboards", "ZK Networks"],
  Database: ["PostgreSQL", "SQLite", "MongoDB"],
  Others: ["Automation Scripts", "Chrome Profile Scaling", "On-chain Ops", "Testnet Farming"],
};

const FUN_FACTS = [
  "Runs dozens of wallets & nodes like a one-man ops army 🤖",
  "Mixes gym discipline with tech obsession 💪",
  "Loves building systems that save time and scale effort ⚙️",
  "530+ GitHub contributions in the last year 🟩",
  "Node operator since 2022 — production-grade over hype 🔴",
];

function DotMatrix({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-1 ${className}`} style={{ gridTemplateColumns: "repeat(6, 6px)" }}>
      {[...Array(30)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-600 opacity-50" />
      ))}
    </div>
  );
}

function SectionTitle({ tag, title }: { tag?: string; title: string }) {
  return (
    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
      <span className="text-purple-400">{tag || "#"}</span>{title}
      <span className="flex-1 h-px bg-purple-500/40 ml-2" />
    </h2>
  );
}

export default function Portfolio() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = ["home", "works", "about-me", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e2e] text-gray-300 font-mono relative">

      {/* Left vertical line */}
      <div className="fixed left-16 top-0 bottom-0 w-px bg-gray-700/40 z-10 hidden md:block" />

      {/* Left social icons */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-5 hidden md:flex">
        <a href="https://github.com/0xDarkSeidBull" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
        <a href="https://x.com/cryptobhartiyax" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Twitter size={18} /></a>
        <a href="mailto:0xdarkseidbull@gmail.com" className="text-gray-500 hover:text-white transition-colors"><Mail size={18} /></a>
        <a href="https://www.youtube.com/@CryptoBhartiya" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Youtube size={18} /></a>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-[#1e1e2e]/90 backdrop-blur-md border-b border-gray-700/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-purple-400 rounded flex items-center justify-center">
              <span className="text-purple-400 text-xs font-bold">D</span>
            </div>
            <span className="text-white font-semibold">DarkSeidBull</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const id = link.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button key={link} onClick={() => scrollTo(id)}
                  className={`text-sm transition-colors hover:text-white ${isActive ? "text-purple-400 border-b border-purple-400 pb-0.5" : "text-gray-400"}`}>
                  <span className="text-purple-400"># </span>{id}
                </button>
              );
            })}
            <button className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              ☀
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 border-t border-gray-700/30 pt-3">
            {NAV_LINKS.map((link) => {
              const id = link.replace("#", "");
              return (
                <button key={link} onClick={() => scrollTo(id)} className="text-left text-gray-400 hover:text-white text-sm">
                  <span className="text-purple-400"># </span>{id}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      <div className="md:pl-24 max-w-6xl mx-auto px-6 pt-24">

        {/* HOME SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center py-20 relative">
          <DotMatrix className="absolute right-0 top-32 opacity-30" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                DarkSeidBull is a{" "}
                <span className="text-purple-400">Web3 Infrastructure</span>{" "}
                builder and{" "}
                <span className="text-purple-400">Node Operator</span>
              </h1>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Production-grade validator & testnet operator since 2022. Building dashboards, automation suites, and blockchain infra across Cosmos, EVM, ZK and AI-native networks. Based in India 🇮🇳
              </p>
              <div className="flex gap-3">
                <button onClick={() => scrollTo("contact")}
                  className="px-5 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-colors text-sm">
                  Contact me !!
                </button>
                <button onClick={() => scrollTo("works")}
                  className="px-5 py-2 border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 transition-colors text-sm">
                  View Work →
                </button>
              </div>
            </div>

            {/* Right: currently working on + stats */}
            <div className="relative">
              <DotMatrix className="absolute -right-4 top-0 opacity-20" />
              <div className="bg-[#252535] border border-gray-700/50 rounded p-5 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-sm bg-purple-500" />
                  <span className="text-xs text-gray-400">Currently working on</span>
                  <span className="text-white text-xs font-bold">Republic AI Testnet</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#1e1e2e] p-3 rounded border border-gray-700/30">
                    <div className="text-purple-400 font-bold text-lg">🟢</div>
                    <div className="text-white font-semibold mt-1">Mainnet Validator</div>
                    <div className="text-gray-500">Redbelly Network</div>
                  </div>
                  <div className="bg-[#1e1e2e] p-3 rounded border border-gray-700/30">
                    <div className="text-purple-400 font-bold text-lg">🔴</div>
                    <div className="text-white font-semibold mt-1">Testnet Validator</div>
                    <div className="text-gray-500">Republic AI</div>
                  </div>
                  <div className="bg-[#1e1e2e] p-3 rounded border border-gray-700/30">
                    <div className="text-white font-bold text-lg">530+</div>
                    <div className="text-gray-500 mt-1">GitHub Contributions</div>
                  </div>
                  <div className="bg-[#1e1e2e] p-3 rounded border border-gray-700/30">
                    <div className="text-white font-bold text-lg">900+</div>
                    <div className="text-gray-500 mt-1">YouTube Subs</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="border border-gray-700/50 p-4 relative">
                <span className="text-purple-400 text-2xl absolute -top-3 left-3 bg-[#1e1e2e] px-1">"</span>
                <p className="text-gray-400 text-xs italic">Production-grade over hype. I've been running blockchain nodes since 2022 — correctness and operational responsibility first.</p>
                <span className="text-purple-400 text-2xl absolute -bottom-4 right-3 bg-[#1e1e2e] px-1">"</span>
              </div>
            </div>
          </div>

          {/* Skills preview */}
          <div className="mt-20">
            <SectionTitle title="skills" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {Object.entries(SKILLS).map(([cat, items]) => (
                <div key={cat} className="border border-gray-700/50 p-3">
                  <div className="text-gray-400 text-xs mb-2 border-b border-gray-700/50 pb-1">{cat}</div>
                  <div className="flex flex-wrap gap-1">
                    {items.map((s) => (
                      <span key={s} className="text-gray-300 text-xs">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKS SECTION */}
        <section id="works" className="py-20">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-purple-400">/</span>my-projects
            </h2>
            <a href="https://github.com/0xDarkSeidBull" target="_blank"
              className="text-gray-500 hover:text-white text-sm flex items-center gap-1 transition-colors">
              View all <ChevronRight size={14} />--&gt;
            </a>
          </div>
          <p className="text-gray-500 text-sm mb-8">List of my projects</p>

          <SectionTitle title="projects" />

          <div className="grid md:grid-cols-3 gap-4">
            {PROJECTS.map((p) => (
              <div key={p.title} className="border border-gray-700/50 bg-[#252535]/50 flex flex-col hover:border-purple-500/40 transition-colors">
                {/* Preview area */}
                <div className="bg-[#1a1a2a] h-36 flex items-center justify-center border-b border-gray-700/50">
                  <div className="w-10 h-10 border-2 border-purple-400/40 rounded flex items-center justify-center">
                    <span className="text-purple-400 text-lg">⚙</span>
                  </div>
                </div>
                {/* Tags */}
                <div className="px-4 pt-3 flex flex-wrap gap-1">
                  {p.tags.map((t) => (
                    <span key={t} className="text-gray-500 text-xs">{t}</span>
                  ))}
                </div>
                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-white font-semibold text-sm mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{p.desc}</p>
                  <div className="flex gap-2 mt-4">
                    {p.code && (
                      <a href={p.code} target="_blank"
                        className="px-3 py-1.5 border border-gray-600 text-gray-400 hover:text-white text-xs transition-colors">
                        Code &gt;=
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank"
                        className="px-3 py-1.5 border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 text-xs transition-colors flex items-center gap-1">
                        Live &lt;-&gt;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about-me" className="py-20">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-1">
            <span className="text-purple-400">/</span>about-me
          </h2>
          <p className="text-gray-500 text-sm mb-10">Who am I?</p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
              <p>Hello, I'm DarkSeidBull (Sachin Sahani)!</p>
              <p>I'm a Web3 Infrastructure Builder and Node Operator based in Mumbai, India. I've been running blockchain nodes since 2022, starting with early networks like Aptos and continuing across a wide range of testnet and mainnet ecosystems.</p>
              <p>My work focuses on operating non-custodial, production-grade infrastructure that supports network security, reliability, and long-term growth. I build automation systems, dashboards, and tooling that help scale Web3 operations.</p>
              <p>I'm driven by curiosity and discipline — continuously exploring new protocols from Cosmos and EVM chains to modular, ZK, and AI-native networks, with an emphasis on correctness and operational responsibility.</p>
              <button onClick={() => scrollTo("contact")}
                className="px-5 py-2 border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 transition-colors text-sm flex items-center gap-2 mt-2">
                Reach out →
              </button>
            </div>

            <div className="relative">
              <DotMatrix className="absolute right-0 top-0 opacity-20" />
              <div className="bg-[#252535] border border-gray-700/50 p-4 mb-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-sm bg-purple-500" />
                <span className="text-xs text-gray-400">Currently working on</span>
                <span className="text-white text-xs font-bold">Republic AI Testnet</span>
              </div>

              {/* Certifications / Validator Proofs */}
              <SectionTitle title="validator-proofs" />
              <div className="space-y-3">
                <div className="border border-gray-700/50 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-xs">🟢</div>
                    <div>
                      <div className="text-purple-400 text-xs font-semibold">Redbelly Network • Mainnet</div>
                      <div className="text-gray-500 text-xs">Active Mainnet Validator</div>
                    </div>
                  </div>
                  <a href="https://redbelly.routescan.io/address/0xd688ccf03589347CEa7654F444458419069FdbBe"
                    target="_blank" className="text-xs text-gray-600 hover:text-purple-400 transition-colors flex items-center gap-1">
                    View on-chain proof <ExternalLink size={10} />
                  </a>
                </div>
                <div className="border border-gray-700/50 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-xs">🔴</div>
                    <div>
                      <div className="text-purple-400 text-xs font-semibold">Republic AI • Testnet</div>
                      <div className="text-gray-500 text-xs">Active Testnet Validator + Community Evangelist</div>
                    </div>
                  </div>
                  <a href="https://explorer.republicai.io/validators/raivaloper1xcr42hlh85kutaqtmyxw2zu8pr3nk5rkh0nz2z"
                    target="_blank" className="text-xs text-gray-600 hover:text-purple-400 transition-colors flex items-center gap-1">
                    View on-chain proof <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills full */}
          <div className="mt-16">
            <SectionTitle title="skills" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {Object.entries(SKILLS).map(([cat, items]) => (
                <div key={cat} className="border border-gray-700/50 p-3">
                  <div className="text-gray-400 text-xs mb-2 border-b border-gray-700/50 pb-1">{cat}</div>
                  <div className="space-y-0.5">
                    {items.map((s) => (
                      <div key={s} className="text-gray-300 text-xs">{s}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun facts */}
          <div className="mt-16">
            <SectionTitle title="my-fun-facts" />
            <div className="flex flex-wrap gap-3">
              {FUN_FACTS.map((f) => (
                <div key={f} className="border border-gray-700/50 px-4 py-2 text-gray-400 text-xs hover:border-purple-500/40 transition-colors">
                  {f}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-1">
            <span className="text-purple-400">/</span>contacts
          </h2>
          <p className="text-gray-500 text-sm mb-10">Want to reach out?</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                I'm open to collaborating on Web3 infrastructure, node operations, dashboard tooling, and automation projects.
              </p>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                If you have a question, opportunity, or just want to connect — don't hesitate to reach out.
              </p>
              <button onClick={() => window.open("mailto:0xdarkseidbull@gmail.com")}
                className="px-5 py-2 border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 transition-colors text-sm flex items-center gap-2">
                Reach out →
              </button>
            </div>

            <div>
              <div className="border border-gray-700/50 p-4 mb-4">
                <div className="text-white text-sm font-semibold mb-3 border-b border-gray-700/50 pb-2">Message me</div>
                <div className="space-y-3">
                  <a href="mailto:0xdarkseidbull@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                    <Mail size={14} className="text-purple-400" /> 0xdarkseidbull@gmail.com
                  </a>
                  <a href="tel:+918652894357" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                    <span className="text-purple-400 text-xs">📞</span> +91 86528 94357
                  </a>
                  <a href="https://t.me/DarkSeidBull" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                    <span className="text-purple-400 text-xs">✈</span> @DarkSeidBull (Telegram)
                  </a>
                </div>
              </div>

              {/* Contact form */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="Name" className="bg-transparent border border-gray-700/50 px-3 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 w-full" />
                  <input placeholder="Email" className="bg-transparent border border-gray-700/50 px-3 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 w-full" />
                </div>
                <input placeholder="Subject" className="bg-transparent border border-gray-700/50 px-3 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 w-full" />
                <textarea placeholder="Message" rows={4} className="bg-transparent border border-gray-700/50 px-3 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 w-full resize-none" />
                <button className="px-5 py-2 border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 text-sm flex items-center gap-2 transition-colors">
                  Send ✈
                </button>
              </div>
            </div>
          </div>

          {/* All media */}
          <div className="mt-16">
            <SectionTitle title="all-media" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: <Github size={16} />, label: "@0xDarkSeidBull", href: "https://github.com/0xDarkSeidBull" },
                { icon: <Twitter size={16} />, label: "@cryptobhartiyax", href: "https://x.com/cryptobhartiyax" },
                { icon: <Twitter size={16} />, label: "@Web3Sachin", href: "https://x.com/Web3Sachin" },
                { icon: <Youtube size={16} />, label: "CryptoBhartiya", href: "https://www.youtube.com/@CryptoBhartiya" },
                { icon: <span className="text-xs">✈</span>, label: "GuruPedia Channel", href: "https://t.me/GuruPediaChannel" },
                { icon: <span className="text-xs">✈</span>, label: "@DarkSeidBull", href: "https://t.me/DarkSeidBull" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm py-2">
                  <span className="text-purple-400">{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-700/40 py-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 border border-purple-400 rounded flex items-center justify-center">
                  <span className="text-purple-400 text-xs">D</span>
                </div>
                <span className="text-white text-sm font-semibold">DarkSeidBull</span>
                <span className="text-gray-600 text-xs">0xdarkseidbull@gmail.com</span>
              </div>
              <p className="text-gray-600 text-xs">Web3 Infrastructure Builder & Node Operator</p>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-2">Media</div>
              <div className="flex gap-4">
                <a href="https://github.com/0xDarkSeidBull" target="_blank" className="text-gray-600 hover:text-white transition-colors"><Github size={14} /></a>
                <a href="https://x.com/cryptobhartiyax" target="_blank" className="text-gray-600 hover:text-white transition-colors"><Twitter size={14} /></a>
                <a href="https://www.youtube.com/@CryptoBhartiya" target="_blank" className="text-gray-600 hover:text-white transition-colors"><Youtube size={14} /></a>
                <a href="mailto:0xdarkseidbull@gmail.com" className="text-gray-600 hover:text-white transition-colors"><Mail size={14} /></a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-700 text-xs mt-6">© Copyright 2026, DarkSeidBull</div>
        </footer>

      </div>
    </div>
  );
}
