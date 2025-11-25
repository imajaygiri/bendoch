import React, { useState, useEffect } from "react";
import {
    Code,
    Terminal,
    Cpu,
    Zap,
    Smartphone,
    Globe,
    MessageSquare,
    Github,
    Linkedin,
    Mail,
    ArrowRight,
    Menu,
    X,
    Database,
    Layers,
    Activity,
} from "lucide-react";

/* DATA CONFIGURATION 
  ------------------
  In the future, you can replace this 'founders' array with a fetch() call 
  to your backend API (e.g., fetch('/api/founders')).
*/

const founders = [
    {
        id: 1,
        name: "Ajay Giri",
        role: "Lead Architect & Full Stack",
        quote: "Bridging the gap between silicon and browser.",
        desc: "Loves computer low level and high level programming. The bridge between raw C code and modern React interfaces.",
        skills: ["Rust", "C/C++", "React/NextJS", "Python", "Express"],
        icon: <Terminal className="w-6 h-6 text-emerald-400" />,
        color: "emerald",
    },
    {
        id: 2,
        name: "Vatsal Jaiswal",
        role: "Systems & Kernel Engineer",
        quote: "I speak to the machine directly.",
        desc: "Low level god. Built his own GDB, Shell, and Mini CPU. If it involves memory management or kernels, he owns it.",
        skills: ["C", "Assembly", "OS Dev", "System Design", "GDB"],
        icon: <Cpu className="w-6 h-6 text-red-400" />,
        color: "red",
    },
    {
        id: 3,
        name: "Aditya Mahore",
        role: "AI/ML & Enterprise Lead",
        quote: "Intelligence is just complex optimization.",
        desc: "Intelligent and articulate. A powerhouse in Java/Spring Boot and AI/ML models. Also a game dev wizard.",
        skills: ["Java/Spring", "AI/ML", "C++", "Python", "Game Dev"],
        icon: <Database className="w-6 h-6 text-purple-400" />,
        color: "purple",
    },
    {
        id: 4,
        name: "Harsh Raj Singh",
        role: "Hardware & Strategy",
        quote: "Efficiency is the art of laziness.",
        desc: "ECE Expert. The wise man of the group. He brings hardware knowledge and strategic thinking (and efficient laziness).",
        skills: ["Embedded Systems", "IoT", "Circuit Design", "Strategy", "C"],
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        color: "yellow",
    },
    {
        id: 5,
        name: "Aditya Dagar",
        role: "Mobile & native Dev",
        quote: "Strong code, stronger lifts.",
        desc: "God of humor and health freak. Dominiates the mobile ecosystem with Android/Kotlin and low-level C++ integration.",
        skills: ["Android", "Kotlin", "Python", "C++", "Java"],
        icon: <Smartphone className="w-6 h-6 text-blue-400" />,
        color: "blue",
    },
    {
        id: 6,
        name: "Akshit Kohli",
        role: "The Smartest Guy",
        quote: "Loading future potential...",
        desc: "The final piece of the puzzle. Bringing unique expertise to the Bendoch ecosystem.",
        skills: ["Full Stack", "DevOps", "Cloud", "Security", "Vision"],
        icon: <Layers className="w-6 h-6 text-pink-400" />,
        color: "pink",
    },
];

const services = [
    {
        title: "High-Performance Systems",
        desc: "We write code that hits the metal. Custom kernels, drivers, and ultra-low latency engines using Rust and C.",
        icon: <Cpu className="w-8 h-8 mb-4 text-emerald-400" />,
    },
    {
        title: "AI & Intelligent Backends",
        desc: "Scalable Java Spring Boot architectures integrated with cutting-edge AI/ML models.",
        icon: <Database className="w-8 h-8 mb-4 text-purple-400" />,
    },
    {
        title: "Cross-Platform Ecosystems",
        desc: "From NextJS web apps to native Android applications, we build cohesive digital experiences.",
        icon: <Globe className="w-8 h-8 mb-4 text-blue-400" />,
    },
];

