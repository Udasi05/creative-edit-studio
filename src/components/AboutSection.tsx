import { Film, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Film, value: "250+", label: "Projects Completed" },
  { icon: Award, value: "5m+", label: "Total of views" },
  { icon: Users, value: "30+", label: "Happy Clients" },
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
                With over a two years of experience in video editing, I specialize in
                creating visually stunning content that resonates with audiences.
                From corporate videos to cinematic productions, I bring technical
                expertise and creative vision to every project.
              </p>
              <p>
                I’m a video editor who helps creators and brands turn raw footage into clean, high-retention
                videos that actually hold attention.
                My focus is simple: tighter pacing, stronger storytelling, and edits that keep viewers watching till
                the end, not just “good-looking” videos.
                I work primarily with talking-head content, reels, and long-form videos, adding motion graphics,
                B-roll, sound design, and structure where most videos fall flat.
                If your content feels dull, unstructured, or isn’t converting views into engagement, that’s exactly
                the problem I fix.
                No templates. No overediting. Just edits that serve the message and the platform.
                If you want content that looks professional and performs, let’s talk.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background p-8 border border-border hover:border-primary/50 transition-colors group rounded-2xl"
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
