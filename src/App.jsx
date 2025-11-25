import React, { useState, useEffect, useRef } from "react";
import {
    Terminal,
    Cpu,
    Zap,
    Wifi,
    Battery,
    Command,
    GitBranch,
    Folder,
    FileCode,
    User,
    Server,
    Activity,
    X,
    Minus,
    Square,
    ChevronRight,
    Hash,
    Code,
    Power,
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Box,
    Instagram,
    Globe,
    Twitter,
} from "lucide-react";

/* ----------------------------------------------------------------------
   Bendoch OS - Terminal Interface
   Combined with Mock Data for stability
   ---------------------------------------------------------------------- */

const INITIAL_STATE = {
    currentDir: "~/bendoch-corp",
    activeBuffer: "readme.md",
    mode: "NORMAL",
    founders: [
        {
            id: "ajay",
            name: "Ajay Giri",
            os: "macOS/Linux",
            role: "Lead Architect",
            skills: ["RUST", "C++", "REACT", "NEXTJS", "PYTHON"],
            desc: "Bridging Silicon & Browser. Loves low & high level.",
            status: "Compiling...",
            socials: {
                github: "https://github.com/imlearning2024",
                email: "mailto:sinexcosecx@gmail.com",
                linkedin: "#",
                instagram: "https://instagram.com/_ajaygiri",
                twitter: "#",
                website: "https://ajaygiri.dev",
            },
        },
        {
            id: "vatsal",
            name: "Vatsal Jaiswal",
            os: "Arch Linux",
            role: "Low Level God",
            skills: ["C", "GDB", "SHELL", "ASSEMBLY", "OS DEV"],
            desc: "Built Mini CPU & GDB. Speaks to the machine.",
            status: "Debugging Kernel",
            socials: {
                github: "https://github.com/vatsal-jaiswal",
                email: "mailto:vatsal@bendoch.com",
                linkedin: "#",
                twitter: "#",
            },
        },
        {
            id: "aditya_m",
            name: "Aditya Mahore",
            os: "macOS",
            role: "AI/ML Lead",
            skills: ["JAVA", "SPRING", "AI/ML", "CPP", "GAME DEV"],
            desc: "Intelligence is optimization. Game dev wizard.",
            status: "Training Model",
            socials: {
                github: "#",
                email: "mailto:aditya.m@bendoch.com",
                linkedin: "#",
                instagram: "#",
            },
        },
        {
            id: "harsh",
            name: "Harsh Raj Singh",
            os: "Arch Linux",
            role: "Hardware/ECE",
            skills: ["ECE", "CIRCUITS", "IoT", "C", "STRATEGY"],
            desc: "Wise man. Efficiently lazy. Hardware expert.",
            status: "Optimizing Power",
            socials: {
                github: "#",
                email: "mailto:harsh@bendoch.com",
                linkedin: "#",
            },
        },
        {
            id: "aditya_d",
            name: "Aditya Dagar",
            os: "Linux/Win",
            role: "Mobile/Native",
            skills: ["ANDROID", "KOTLIN", "PYTHON", "CPP", "JAVA"],
            desc: "God of humor, health freak. Android specialist.",
            status: "Lifting Weights",
            socials: {
                github: "#",
                email: "mailto:aditya.d@bendoch.com",
                linkedin: "#",
                instagram: "#",
            },
        },
        {
            id: "akshit",
            name: "Akshit Kohli",
            os: "macOS",
            role: "Core Engineer",
            skills: ["Python", "REACT", "SYSTEMS"],
            desc: "Smartest Guy",
            status: "Deploying",
            socials: {
                github: "#",
                email: "mailto:akshit@bendoch.com",
                linkedin: "#",
            },
        },
    ],
    projects: [
        {
            id: "cli-tool",
            name: "Bendoch CLI",
            lang: "Node.js/Rust",
            author: "Ajay Giri",
            desc: "Manage company infrastructure from the terminal.",
            url: "#",
        },
        {
            id: "mini-cpu",
            name: "Custom Mini CPU",
            lang: "Verilog/C",
            author: "Vatsal Jaiswal",
            desc: "A custom instruction set architecture designed by Vatsal.",
            url: "#",
        },
        {
            id: "aura-farm",
            name: "Aura Farm Web",
            lang: "React/Three.js",
            author: "Ajay Giri",
            desc: "High-performance marketing platform for Bendoch.",
            url: "#",
        },
        {
            id: "game-engine",
            name: "Java Game Engine",
            lang: "Java/LWJGL",
            author: "Aditya Mahore",
            desc: "Custom physics and rendering engine built by Aditya M.",
            url: "#",
        },
        {
            id: "android-health",
            name: "Iron Health",
            lang: "Kotlin/Jetpack",
            author: "Aditya Dagar",
            desc: "Native Android app for tracking fitness metrics.",
            url: "#",
        },
    ],
    files: [
        { name: "README.md", icon: <Activity size={14} />, content: "home" },
        { name: "team.json", icon: <User size={14} />, content: "team" },
        { name: "projects.go", icon: <Box size={14} />, content: "projects" },
        { name: "services.rs", icon: <Code size={14} />, content: "services" },
        { name: "contact.sh", icon: <Terminal size={14} />, content: "contact" },
    ],
};

