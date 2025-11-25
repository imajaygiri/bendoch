
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
const FounderCard = ({ founder }) => (
    <div className="bg-[#24283b] border border-[#414868] rounded p-4 font-mono hover:border-[#7aa2f7] transition-all group relative overflow-hidden">
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

        <div className="space-y-2 text-sm">
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
    </div>
);
export default FounderCard;
