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
export default ProjectsBlock;
