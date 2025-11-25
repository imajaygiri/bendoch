
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

export default StatusBar;
