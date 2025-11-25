import { Activity, User, Code, Terminal, Box } from 'lucide-react';

export const INITIAL_STATE = {
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
                linkedin: "#", // Add your real link later
                instagram: "#"
            }
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
                github: "https://github.com/vatsal-jaiswal", // Placeholder
                email: "mailto:vatsal@bendoch.com",
                linkedin: "#"
            }
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
                linkedin: "#"
            }
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
                linkedin: "#"
            }
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
                linkedin: "#"
            }
        },
        {
            id: "akshit",
            name: "Akshit",
            os: "macOS",
            role: "Core Engineer",
            skills: ["SWIFT", "REACT", "SYSTEMS"],
            desc: "The missing link. Core systems arch.",
            status: "Deploying",
            socials: {
                github: "#",
                email: "mailto:akshit@bendoch.com",
                linkedin: "#"
            }
        },
    ],
    // ADDED: Projects List
    projects: [
        {
            id: "cli-tool",
            name: "Bendoch CLI",
            lang: "Node.js",
            desc: "Manage company infrastructure from the terminal.",
            url: "#"
        },
        {
            id: "mini-cpu",
            name: "Custom Mini CPU",
            lang: "Verilog/C",
            desc: "A custom instruction set architecture designed by Vatsal.",
            url: "#"
        },
        {
            id: "aura-farm",
            name: "Aura Farm Web",
            lang: "React/Three.js",
            desc: "High-performance marketing platform for Bendoch.",
            url: "#"
        },
        {
            id: "game-engine",
            name: "Java Game Engine",
            lang: "Java/LWJGL",
            desc: "Custom physics and rendering engine built by Aditya M.",
            url: "#"
        }
    ],
    files: [
        { name: "README.md", icon: <Activity size={14} />, content: "home" },
        { name: "team.json", icon: <User size={14} />, content: "team" },
        { name: "projects.go", icon: <Box size={14} />, content: "projects" }, // NEW FILE
        { name: "services.rs", icon: <Code size={14} />, content: "services" },
        { name: "contact.sh", icon: <Terminal size={14} />, content: "contact" },
    ],
};
