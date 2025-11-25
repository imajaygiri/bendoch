import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Github, Linkedin, Mail, 
  Twitter, Globe, Instagram, Code, Cpu, Database, 
  Smartphone, Layers, Zap, ExternalLink, User 
} from 'lucide-react';

/* --------------------------------------------------------------------------------
   DATA CONFIGURATION
   -------------------------------------------------------------------------------- */

const TEAM = [
  {
    id: "ajay",
    name: "Ajay Giri",
    role: "Lead Architect & Full Stack",
    desc: "Bridging the gap between Silicon and Browser. Expert in Rust, C++, React, and Python.",
    skills: ["Rust", "React", "NextJS", "C++", "Python"],
    socials: {
      github: "https://github.com/imlearning2024",
      email: "mailto:sinexcosecx@gmail.com",
      linkedin: "#",
      twitter: "#",
      website: "https://ajaygiri.dev",
      instagram: "https://instagram.com/_ajaygiri"
    }
  },
  {
    id: "vatsal",
    name: "Vatsal Jaiswal",
    role: "Systems & Kernel Engineer",
    desc: "Low-level specialist. Creator of custom Mini CPUs, Shells, and GDB implementations.",
    skills: ["C", "Assembly", "OS Dev", "GDB", "Linux"],
    socials: {
      github: "https://github.com/vatsal-jaiswal",
      email: "mailto:vatsal@bendoch.com",
      linkedin: "#"
    }
  },
  {
    id: "aditya_m",
    name: "Aditya Mahore",
    role: "AI/ML & Game Dev Lead",
    desc: "The intelligence engine. Building complex AI models and physics-based game engines.",
    skills: ["Java", "Spring Boot", "AI/ML", "C++", "OpenGL"],
    socials: {
      github: "#",
      email: "mailto:aditya.m@bendoch.com",
      linkedin: "#"
    }
  },
  {
    id: "harsh",
    name: "Harsh Raj Singh",
    role: "Hardware Strategy & ECE",
    desc: "The hardware interface. Expert in Electronics, Circuit Design, and strategic optimization.",
    skills: ["ECE", "IoT", "Embedded C", "Circuits", "Strategy"],
    socials: {
      github: "#",
      email: "mailto:harsh@bendoch.com",
      linkedin: "#"
    }
  },
  {
    id: "aditya_d",
    name: "Aditya Dagar",
    role: "Mobile & Native Engineering",
    desc: "Android specialist focusing on native performance, Kotlin, and cross-platform architecture.",
    skills: ["Android", "Kotlin", "Java", "Python", "C++"],
    socials: {
      github: "#",
      email: "mailto:aditya.d@bendoch.com",
      linkedin: "#"
    }
  },
  {
    id: "akshit",
    name: "Akshit",
    role: "Core Systems Engineer",
    desc: "Connecting the dots between core systems and modern interfaces.",
    skills: ["Swift", "React", "Systems", "Cloud", "DevOps"],
    socials: {
      github: "#",
      email: "mailto:akshit@bendoch.com",
      linkedin: "#"
    }
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "Bendoch CLI Tool",
    desc: "A Rust-based command line interface for managing distributed company infrastructure.",
    author: "Ajay Giri",
    tech: "Rust, Clap, Node.js",
    category: "DevOps"
  },
  {
    id: 2,
    title: "Custom Instruction Set CPU",
    desc: "A fully functional Mini CPU design with a custom instruction set and compiler.",
    author: "Vatsal Jaiswal",
    tech: "Verilog, C, Assembly",
    category: "Hardware"
  },
  {
    id: 3,
    title: "Iron Health Tracker",
    desc: "Native Android application for tracking advanced fitness metrics and biometrics.",
    author: "Aditya Dagar",
    tech: "Kotlin, Jetpack Compose",
    category: "Mobile"
  },
  {
    id: 4,
    title: "Java Physics Engine",
    desc: "A high-performance 2D/3D physics and rendering engine built from scratch.",
    author: "Aditya Mahore",
    tech: "Java, LWJGL, OpenGL",
    category: "Game Dev"
  },
  {
    id: 5,
    title: "Smart Circuit Controller",
    desc: "IoT based circuit controller for home automation and energy efficiency.",
    author: "Harsh Raj Singh",
    tech: "Embedded C, IoT, PCB",
    category: "IoT"
  }
];

const SERVICES = [
  {
    title: "Low-Level Systems",
    desc: "We go where others can't. Custom drivers, kernels, and embedded systems.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "AI & Machine Learning",
    desc: "Intelligent models trained on your data to optimize business logic.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Full Stack Web",
    desc: "Scalable, high-performance web applications using React and NextJS.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Mobile Native",
    desc: "Performance-critical Android and iOS applications.",
    icon: <Smartphone className="w-6 h-6" />
  }
];