export default function BendochCorp() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("all");

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
            {/* BACKGROUND EFFECTS */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/10 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse" />
            </div>

            {/* NAVBAR */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div
                        className="flex items-center gap-2 font-mono text-xl font-bold tracking-tighter text-white cursor-pointer"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <div className="w-8 h-8 bg-gradient-to-tr from-emerald-500 to-blue-600 rounded flex items-center justify-center text-white">
                            B
                        </div>
                        Bendoch <span className="text-emerald-500">Corporation</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                        {["Services", "Team", "Vision", "Contact"].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="hover:text-emerald-400 transition-colors uppercase tracking-widest"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 py-4 flex flex-col items-center gap-4 animate-in slide-in-from-top-5">
                        {["Services", "Team", "Vision", "Contact"].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-slate-300 hover:text-emerald-400 uppercase tracking-widest"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            {/* HERO SECTION */}
            <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-8 animate-bounce">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        SYSTEMS ONLINE // READY FOR DEPLOYMENT
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-tight mb-6">
                        ENGINEERING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                            THE IMPOSSIBLE
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                        We are a collective of 6 engineers specializing in Low-level
                        Systems, AI/ML, and Scalable Web Architectures. We don't just write
                        code; we build the future.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded flex items-center justify-center gap-2 transition-transform hover:scale-105"
                        >
                            Start a Project <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scrollToSection("team")}
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded flex items-center justify-center gap-2 border border-white/10 transition-colors"
                        >
                            Meet the Engineers
                        </button>
                    </div>
                </div>
            </section>

            {/* SERVICES STRIP */}
            <section
                id="services"
                className="relative z-10 py-20 border-y border-white/5 bg-slate-900/50"
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2"
                        >
                            {s.icon}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                {s.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TEAM SECTION (THE CORE) */}
            <section id="team" className="relative z-10 py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            The <span className="text-emerald-400">Bendoch</span> 6
                        </h2>
                        <p className="text-slate-400 max-w-xl text-lg">
                            A balanced team of low-level gods, full-stack architects, and
                            creative minds. Each member brings a unique specialization to the
                            table.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {founders.map((founder) => (
                            <div
                                key={founder.id}
                                className="group relative bg-slate-900 rounded-xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-500"
                            >
                                {/* Aura Glow on Hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br from-${founder.color}-500/0 to-${founder.color}-500/0 group-hover:from-${founder.color}-500/10 group-hover:to-transparent transition-all duration-500`}
                                />

                                <div className="p-8 relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white/5 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                                            {founder.icon}
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href="#"
                                                className="p-2 text-slate-500 hover:text-white transition-colors"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                            <a
                                                href="#"
                                                className="p-2 text-slate-500 hover:text-white transition-colors"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                                        {founder.name}
                                    </h3>
                                    <p
                                        className={`text-sm font-mono text-${founder.color}-400 mb-4 uppercase tracking-wider`}
                                    >
                                        {founder.role}
                                    </p>

                                    <p className="text-slate-300 mb-6 leading-relaxed min-h-[80px]">
                                        {founder.desc}
                                    </p>

                                    <div className="border-t border-white/10 pt-6 mb-6">
                                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-bold">
                                            Tech Stack
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {founder.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300 border border-white/5 hover:border-emerald-500/30 transition-colors cursor-default"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-black/20 p-4 rounded border-l-2 border-emerald-500 italic text-slate-400 text-sm">
                                        "{founder.quote}"
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH SCROLLER (Vision) */}
            <section
                id="vision"
                className="py-20 bg-slate-900 border-y border-white/10 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                    <h2 className="text-3xl font-bold text-white">
                        Full Spectrum Engineering
                    </h2>
                </div>

                {/* Simple CSS Marquee simulation */}
                <div className="flex justify-center gap-4 flex-wrap max-w-5xl mx-auto px-6">
                    {[
                        "RUST",
                        "C++",
                        "JAVA",
                        "REACT",
                        "PYTHON",
                        "ASSEMBLY",
                        "NEXT.JS",
                        "DOCKER",
                        "KUBERNETES",
                        "ANDROID",
                        "SPRING BOOT",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="text-4xl md:text-6xl font-black text-slate-800 hover:text-slate-700 select-none transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-900 to-slate-950 p-8 md:p-12 rounded-3xl border border-white/10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Scale?
                    </h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        Whether you need a custom OS kernel, an AI model, or a full-stack
                        web application, Bendoch Corp has the engineering talent.
                    </p>

                    <form
                        className="max-w-md mx-auto space-y-4 text-left"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@company.com"
                                className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                                Project Brief
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Tell us about the impossible problem you need solved..."
                                className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                            ></textarea>
                        </div>
                        <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                            Send Transmission
                        </button>
                    </form>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 px-6 bg-slate-950 border-t border-white/5 text-center">
                <div className="flex items-center justify-center gap-2 font-mono text-xl font-bold tracking-tighter text-white mb-6">
                    <div className="w-6 h-6 bg-gradient-to-tr from-emerald-500 to-blue-600 rounded flex items-center justify-center text-white text-xs">
                        B
                    </div>
                    BENDOCH
                </div>
                <div className="flex justify-center gap-8 mb-8">
                    <a
                        href="#"
                        className="text-slate-500 hover:text-white transition-colors"
                    >
                        <Github />
                    </a>
                    <a
                        href="#"
                        className="text-slate-500 hover:text-white transition-colors"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="#"
                        className="text-slate-500 hover:text-white transition-colors"
                    >
                        <Mail />
                    </a>
                </div>
                <p className="text-slate-600 text-sm">
                    © {new Date().getFullYear()} Bendoch Corporation. Engineering the
                    Future.
                </p>
            </footer>
        </div>
    );
}
