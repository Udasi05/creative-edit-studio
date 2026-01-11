import { Linkedin, Instagram, Youtube, Mail, Twitter } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    { name: "Book a Call", href: "#booking" },
  ];

  const services = [
    "Video Editing",
    "Color Grading",
    "Motion Graphics",
    "Sound Design",
    "Talking-head & Creator Content",
    "Compositing",
    "Platform Specific Optimization",
    "Post Production Consultation",
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/sahil-bhanushali-148564396", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/thats.bee.cut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/SahilB65552", label: "Twitter" },
    { icon: Mail, href: "mailto:sahilbhanushalioff2011@gmail.com", label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              EDITOR<span className="text-primary">SB</span>
            </a>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Professional video editing services that bring your vision to life
              with cinematic quality and creative excellence.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-xl"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>sahilbhanushalioff2011@gmail.com</p>
              <p>+91 7506236961</p>
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} EDITORSB. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="privacypolicy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="./termsandcondition" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
