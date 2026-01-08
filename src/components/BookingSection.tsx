import { useEffect } from "react";
import { Calendar, Video, CheckCircle2 } from "lucide-react";

const benefits = [
  "Free 30-minute consultation",
  "Discuss your project requirements",
  "Get a custom quote",
  "Automatic Google Meet/Zoom link",
];

const BookingSection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="booking" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">Schedule a Meeting</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Book a Call</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project! Pick a time that works for you and I'll send you a Google Meet or Zoom link
            automatically.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-background border border-border p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Discovery Call</h3>
                    <p className="text-sm text-muted-foreground">30 minutes</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm">Select a date and time from the calendar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="lg:col-span-2">
              <div className="bg-background border border-border overflow-hidden">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/anishudasi14/30min"
                  style={{ minWidth: "320px", height: "700px" }}
                />

                {/* Fallback message if Calendly doesn't load */}
                <noscript>
                  <div className="p-8 text-center">
                    <p className="text-muted-foreground mb-4">Please enable JavaScript to view the booking calendar.</p>
                    <a
                      href="https://calendly.com/your-username/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Or book directly on Calendly →
                    </a>
                  </div>
                </noscript>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Powered by Calendly • Your timezone will be detected automatically
              </p>
            </div>
          </div>
        </div>

        {/* Setup Instructions - Remove this after setting up */}
        <div className="max-w-2xl mx-auto mt-12 p-6 bg-primary/10 border border-primary/20">
          <h4 className="text-foreground font-semibold mb-2 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Setup Instructions
          </h4>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>
              Create a free account at{" "}
              <a
                href="https://calendly.com/?redirect=false"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                calendly.com
              </a>
            </li>
            <li>Set up your availability and connect Google Calendar/Zoom</li>
            <li>Copy your event link (e.g., calendly.com/yourname/30min)</li>
            <li>Replace "your-username" in the code with your actual Calendly username</li>
            <li>Remove this instruction box after setup</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
