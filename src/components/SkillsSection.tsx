import { 
  Palette, 
  Film, 
  Sparkles, 
  Volume2, 
  Wand2, 
  MonitorPlay,
  Camera,
  Layers
} from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "Color Grading",
    description: "Expert color correction and grading to create the perfect mood and atmosphere for your footage",
    tools: ["DaVinci Resolve", "Lumetri Color"],
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Seamless cutting, pacing, and storytelling to transform raw footage into compelling narratives",
    tools: ["Premiere Pro", "Final Cut Pro"],
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Eye-catching animations, titles, and visual elements that enhance your video content",
    tools: ["After Effects", "Motion"],
  },
  {
    icon: Volume2,
    title: "Sound Design",
    description: "Professional audio mixing, sound effects, and music integration for immersive experiences",
    tools: ["Audition", "Pro Tools"],
  },
  {
    icon: Wand2,
    title: "Visual Effects",
    description: "Advanced VFX compositing, green screen work, and special effects creation",
    tools: ["Nuke", "After Effects"],
  },
  {
    icon: MonitorPlay,
    title: "4K/8K Editing",
    description: "High-resolution video editing optimized for cinema and broadcast quality output",
    tools: ["DaVinci Resolve", "Premiere"],
  },
  {
    icon: Camera,
    title: "Cinematography",
    description: "Understanding of camera work, lighting, and composition for better editing decisions",
    tools: ["On-set Collaboration"],
  },
  {
    icon: Layers,
    title: "Compositing",
    description: "Multi-layer compositing and advanced masking for complex visual scenarios",
    tools: ["Fusion", "After Effects"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Skills & Knowledge
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built over years of professional experience 
            in video production and post-production
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-background p-6 border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="text-xs bg-secondary text-secondary-foreground px-3 py-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
