import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/terminal")({
  component: LinuxTerminal,
});

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
  /exit                 Back to OS select
`.trim();

const FULLSTATS_TEXT = `
╔══════════════════════════════════════════╗
║         DARKSEIDBULL — FULL STATS        ║
╚══════════════════════════════════════════╝

 IDENTITY
  Handle   : DarkSeidBull (Sachin Sahani)
  Location : Mumbai, India
  Role     : Web3 Infra Builder & Node Operator
  Since    : 2022

 ACTIVE NODES
  Redbelly Network   — Mainnet Validator
  Republic AI        — Testnet Validator + Moderator

 METRICS
  GitHub Contributions : 530+  (last 12 months)
  YouTube Subscribers  : 900+  (@CryptoBhartiya)

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
     https://republicstats.xyz

 [2] QuipStats Dashboard
     https://quipstats.vercel.app/

 [3] Multi Wallet Automation Suite
     Tags : Python, Bash, Shell

 [4] Node Infrastructure Lab
     Tags : Docker, Linux, Cosmos, EVM

 [5] Community Guides & Docs
     Tags : Shell, Markdown

 [6] Dark Chat
     Tags : Node.js, API, React
`.trim();

const ABOUT_TEXT = `
╔══════════════════════════════════════════╗
║              ABOUT ME                    ║
╚══════════════════════════════════════════╝

  Hello, I'm DarkSeidBull (Sachin Sahani)!
  Web3 Infrastructure Builder and Node Operator
  Based in Mumbai, India.
  Running blockchain nodes since 2022.

  Quote:
  "Production-grade over hype."
`.trim();

const GITHUB_TEXT = `
╔══════════════════════════════════════════╗
║         GITHUB CONTRIBUTIONS             ║
╚══════════════════════════════════════════╝

  Username : @0xDarkSeidBull
  Profile  : https://github.com/0xDarkSeidBull
  Contributions (last 12 months) : 530+
`.trim();

const SKILLS_TEXT = `
╔══════════════════════════════════════════╗
║             SKILLS                       ║
╚══════════════════════════════════════════╝

 LANGUAGES
  Python        82/100  Advanced
  Bash/Shell    90/100  Expert
  JavaScript    68/100  Intermediate
  HTML/CSS      72/100  Advanced

 BLOCKCHAIN / WEB3
  Validator     95/100  Expert
  Cosmos        88/100  Expert
  EVM Chains    75/100  Advanced
  Wallet Auto   90/100  Expert
  Republic AI   95/100  Expert

 TOOLS
  Docker        85/100  Expert
  Linux         95/100  Expert
  Git/GitHub    88/100  Expert
  VPS Infra     92/100  Expert
`.trim();

const FUNFACTS_TEXT = `
╔══════════════════════════════════════════╗
║            MY FUN FACTS                  ║
╚══════════════════════════════════════════╝

  Runs dozens of wallets & nodes solo
  Mixes gym discipline with tech obsession
  530+ GitHub contributions in the last year
  Node operator since 2022
  Building Web3 infra from Mumbai, India
`.trim();

const CONTACTS_TEXT = `
╔══════════════════════════════════════════╗
║              CONTACTS                    ║
╚══════════════════════════════════════════╝

  Email    : 0xdarkseidbull@gmail.com
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
  Email     : 0xdarkseidbull@gmail.com
`.trim();

const URL_REGEX = /(https?:\/\/[^\s]+)/g;

function renderLineWithLinks(text: string) {
  const parts = text.split(URL_REGEX);
  return parts.map((part, i) => {
    if (URL_REGEX.test(part)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline hover:text-cyan-300"
          onClick={(e) => e.stopPropagation()}
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

type Line = { text: string; isCommand?: boolean };

function LinuxTerminal() {
  const navigate = useNavigate();
  const [lines, setLines] = useState<Line[]>([
    { text: "Welcome to DarkSeidBull Terminal v1.0" },
    { text: "Type /help to see available commands." },
    { text: "" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [
      { text: `root@darkseidbull:~# ${cmd}`, isCommand: true },
    ];

    const map: Record<string, string> = {
      "/help": HELP_TEXT,
      "/fullstats": FULLSTATS_TEXT,
      "/my-projects": PROJECTS_TEXT,
      "/about-me": ABOUT_TEXT,
      "/github-contributions": GITHUB_TEXT,
      "/skills": SKILLS_TEXT,
      "/my-fun-facts": FUNFACTS_TEXT,
      "/contacts": CONTACTS_TEXT,
      "/all-media": ALL_MEDIA_TEXT,
    };

    if (trimmed === "/clear") {
      setLines([{ text: "" }]);
      setInput("");
      return;
    }
    if (trimmed === "/exit" || trimmed === "exit") {
      navigate({ to: "/os-select" });
      return;
    }
    if (map[trimmed]) {
      map[trimmed].split("\n").forEach((l) => newLines.push({ text: l }));
    } else {
      newLines.push({ text: `bash: ${cmd}: command not found. Try /help` });
    }

    newLines.push({ text: "" });
    setLines((prev) => [...prev, ...newLines]);
    setInput("");
  };

  return (
    <div
      className="min-h-screen w-full bg-black text-green-400 font-mono p-4 flex flex-col"
      style={{ fontFamily: "'Courier New', monospace" }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-green-900 pb-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-green-600 text-xs">root@darkseidbull: ~</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate({ to: "/os-select" });
          }}
          className="ml-auto text-green-700 hover:text-green-400 text-xs transition-colors"
        >
          [exit]
        </button>
      </div>

      <div className="flex-1 overflow-y-auto text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap ${line.isCommand ? "text-green-300" : "text-green-400"}`}
          >
            {renderLineWithLinks(line.text)}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="flex items-center gap-2 mt-2 border-t border-green-900 pt-2">
        <span className="text-green-300 text-sm whitespace-nowrap">
          root@darkseidbull:~#
        </span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.trim()) handleCommand(input);
          }}
          className="flex-1 bg-transparent text-green-400 text-sm outline-none caret-green-400"
          placeholder="type /help..."
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}