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
import { INITIAL_STATE } from "../mockdata";
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
            {/* <div className="px-4 py-1 text-[#565f89] flex items-center gap-2 text-sm"> */}
            {/*     <Hash size={12} /> node_modules */}
            {/* </div> */}
            <div className="px-4 py-1 text-[#565f89] flex items-center gap-2 text-sm">
                <Hash size={12} /> target (rust)
            </div>
            <div className="px-4 py-1 text-[#565f89] flex items-center gap-2 text-sm">
                <Hash size={12} /> .git
            </div>
        </div>
    </div>
);

export default FileTree;
