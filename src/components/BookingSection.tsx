import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Video, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const meetingTypes = [
  { id: "discovery", name: "Discovery Call", duration: "30 min" },
  { id: "consultation", name: "Project Consultation", duration: "45 min" },
  { id: "detailed", name: "Detailed Discussion", duration: "60 min" },
];

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("discovery");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time");
      return;
    }
    
    toast.success(
      "Meeting request sent! You'll receive a confirmation email with the meeting link shortly."
    );
    
    // Reset form
    setSelectedDate("");
    setSelectedTime("");
    setFormData({ name: "", email: "", notes: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <section id="booking" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Schedule a Meeting
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Book a Call
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project! Schedule a video call at your convenience. 
            Meeting links will be sent via Google Meet or Zoom.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background border border-border p-8 md:p-12">
            {/* Meeting Types */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Video className="w-5 h-5 text-primary" />
                Select Meeting Type
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {meetingTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 border text-left transition-all ${
                      selectedType === type.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {selectedType === type.id && (
                        <CheckCircle className="w-4 h-4 text-primary" />
                      )}
                      <span className="font-medium text-foreground">
                        {type.name}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {type.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-10">
                {/* Date & Time Selection */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Select Date
                    </h3>
                    <Input
                      type="date"
                      min={minDate}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="bg-card"
                      required
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Select Time
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 px-4 text-sm font-medium border transition-all ${
                            selectedTime === time
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border text-foreground hover:border-primary/50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Your Details
                  </h3>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card"
                  />
                  <Textarea
                    name="notes"
                    placeholder="Tell me about your project (optional)"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="bg-card resize-none"
                  />
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <Button type="submit" variant="hero" size="xl" className="w-full">
                  <Video className="w-5 h-5" />
                  Schedule Meeting
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  You'll receive a confirmation email with the Google Meet/Zoom link
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
