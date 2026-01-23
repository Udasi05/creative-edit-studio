import { useEffect, useRef } from "react";
import { Calendar, Video, CheckCircle2 } from "lucide-react";
import { Analytics } from "@vercel/analytics/next"

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const benefits = [
  "Free 30-minute consultation",
  "Discuss your project requirements",
  "Get a custom quote",
  "Automatic Google Meet/Zoom link",
];

const BookingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    const existingScript = document.querySelector(
      `script[src="${scriptSrc}"]`,
    ) as HTMLScriptElement | null;

    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/sahilbhanushalioff2011/new-meeting",
          parentElement: containerRef.current,
        });
      }
    };

    if (!existingScript) {
      // Load Calendly widget script
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    } else {
      // Script already loaded or loading
      if (window.Calendly) {
        initWidget();
      } else {
        existingScript.addEventListener("load", initWidget);
      }
    }

    return () => {
      if (existingScript) {
        existingScript.removeEventListener("load", initWidget);
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
              <div className="bg-background border border-border p-8 h-full rounded-2xl">
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
              <div className="bg-background border border-border overflow-hidden rounded-2xl">
                <div
                  ref={containerRef}
                  style={{ minWidth: "320px", height: "700px" }}
                />

                {/* Fallback message if Calendly doesn't load */}
                <noscript>
                  <div className="p-8 text-center">
                    <p className="text-muted-foreground mb-4">Please enable JavaScript to view the booking calendar.</p>
                    <a
                      href="https://calendly.com/sahilbhanushalioff2011/new-meeting"
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
      </div>
    </section>
  );
};

export default BookingSection;