/* --------------------------------------------------------------------------------
   COMPONENTS
   -------------------------------------------------------------------------------- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-white">
            <Layers size={18} />
          </div>
          BENDOCH<span className="text-emerald-500">CORP</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {['About', 'Team', 'Services', 'Projects', 'Contact'].map(item => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-white transition-colors">
              {item}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button onClick={() => scrollTo('contact')} className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/5">
            Get in Touch
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          {['About', 'Team', 'Services', 'Projects', 'Contact'].map(item => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left text-lg text-slate-300 hover:text-emerald-400">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16 px-4">
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h2>
    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mb-6"></div>
    <p className="text-slate-400 max-w-2xl mx-auto text-lg">{subtitle}</p>
  </div>
);

const TeamCard = ({ member }) => (
  <div className="group relative bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-emerald-500/20"></div>

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-2xl font-bold text-emerald-500 shadow-lg">
          {member.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{member.name}</h3>
          <p className="text-emerald-500/80 text-sm font-medium uppercase tracking-wide">{member.role}</p>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-[60px]">
        {member.desc}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {member.skills.map(skill => (
          <span key={skill} className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 rounded-full border border-white/5">
            {skill}
          </span>
        ))}
      </div>

      {/* Socials - Dynamic Loop */}
      <div className="flex gap-4 pt-4 border-t border-white/5">
        {member.socials.github && (
          <a href={member.socials.github} className="text-slate-500 hover:text-white transition-colors"><Github size={18} /></a>
        )}
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} className="text-slate-500 hover:text-blue-400 transition-colors"><Linkedin size={18} /></a>
        )}
        {member.socials.twitter && (
          <a href={member.socials.twitter} className="text-slate-500 hover:text-sky-400 transition-colors"><Twitter size={18} /></a>
        )}
        {member.socials.website && (
          <a href={member.socials.website} className="text-slate-500 hover:text-emerald-400 transition-colors"><Globe size={18} /></a>
        )}
        {member.socials.instagram && (
          <a href={member.socials.instagram} className="text-slate-500 hover:text-pink-400 transition-colors"><Instagram size={18} /></a>
        )}
        {member.socials.email && (
          <a href={member.socials.email} className="text-slate-500 hover:text-yellow-400 transition-colors"><Mail size={18} /></a>
        )}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 group">
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 rounded text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
          {project.category}
        </span>
        <ExternalLink size={20} className="text-slate-500 group-hover:text-white transition-colors" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 mb-6 leading-relaxed">
        {project.desc}
      </p>

      <div className="flex items-center gap-2 mb-6 text-sm text-slate-300">
        <Code size={16} className="text-emerald-500" />
        <span>{project.tech}</span>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs text-white">
            <User size={12} />
          </div>
          <span className="text-sm text-slate-500">Built by <span className="text-slate-300 font-medium">{project.author}</span></span>
        </div>
      </div>
    </div>
  </div>
);

/* --------------------------------------------------------------------------------
   MAIN APP
   -------------------------------------------------------------------------------- */

export default function BendochProfessional() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-white">
      
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/20 rounded-[100%] blur-[120px] pointer-events-none opacity-50"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-emerald-400 mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Accepting New Clients for 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-tight">
            From Silicon <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">To The Cloud.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Bendoch Corporation is a collective of specialized engineers. From low-level kernel development to high-scale AI architectures, we build the systems that power the future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2">
              Start a Project <ChevronRight size={20} />
            </button>
            <button onClick={() => document.getElementById('team').scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg border border-white/10 transition-all flex items-center justify-center gap-2">
              Meet the Engineers
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section id="services" className="py-20 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-500 mb-4 shadow-lg shadow-emerald-900/20">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="The Bendoch Six" 
            subtitle="A unique blend of low-level wizards, hardware strategists, and high-level architects." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map(member => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Real world solutions built by our engineers." 
          />
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center text-white mb-6 shadow-lg">
              <Zap size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to engineer the impossible?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              We are currently accepting new contracts for Q4 2025. Tell us about your project requirements.
            </p>
            
            <form className="space-y-4 max-w-md mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Your Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Message</label>
                <textarea rows={4} placeholder="We need a custom kernel module for..." className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"></textarea>
              </div>
              <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-emerald-500/20">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 bg-slate-950 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-xl tracking-tighter text-white mb-2">
              <Layers size={18} className="text-emerald-500" />
              BENDOCH<span className="text-emerald-500">CORP</span>
            </div>
            <p className="text-slate-500 text-sm">© 2025 Bendoch Corporation. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
