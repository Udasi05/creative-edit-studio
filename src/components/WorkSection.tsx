import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent,  } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Commercial Color Grading",
    video: "/Work/CG ig.mp4",
    description: "High-end product commercial with cinematic color grading",
  },
  {
    id: 2,
    title: "Music Video Production",
    video: "/Work/BTPT ig.mp4",
    description: "Creative music video with dynamic transitions and effects",
  },
  {
    id: 3,
    title: "Motion Graphics Showcase",
    video: "/Work/Nataleh Nicole Replit D2.mp4",
    description: "Motion graphics for a product presentation",
  },
  {
    id: 4,
    title: "Fashion Film",
    video: "/Work/SB Garment 1 .mp4",
    description: "Post production for a fashion brand commercial",
  },
  {
    id: 5,
    title: "Corporate Documentary",
    video: "/Work/Dr Asmi Berry sample edit.mp4",
    description: "Corporate video with cinematic storytelling",
  },
  {
    id: 6,
    title: "Wedding Highlights",
    video: "/Work/TW loop.mp4",
    description: "Wedding video with full post-production",
  },
  {
    id: 7,
    title: "Brand Story",
    video: "/Work/SB Garment 23.mp4",
    description: "Compelling brand storytelling and visual narrative",
  },
  {
    id: 8,
    title: "Travel Vlog",
    video: "/Work/3D timeline.mov",
    description: "Fast-paced travel content with engaging transitions",
  },
  {
    id: 9,
    title: "Product Launch",
    video: "/Work/Car Reel TBC.mov",
    description: "Launch video highlighting key product features",
  },
];

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best video editing projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300 rounded-2xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail (Video Teaser) */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  src={project.video}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
                <div className="absolute inset-0 bg-background/50 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center backdrop-blur-sm shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium color-orange-500">
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-2 color-orange-100">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm color-orange-100">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none ring-0">
            {selectedProject && (
              <div className="aspect-video w-full">
                <video
                  src={selectedProject.video}
                  className="w-full h-full"
                  controls
                  autoPlay
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default WorkSection;
