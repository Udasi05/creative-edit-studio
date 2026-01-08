import { Film, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Film, value: "500+", label: "Projects Completed" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Clock, value: "24/7", label: "Availability" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Passionate About Bringing Stories to Life
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over a decade of experience in video editing, I specialize in 
                creating visually stunning content that resonates with audiences. 
                From corporate videos to cinematic productions, I bring technical 
                expertise and creative vision to every project.
              </p>
              <p>
                My expertise spans across color grading, motion graphics, sound design, 
                and visual effects. I work with industry-standard tools including 
                DaVinci Resolve, Adobe Premiere Pro, After Effects, and Final Cut Pro.
              </p>
              <p>
                I believe every piece of footage tells a story—my job is to bring 
                that story to life in the most compelling way possible.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background p-8 border border-border hover:border-primary/50 transition-colors group"
              >
                <stat.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