// --- COMPONENT: STATUS BAR ---
const StatusBar = ({ mode, file }) => (
    <div className="flex justify-between items-center bg-[#1a1b26] border-t border-[#414868] text-xs font-mono select-none">
        <div className="flex">
            <div
                className={`px-3 py-1 font-bold ${mode === "NORMAL"
                    ? "bg-blue-600 text-black"
                    : mode === "INSERT"
                        ? "bg-green-600 text-black"
                        : "bg-purple-600 text-black"
                    }`}
            >
                {mode}
            </div>
            <div className="px-3 py-1 bg-[#24283b] text-[#a9b1d6] flex items-center gap-2">
                <GitBranch size={12} /> main
            </div>
            <div className="px-3 py-1 bg-[#1f2335] text-[#7aa2f7]">{file}</div>
        </div>
        <div className="flex bg-[#1f2335]">
            <div className="px-3 py-1 text-[#a9b1d6]">utf-8</div>
            <div className="px-3 py-1 text-[#a9b1d6]">unix</div>
            <div className="px-3 py-1 bg-[#24283b] text-[#9ece6a]">100%</div>
        </div>
    </div>
);

// --- COMPONENT: FILE TREE ---
const FileTree = ({ activeFile, onSelect }) => (
    <div className="w-64 bg-[#16161e] border-r border-[#414868] flex flex-col hidden md:flex">
        <div className="p-3 text-[#7aa2f7] font-bold text-sm flex items-center gap-2">
            <Folder size={16} /> ~/BENDOCH-CORP
        </div>
        <div className="flex-1 overflow-y-auto font-mono text-sm">
            {INITIAL_STATE.files.map((file) => (
                <div
                    key={file.name}
                    onClick={() => onSelect(file)}
                    className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-[#292e42] ${activeFile === file.name
                        ? "bg-[#292e42] text-[#7aa2f7]"
                        : "text-[#565f89]"
                        }`}
                >
                    {file.icon}
                    {file.name}
                </div>
            ))}
            <div className="mt-4 px-4 text-[#414868] text-xs uppercase font-bold">
                External Deps
            </div>
            <div className="px-4 py-1 text-[#565f89] flex items-center gap-2 text-sm">
                <Hash size={12} /> node_modules
            </div>
            <div className="px-4 py-1 text-[#565f89] flex items-center gap-2 text-sm">
                <Hash size={12} /> target (rust)
            </div>
            <div className="px-4 py-1 text-[#565f89] flex items-center gap-2 text-sm">
                <Hash size={12} /> .git
            </div>
        </div>
    </div>
);

// --- COMPONENT: FOUNDER CARD (Updated with ALL Socials) ---
const FounderCard = ({ founder }) => (
    <div className="bg-[#24283b] border border-[#414868] rounded p-4 font-mono hover:border-[#7aa2f7] transition-all group relative overflow-hidden flex flex-col h-full">
        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
            {founder.os.includes("Arch") ? (
                <Cpu className="text-blue-400" />
            ) : (
                <Command className="text-gray-400" />
            )}
        </div>

        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#1a1b26] rounded-full flex items-center justify-center text-[#7aa2f7] font-bold border border-[#414868]">
                {founder.name.charAt(0)}
            </div>
            <div>
                <h3 className="text-[#c0caf5] font-bold">{founder.name}</h3>
                <p className="text-[#565f89] text-xs flex items-center gap-1">
                    <Activity size={10} /> {founder.status}
                </p>
            </div>
        </div>

        <div className="space-y-2 text-sm flex-grow">
            <div className="flex gap-2">
                <span className="text-[#bb9af7]">OS:</span>
                <span className="text-[#7dcfff]">{founder.os}</span>
            </div>
            <div className="flex gap-2">
                <span className="text-[#bb9af7]">ROLE:</span>
                <span className="text-[#e0af68]">{founder.role}</span>
            </div>
            <div className="mt-2 text-[#9aa5ce] italic text-xs border-l-2 border-[#414868] pl-2">
                "{founder.desc}"
            </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
            {founder.skills.map((skill) => (
                <span
                    key={skill}
                    className="px-1.5 py-0.5 bg-[#1f2335] text-[#9ece6a] text-[10px] rounded border border-[#414868]"
                >
                    {skill}
                </span>
            ))}
        </div>

        {/* UPDATED: Social Links Footer to include Instagram, Twitter, Website */}
        <div className="mt-4 pt-3 border-t border-[#414868] flex gap-3">
            {founder.socials.github && (
                <a
                    href={founder.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                    className="text-[#565f89] hover:text-[#c0caf5] transition-colors"
                >
                    <Github size={16} />
                </a>
            )}
            {founder.socials.linkedin && (
                <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                    className="text-[#565f89] hover:text-[#7aa2f7] transition-colors"
                >
                    <Linkedin size={16} />
                </a>
            )}
            {founder.socials.instagram && (
                <a
                    href={founder.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    title="Instagram"
                    className="text-[#565f89] hover:text-[#f472b6] transition-colors"
                >
                    <Instagram size={16} />
                </a>
            )}
            {founder.socials.twitter && (
                <a
                    href={founder.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    title="Twitter/X"
                    className="text-[#565f89] hover:text-white transition-colors"
                >
                    <Twitter size={16} />
                </a>
            )}
            {founder.socials.website && (
                <a
                    href={founder.socials.website}
                    target="_blank"
                    rel="noreferrer"
                    title="Website"
                    className="text-[#565f89] hover:text-[#9ece6a] transition-colors"
                >
                    <Globe size={16} />
                </a>
            )}
            {founder.socials.email && (
                <a
                    href={founder.socials.email}
                    title="Email"
                    className="text-[#565f89] hover:text-[#e0af68] transition-colors"
                >
                    <Mail size={16} />
                </a>
            )}
        </div>
    </div>
);

// --- COMPONENT: PROJECTS (Go Lang Style - Updated with Author) ---
const ProjectsBlock = ({ projects }) => (
    <div className="font-mono text-sm p-4">
        <div className="text-[#565f89] mb-4">// projects.go - Portfolio</div>
        <div className="space-y-6">
            <div className="text-[#bb9af7]">
                package <span className="text-[#c0caf5]">main</span>
            </div>

            <div className="text-[#bb9af7]">
                type <span className="text-[#e0af68]">Project</span> struct {"{"}
                <div className="pl-4 text-[#c0caf5]">Name string</div>
                <div className="pl-4 text-[#c0caf5]">Author string</div>
                <div className="pl-4 text-[#c0caf5]">Stack string</div>
                <div className="pl-4 text-[#c0caf5]">Desc string</div>
                {"}"}
            </div>

            <div className="text-[#bb9af7]">
                var <span className="text-[#c0caf5]">Portfolio</span> = []
                <span className="text-[#e0af68]">Project</span>
                {"{"}
            </div>

            <div className="pl-4 space-y-4">
                {projects.map((proj) => (
                    <div
                        key={proj.id}
                        className="group hover:bg-[#292e42] p-2 rounded cursor-pointer -ml-2 border border-transparent hover:border-[#414868] transition-all"
                    >
                        <div className="text-[#e0af68]">{"{"}</div>
                        <div className="pl-4">
                            <span className="text-[#9aa5ce]">Name:</span>{" "}
                            <span className="text-[#9ece6a]">"{proj.name}"</span>,
                        </div>
                        {/* ADDED: Author Field */}
                        <div className="pl-4">
                            <span className="text-[#9aa5ce]">Author:</span>{" "}
                            <span className="text-[#f7768e]">"{proj.author}"</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-[#9aa5ce]">Stack:</span>{" "}
                            <span className="text-[#7aa2f7]">"{proj.lang}"</span>,
                        </div>
                        <div className="pl-4 flex items-center gap-2">
                            <span className="text-[#9aa5ce]">Desc:</span>{" "}
                            <span className="text-[#bb9af7]">"{proj.desc}"</span>
                            <ExternalLink
                                size={12}
                                className="opacity-0 group-hover:opacity-100 text-[#7aa2f7]"
                            />
                        </div>
                        <div className="text-[#e0af68]">{"}"},</div>
                    </div>
                ))}
            </div>

            <div className="text-[#bb9af7]">{"}"}</div>
        </div>
    </div>
);

// --- COMPONENT: SERVICES (Rust Code Style) ---
const ServicesBlock = () => (
    <div className="font-mono text-sm p-4">
        <div className="text-[#565f89] mb-4">// services.rs - Core Offerings</div>
        <div className="space-y-6">
            {[
                {
                    fn: "low_level_systems",
                    type: "Kernel::Module",
                    desc: "Drivers, Embedded, GDB Customization",
                },
                {
                    fn: "web_infrastructure",
                    type: "React::NextJS",
                    desc: "Full Stack, Scalable Architectures",
                },
                {
                    fn: "artificial_intelligence",
                    type: "Model::Training",
                    desc: "Python, PyTorch, Optimization",
                },
                {
                    fn: "mobile_native",
                    type: "Android::Kotlin",
                    desc: "Native Apps, Cross-Platform Integration",
                },
            ].map((srv) => (
                <div
                    key={srv.fn}
                    className="pl-4 border-l border-[#292e42] hover:bg-[#1f2335] p-2 transition-colors"
                >
                    <span className="text-[#bb9af7]">fn</span>{" "}
                    <span className="text-[#7aa2f7]">{srv.fn}</span>() {"->"}{" "}
                    <span className="text-[#e0af68]">{srv.type}</span> {"{"}
                    <div className="pl-4 text-[#9ece6a]">return "{srv.desc}";</div>
                    {"}"}
                </div>
            ))}
        </div>
    </div>
);

// --- MAIN APP COMPONENT ---
export default function BendochTerminal() {
    const [activeTab, setActiveTab] = useState("home");
    const [command, setCommand] = useState("");
    const [terminalOutput, setTerminalOutput] = useState([
        "Bendoch OS v1.0.0 [x86_64]",
        "Copyright (c) 2024 Bendoch Corp",
        "Connected to server...",
    ]);
    const bottomRef = useRef(null);

    const handleCommand = (e) => {
        if (e.key === "Enter") {
            const cmd = command.trim().toLowerCase();
            let response = "";

            switch (cmd) {
                case "ls":
                    response =
                        "README.md  team.json  projects.go  services.rs  contact.sh";
                    break;
                case "whoami":
                    response = "guest@bendoch-corp";
                    break;
                case "clear":
                    setTerminalOutput([]);
                    setCommand("");
                    return;
                case "sudo rm -rf /":
                    response = "Permission denied. Nice try, script kiddie.";
                    break;
                case "cat team.json":
                    setActiveTab("team");
                    response = "Opening buffer: team.json...";
                    break;
                case "cat projects.go":
                    setActiveTab("projects");
                    response = "Opening buffer: projects.go...";
                    break;
                case "cat services.rs":
                    setActiveTab("services");
                    response = "Opening buffer: services.rs...";
                    break;
                case "neofetch":
                    setActiveTab("home");
                    response = "Executing neofetch...";
                    break;
                case "help":
                    response = "Available commands: ls, cat, neofetch, clear";
                    break;
                default:
                    response = `bash: ${cmd}: command not found`;
            }

            setTerminalOutput((prev) => [...prev, `$ ${command}`, response]);
            setCommand("");
            setTimeout(
                () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
                100,
            );
        }
    };

    return (
        <div className="h-screen w-full bg-[#1a1b26] text-[#a9b1d6] flex flex-col font-mono overflow-hidden">
            {/* 1. TOP BAR */}
            <div className="h-8 bg-[#16161e] flex items-center justify-between px-4 select-none border-b border-[#1f2335]">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#f7768e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#e0af68]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#9ece6a]"></div>
                </div>
                <div className="text-xs text-[#565f89]">nvim - bendoch_corp</div>
                <div className="flex items-center gap-2 text-xs">
                    <Wifi size={12} className="text-[#7aa2f7]" />
                    <Battery size={12} className="text-[#9ece6a]" />
                </div>
            </div>

            {/* 2. MAIN WORKSPACE */}
            <div className="flex-1 flex overflow-hidden">
                {/* FILE EXPLORER */}
                <FileTree
                    activeFile={
                        activeTab === "home"
                            ? "README.md"
                            : activeTab === "team"
                                ? "team.json"
                                : activeTab === "projects"
                                    ? "projects.go"
                                    : activeTab === "services"
                                        ? "services.rs"
                                        : "contact.sh"
                    }
                    onSelect={(file) => setActiveTab(file.content)}
                />

                {/* EDITOR AREA */}
                <div className="flex-1 flex flex-col bg-[#24283b] relative">
                    {/* Breadcrumbs/Tab Line */}
                    <div className="flex bg-[#16161e] overflow-x-auto">
                        {INITIAL_STATE.files.map((f) => (
                            <div
                                key={f.name}
                                onClick={() => setActiveTab(f.content)}
                                className={`px-4 py-2 text-sm border-r border-[#1f2335] cursor-pointer flex items-center gap-2 whitespace-nowrap ${activeTab === f.content
                                    ? "bg-[#24283b] text-[#c0caf5]"
                                    : "text-[#565f89]"
                                    }`}
                            >
                                {f.icon} {f.name}{" "}
                                {activeTab === f.content && (
                                    <X size={12} className="ml-2 hover:text-red-400" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CONTENT RENDERER */}
                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                        {/* HOME TAB */}
                        {activeTab === "home" && (
                            <div className="animate-in fade-in duration-500">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="hidden md:block text-[#7aa2f7] whitespace-pre font-bold select-none leading-tight">
                                        {`
    .d8888b.   .d8888b.  
   d88P  Y88b d88P  Y88b 
   888    888 888    888 
   888    888 888        
   888    888 888        
   888    888 888    888 
   Y88b  d88P Y88b  d88P 
    "Y8888P"   "Y8888P"  
`}
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="text-3xl text-[#c0caf5] font-bold mb-4">
                                            Bendoch Corporation{" "}
                                            <span className="text-[#565f89] text-lg">@bendoch</span>
                                        </h1>
                                        <p>
                                            <span className="text-[#bb9af7] font-bold">OS:</span>{" "}
                                            BdocsOs
                                        </p>
                                        <p>
                                            <span className="text-[#bb9af7] font-bold">Kernel:</span>{" "}
                                            mahorarch
                                        </p>
                                        <p>
                                            <span className="text-[#bb9af7] font-bold">Mission:</span>{" "}
                                            "G*nd Masti"
                                        </p>

                                        <div className="flex gap-4 mt-6">
                                            <a
                                                href="https://github.com/imlearning2024"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-4 py-2 bg-[#1f2335] border border-[#414868] text-[#7aa2f7] rounded flex items-center gap-2 hover:bg-[#292e42] transition-colors"
                                            >
                                                <Github size={16} /> GitHub
                                            </a>
                                            <a
                                                href="mailto:sinexcosecx@gmail.com"
                                                className="px-4 py-2 bg-[#1f2335] border border-[#414868] text-[#9ece6a] rounded flex items-center gap-2 hover:bg-[#292e42] transition-colors"
                                            >
                                                <Mail size={16} /> Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TEAM TAB */}
                        {activeTab === "team" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 animate-in zoom-in-95 duration-300">
                                {INITIAL_STATE.founders.map((f) => (
                                    <FounderCard key={f.id} founder={f} />
                                ))}
                                {/* Empty slot for expansion */}
                                <div className="border border-dashed border-[#414868] rounded p-4 flex flex-col items-center justify-center text-[#414868] hover:text-[#565f89] hover:border-[#565f89] cursor-pointer transition-colors min-h-[200px]">
                                    <PlusIcon />
                                    <span className="mt-2 text-sm">mkdir new_member</span>
                                </div>
                            </div>
                        )}

                        {/* PROJECTS TAB (NEW) */}
                        {activeTab === "projects" && (
                            <ProjectsBlock projects={INITIAL_STATE.projects} />
                        )}

                        {/* SERVICES TAB */}
                        {activeTab === "services" && <ServicesBlock />}

                        {/* CONTACT TAB */}
                        {activeTab === "contact" && (
                            <div className="font-mono text-sm max-w-2xl">
                                <div className="text-[#565f89] mb-4">#!/bin/bash</div>
                                <form
                                    className="space-y-4"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <div>
                                        <p className="text-[#bb9af7]">echo "Enter your email:"</p>
                                        <input
                                            type="email"
                                            className="w-full bg-transparent border-b border-[#414868] focus:border-[#7aa2f7] outline-none py-1 text-[#c0caf5]"
                                            placeholder="user@client.com"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[#bb9af7]">
                                            echo "Project Requirements:"
                                        </p>
                                        <textarea
                                            rows={4}
                                            className="w-full bg-[#1f2335] mt-2 border border-[#414868] rounded p-2 text-[#c0caf5] focus:border-[#7aa2f7] outline-none"
                                            placeholder="rm -rf my_competitors..."
                                        ></textarea>
                                    </div>
                                    <button className="px-4 py-2 bg-[#7aa2f7] text-[#1a1b26] font-bold rounded hover:bg-[#2ac3de] transition-colors">
                                        ./send_message.sh
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>

                    {/* INTEGRATED TERMINAL (BOTTOM) */}
                    <div className="h-32 bg-[#1a1b26] border-t border-[#414868] p-2 overflow-y-auto font-mono text-sm">
                        {terminalOutput.map((line, i) => (
                            <div key={i} className="text-[#a9b1d6]">
                                {line}
                            </div>
                        ))}
                        <div className="flex items-center gap-2" ref={bottomRef}>
                            <span className="text-[#9ece6a]">ajay@bendoch:~$</span>
                            <input
                                type="text"
                                value={command}
                                onChange={(e) => setCommand(e.target.value)}
                                onKeyDown={handleCommand}
                                className="bg-transparent outline-none flex-1 text-[#c0caf5]"
                                autoFocus
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. STATUS BAR */}
            <StatusBar
                mode={activeTab === "contact" ? "INSERT" : "NORMAL"}
                file={activeTab === "home" ? "readme.md" : activeTab}
            />
        </div>
    );
}

function PlusIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    );
}
