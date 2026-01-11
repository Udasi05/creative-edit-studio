import { Clapperboard } from "../../../icons/Clapperboard";
import { Music } from "../../../icons/Music";
import { Wand } from "../../../icons/Wand";
import { Sparkles } from "../../../icons/Sparkles";
import { Layers } from "../../../icons/Layers";
import { Aperture } from "../../../icons/Aperture";
import { Bolt } from "../../../icons/Bolt";
import { Code } from "../../../icons/Code";
import { Rocket } from "../../../icons/Rocket";
import { Globe } from "../../../icons/Globe";
import { Cpu } from "../../../icons/Cpu";

const icons = [
    Clapperboard,
    Music,
    Wand,
    Sparkles,
    Layers,
    Aperture,
    Bolt,
    Code,
    Rocket,
    Globe,
    Cpu,
];

export const DoodleBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.03]">
            <div className="absolute inset-0 grid grid-cols-6 gap-8 -rotate-12 scale-150">
                {Array.from({ length: 48 }).map((_, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                        <div key={i} className="flex justify-center items-center">
                            <Icon width={64} height={64} stroke="currentColor" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
