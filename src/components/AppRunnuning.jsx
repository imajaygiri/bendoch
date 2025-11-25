import React, { useState, useEffect, useRef } from "react";
import ProjectsBlock from "./components/ProjectsBlock";
import { INITIAL_STATE } from "./mockdata";
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
} from "lucide-react";
import FileTree from "./components/FileTree";
import FounderCard from "./components/FounderCard";
import ServicesBlock from "./components/ServiceBlock";
import StatusBar from "./components/StatusBar";
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
                                            Bendoch Corp{" "}
                                            <span className="text-[#565f89] text-lg">@bendoch</span>
                                        </h1>
                                        <p>
                                            <span className="text-[#bb9af7] font-bold">OS:</span>{" "}
                                            BdocsOs
                                        </p>
                                        <p>
                                            <span className="text-[#bb9af7] font-bold">Kernel:</span>{" "}
                                            mahorach
                                        </p>
                                        <p>
                                            <span className="text-[#bb9af7] font-bold">Mission:</span>{" "}
                                            "G#nd Masti"
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
