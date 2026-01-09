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
    title: "ShortForm & LongForm Video Editing",
    description: "Seamless cutting, pacing, and storytelling to transform raw footage into compelling narratives",
  },
  {
    icon: Film,
    title: "Color Grading",
    description: "Expert color correction and grading to create the perfect mood and atmosphere for your footage",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Eye-catching animations, titles, and visual elements that enhance your video content",
  },
  {
    icon: Volume2,
    title: "Audio Cleanup & Sound Design",
    description: "Professional audio mixing, sound effects, and music integration for immersive experiences",
  },
  {
    icon: Wand2,
    title: "Talking-head & Creator Content",
    description: "Advanced VFX compositing, green screen work, and special effects creation",
  },
  {
    icon: MonitorPlay,
    title: "Compositing",
    description: "Multi-layer compositing and advanced masking for complex visual scenarios",    
  },
  {
    icon: Camera,
    title: "Platform Specific Optimization",
    description: "Optimizing videos for specific platforms like YouTube, Instagram, and TikTok",
  },
  {
    icon: Layers,
    title: "Post Production Consultation",
    description: "Providing expert guidance and support to clients by sharing professional knowledge and experience in post-production.",
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
              className="bg-background p-6 border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 rounded-[2rem]"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors rounded-2xl">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
