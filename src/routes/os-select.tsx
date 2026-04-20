import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { WindowsLogo } from "@/components/WindowsLogo";
import linuxGif from "@/assets/linux-tux.gif";

export const Route = createFileRoute("/os-select")({
  component: OsSelect,
});

// ── Terminal data ──────────────────────────────────────────────────────────
const HELP_TEXT = `
Available commands:
  /help                 Show this help menu
  /fullstats            Complete stats overview
  /my-projects          All projects list
  /about-me             About DarkSeidBull
  /github-contributions GitHub activity
  /skills               Technical skills
  /my-fun-facts         Fun facts
  /contacts             Contact info
  /all-media            All social links
  /clear                Clear terminal
`.trim();

const FULLSTATS_TEXT = `
╔══════════════════════════════════════════╗
║         DARKSEIDBULL — FULL STATS        ║
╚══════════════════════════════════════════╝

 IDENTITY
  Handle   : DarkSeidBull (Sachin Sahani)
  Location : Mumbai, India 🇮🇳
  Role     : Web3 Infra Builder & Node Operator
  Since    : 2022

 ACTIVE NODES
  🟢 Redbelly Network   — Mainnet Validator
  🔴 Republic AI        — Testnet Validator + Moderator

 METRICS
  GitHub Contributions : 530+  (last 12 months)
  YouTube Subscribers  : 900+  (@CryptoBhartiya)
  Wallet Address       : rai1xcr42hlh85kutaqtmyxw2zu8pr3nk5rks6nlp5
  Valoper              : raivaloper1xcr42hlh85kutaqtmyxw2zu8pr3nk5rkh0nz2z
  Chain ID             : raitestnet_77701-1

 TOP SKILLS
  Linux (Ubuntu)   95/100  Expert
  Testnet Farming  95/100  Expert
  Validator Nodes  95/100  Expert
  Republic AI      95/100  Expert
  VPS Infra        92/100  Expert
  Automation       92/100  Expert
  Wallet Auto      90/100  Expert
  Bash / Shell     90/100  Expert
`.trim();

const PROJECTS_TEXT = `
╔══════════════════════════════════════════╗
║            MY PROJECTS                   ║
╚══════════════════════════════════════════╝

 [1] republicstats.xyz
     Role : Builder & Maintainer
     Tags : FastAPI, Svelte, Python, VPS
     Desc : Real-time analytics dashboard for Republic AI ecosystem
     Live : https://republicstats.xyz
     Code : https://github.com/0xDarkSeidBull

 [2] QuipStats Dashboard
     Role : Infrastructure & Quantum Dev
     Tags : HTML, Grafana, Python
     Desc : Real-time analytics for Quip Network AI ecosystem
     Live : https://quipstats.vercel.app/
     Code : https://github.com/0xDarkSeidBull/quipstats

 [3] Multi Wallet Automation Suite
     Role : Builder
     Tags : Python, Bash, Shell
     Desc : Custom systems managing dozens of wallets across testnets

 [4] Node Infrastructure Lab
     Role : Operator
     Tags : Docker, Linux, Cosmos, EVM
     Desc : Validator/prover/operator nodes across multiple ecosystems

 [5] Community Guides & Docs
     Role : Author
     Tags : Shell, Markdown
     Desc : Setup guides for Aztec, Drosera, Nexus, Sahara, Monad

 [6] Dark Chat
     Role : Developer
     Tags : Node.js, API, React
     Desc : Modern communication interface built with Hyperscale API
`.trim();

const ABOUT_TEXT = `
╔══════════════════════════════════════════╗
║              ABOUT ME                    ║
╚══════════════════════════════════════════╝

  Hello, I'm DarkSeidBull (Sachin Sahani)!

  I'm a Web3 Infrastructure Builder and Node Operator
  based in Mumbai, India.

  I've been running blockchain nodes since 2022, starting
  with early networks like Aptos and continuing across a
  wide range of testnet and mainnet ecosystems.

  My work focuses on operating non-custodial,
  production-grade infrastructure that supports network
  security, reliability, and long-term growth.

  Driven by curiosity and discipline — continuously
  exploring Cosmos, EVM, ZK, and AI-native networks with
  emphasis on correctness and operational responsibility.

  Quote:
  "Production-grade over hype. Running blockchain nodes
   since 2022 — correctness and operational responsibility
   first."
`.trim();

const GITHUB_TEXT = `
╔══════════════════════════════════════════╗
║         GITHUB CONTRIBUTIONS             ║
╚══════════════════════════════════════════╝

  Username : @0xDarkSeidBull
  Profile  : https://github.com/0xDarkSeidBull

  Contributions (last 12 months) : 530+

  ████████████████████████░░░░  530+ commits
  Streak   : Active daily contributor
  Focus    : Blockchain infra, dashboards, automation

  View live graph:
  https://ghchart.rshah.org/a855f7/0xDarkSeidBull
`.trim();

