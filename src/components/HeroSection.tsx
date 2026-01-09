import { Button } from "@/components/ui/button";
import { Play, ChevronDown, Linkedin, Github, Instagram, Youtube, Clapperboard, Music, Sparkles, Twitter, Mail, Paintbrush } from "lucide-react";
import heroProfile from "@/assets/photo.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background py-20 lg:py-0"
    >
      {/* Background Decor - Optional subtle gradient or pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">

          {/* Left Content - Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in-left">
            <div>
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm md:text-base mb-2">
                Video Editor
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Crafting Stories Through <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Visual Excellence
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
              I create digital experiences that inspire and engage. With a passion for
              clean design and innovative solutions, I transform ideas into beautiful,
              functional realities.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-12 pt-4">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-secondary">250+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-secondary">5m+</p>
                <p className="text-sm text-muted-foreground">Views in Total</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                variant="default" // Changed to default to ensure primary color
                size="lg"
                onClick={() => scrollToSection("#work")}
                className="group bg-secondary hover:bg-secondary/90 text-white min-w-[160px]"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="group min-w-[160px]"
              >
                Get In Touch
              </Button>
            </div>

            {/* Socials */}
            {/* Socials */}
            <div className="flex gap-7 mt-6">
              <a href="https://linkedin.com/in/sahil-bhanushali-148564396" className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-xl">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sahilbhanushalioff2011@gmail.com" className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-xl">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com/thats.bee.cut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-xl">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/SahilB65552" className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-xl">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Image & Badges */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-primary/20 rounded-[2rem] transform rotate-3 scale-105" />
              <div className="absolute inset-0 bg-background rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50">
                <img
                  src={heroProfile}
                  alt="Anish Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badges */}
              {/* Video Editor - Top Left - Higher up */}
              <div className="absolute top-24 -left-10 md:top-30 md:-left-16 bg-white dark:bg-card p-4 rounded-xl shadow-lg flex items-center gap-3 animate-float delay-100 z-20">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                  <Clapperboard size={20} />
                </div>
                <span className="font-semibold text-sm md:text-base text-card-foreground">Video Editor</span>
              </div>

              {/* Motion Graphics - Bottom Left - Lower down */}
              <div className="absolute bottom-8 -left-6 md:bottom-12 md:-left-20 bg-white dark:bg-card p-4 rounded-xl shadow-lg flex items-center gap-3 animate-float delay-300 z-20">
                <div className="p-2 bg-yellow-100 rounded-full text-yellow-600">
                  <Sparkles size={20} />
                </div>
                <span className="font-semibold text-sm md:text-base text-card-foreground">Motion Graphics</span>
              </div>

              {/* Sound Design - Bottom Right - Higher up than Motion Graphics */}
              <div className="absolute bottom-24 -right-4 md:bottom-32 md:-right-16 bg-white dark:bg-card p-4 rounded-xl shadow-lg flex items-center gap-3 animate-float delay-500 z-20">
                <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                  <Music size={20} />
                </div>
                <span className="font-semibold text-sm md:text-base text-card-foreground">Sound Design</span>
              </div>

              {/* Color Grading - Top Right - Lower down than Video Editor */}
              <div className="absolute top-2 -right-12 md:top-12 md:-right-16 bg-white dark:bg-card p-4 rounded-xl shadow-lg flex items-center gap-3 animate-float delay-100 z-20">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-violet-600 rounded-full text-white">
                  <Paintbrush size={20} />
                </div>
                <span className="font-semibold text-sm md:text-base text-card-foreground">Color Grading</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce hidden lg:block"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
