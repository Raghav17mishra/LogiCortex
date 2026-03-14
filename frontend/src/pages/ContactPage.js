import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { toast } from "sonner";
import { Send, Mail, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent successfully!");
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20" data-testid="contact-page">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
            Contact
          </p>
          <h1
            className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4"
            data-testid="contact-title"
          >
            Let&apos;s build something
            <br />
            together
          </h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-xl">
            Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s explore how we can help.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8" data-testid="contact-form-card">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12" data-testid="contact-success">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    Message received
                  </h3>
                  <p className="text-zinc-500 text-sm text-center max-w-sm mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    data-testid="send-another-button"
                    className="border border-white/20 text-white bg-transparent hover:bg-white/5 rounded-none uppercase tracking-wider font-bold text-xs px-6 py-3"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} data-testid="contact-form">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">
                        Name
                      </label>
                      <Input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-[#050505] border-white/10 text-white h-12 focus:ring-1 focus:ring-primary placeholder:text-zinc-700"
                        data-testid="contact-name-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="bg-[#050505] border-white/10 text-white h-12 focus:ring-1 focus:ring-primary placeholder:text-zinc-700"
                        data-testid="contact-email-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="bg-[#050505] border-white/10 text-white focus:ring-1 focus:ring-primary placeholder:text-zinc-700 resize-none"
                        data-testid="contact-message-input"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      data-testid="contact-submit-button"
                      className="w-full bg-primary text-white hover:bg-primary/90 rounded-none uppercase tracking-wider font-bold text-xs px-6 py-3 h-12 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "penomenalrt@gmail.com",
                badge: "Primary",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Cybercity,gurugram",
                badge: "HQ",
              },
              {
                icon: Clock,
                label: "Response Time",
                value: "Within 24 hours",
                badge: "Avg",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex items-start gap-4"
                data-testid={`contact-info-${i}`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-500 shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-zinc-400 text-sm font-medium">{item.label}</p>
                    <Badge variant="outline" className="border-white/10 text-zinc-600 font-mono text-[9px] px-1.5 py-0">
                      {item.badge}
                    </Badge>
                  </div>
                  <p className="text-white text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            {/* FAQ note */}
            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6" data-testid="contact-faq">
              <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                What happens next?
              </p>
              <ol className="space-y-2 text-zinc-500 text-sm">
                <li className="flex gap-2">
                  <span className="text-zinc-600 font-mono text-xs">01</span>
                  We review your message within 24h
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-600 font-mono text-xs">02</span>
                  Schedule a discovery call
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-600 font-mono text-xs">03</span>
                  Deliver a tailored proposal
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