const SKILLS_TEXT = `
╔══════════════════════════════════════════╗
║             SKILLS                       ║
╚══════════════════════════════════════════╝

 LANGUAGES
  Python        ████████░░  82/100  Advanced
  Bash/Shell    █████████░  90/100  Expert
  JavaScript    ██████░░░░  68/100  Intermediate
  HTML/CSS      ███████░░░  72/100  Advanced
  SQL           █████░░░░░  55/100  Intermediate

 FRAMEWORKS / TOOLS
  FastAPI       ████████░░  78/100  Advanced
  Docker        ████████░░  85/100  Expert
  Linux(Ubuntu) █████████░  95/100  Expert
  Git/GitHub    ████████░░  88/100  Expert
  Node.js       ██████░░░░  60/100  Intermediate
  Svelte        █████░░░░░  55/100  Intermediate
  VPS Infra     █████████░  92/100  Expert
  API Systems   ███████░░░  75/100  Advanced

 BLOCKCHAIN / WEB3
  Validator     █████████░  95/100  Expert
  Cosmos        ████████░░  88/100  Expert
  EVM Chains    ███████░░░  75/100  Advanced
  Wallet Auto   █████████░  90/100  Expert
  RPC/APIs      ████████░░  80/100  Advanced
  Republic AI   █████████░  95/100  Expert
  Telemetry     ████████░░  78/100  Advanced
  ZK Networks   ██████░░░░  60/100  Intermediate

 DATABASE
  PostgreSQL    ██████░░░░  65/100  Intermediate
  SQLite        ███████░░░  70/100  Advanced
  MongoDB       █████░░░░░  55/100  Intermediate

 OTHERS
  Automation    █████████░  92/100  Expert
  Chrome Scale  ████████░░  85/100  Expert
  On-chain Ops  █████████░  90/100  Expert
  Testnet Farm  █████████░  95/100  Expert
`.trim();

const FUNFACTS_TEXT = `
╔══════════════════════════════════════════╗
║            MY FUN FACTS                  ║
╚══════════════════════════════════════════╝

  🤖  Runs dozens of wallets & nodes like a
      one-man ops army

  💪  Mixes gym discipline with tech obsession

  ⚙️  Loves building systems that save time
      & scale effort

  🟩  530+ GitHub contributions in the last year

  🔴  Node operator since 2022 —
      production-grade over hype

  🇮🇳  Building Web3 infra from Mumbai, India
`.trim();

const CONTACTS_TEXT = `
╔══════════════════════════════════════════╗
║              CONTACTS                    ║
╚══════════════════════════════════════════╝

  Email    : 0xdarkseidbull@gmail.com
  Phone    : +91 86528 94357
  Telegram : @DarkSeidBull
  GitHub   : https://github.com/0xDarkSeidBull
  Twitter  : https://x.com/cryptobhartiyax
  YouTube  : https://youtube.com/@CryptoBhartiya
`.trim();

const ALL_MEDIA_TEXT = `
╔══════════════════════════════════════════╗
║              ALL MEDIA                   ║
╚══════════════════════════════════════════╝

  GitHub    : https://github.com/0xDarkSeidBull
  Twitter X : https://x.com/cryptobhartiyax
  Twitter X : https://x.com/Web3Sachin
  YouTube   : https://youtube.com/@CryptoBhartiya
  Telegram  : https://t.me/GuruPediaChannel
  Telegram  : https://t.me/DarkSeidBull
  Email     : 0xdarkseidbull@gmail.com
`.trim();

// URLs to make clickable
const CLICKABLE_URLS = [
  "https://republicstats.xyz",
  "https://quipstats.vercel.app/",
  "https://github.com/0xDarkSeidBull",
  "https://github.com/0xDarkSeidBull/quipstats",
  "https://ghchart.rshah.org/a855f7/0xDarkSeidBull",
  "https://x.com/cryptobhartiyax",
  "https://x.com/Web3Sachin",
  "https://youtube.com/@CryptoBhartiya",
  "https://t.me/GuruPediaChannel",
  "https://t.me/DarkSeidBull",
  "https://redbelly.routescan.io/address/0xd688ccf03589347CEa7654F444458419069FdbBe",
  "https://explorer.republicai.io/validators/raivaloper1xcr42hlh85kutaqtmyxw2zu8pr3nk5rkh0nz2z",
];

function renderLine(line: string) {
  return line;
}

// ── Main OsSelect ──────────────────────────────────────────────────────────
function OsSelect() {
  const navigate = useNavigate();
  const [playing, setPlaying] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setButtonsVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const handleWindowsClick = () => {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 50);
  };

  const handleEnded = () => setPlaying(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SpiralAnimation />
      </div>

      <div className="flex items-center gap-6 relative z-10">
        <div
          className="transition-all ease-out"
          style={{
            transitionDuration: "900ms",
            transform: buttonsVisible ? "translateX(0)" : "translateX(-60vw)",
            opacity: buttonsVisible ? 1 : 0,
            willChange: "transform, opacity",
          }}
        >
          <HoverBorderGradient
            duration={1.2}
            onClick={handleWindowsClick}
            style={{ cursor: "pointer" }}
          >
            <span className="flex items-center gap-2.5">
              <WindowsLogo className="w-[18px] h-[18px]" />
              <span className="text-[13px] text-[#a0a0a0] font-normal tracking-wide">
                Windows
              </span>
            </span>
          </HoverBorderGradient>
        </div>

        <div
          className="transition-all ease-out"
          style={{
            transitionDuration: "900ms",
            transform: buttonsVisible ? "translateX(0)" : "translateX(60vw)",
            opacity: buttonsVisible ? 1 : 0,
            willChange: "transform, opacity",
          }}
        >
          <HoverBorderGradient
            duration={1.2}
            onClick={() => navigate({ to: "/terminal" })}
            style={{ cursor: "pointer" }}
          >
            <span className="flex items-center gap-2.5">
              <img
                src={linuxGif}
                alt="Linux"
                className="w-[22px] h-[22px] object-contain"
              />
              <span className="text-[13px] text-[#a0a0a0] font-normal tracking-wide">
                Linux
              </span>
            </span>
          </HoverBorderGradient>
        </div>
      </div>

      {playing && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center cursor-pointer"
          onClick={() => setPlaying(false)}
        >
          <video
            ref={videoRef}
            src="/windows-boot.mp4"
            className="w-full h-full object-contain"
            onEnded={handleEnded}
            playsInline
          />
        </div>
      )}
    </div>
  );
}