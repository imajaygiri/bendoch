
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
} from "lucide-react";
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
                <div key={srv.fn} className="pl-4 border-l border-[#292e42]">
                    {/* Fixed: Escaped the arrow function syntax */}
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

export default ServicesBlock;
