import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Brain, Truck, Database, Code, Zap, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const OFFERINGS = [
  {
    icon: Brain,
    title: "AI Integration",
    desc: "Embed intelligent models into your workflows for smarter decision-making.",
    color: "text-primary",
    borderColor: "hover:border-blue-500/30",
  },
  {
    icon: Truck,
    title: "Logistics Automation",
    desc: "Automate delivery operations with route optimization and fleet management.",
    color: "text-secondary",
    borderColor: "hover:border-amber-500/30",
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Build robust pipelines transforming raw data into strategic assets.",
    color: "text-accent",
    borderColor: "hover:border-emerald-500/30",
  },
  {
    icon: Code,
    title: "Custom Software",
    desc: "Full-stack development tailored to your business requirements.",
    color: "text-zinc-300",
    borderColor: "hover:border-zinc-500/30",
  },
];

export default function HomePage() {
  return (
    <div data-testid="home-page">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16" data-testid="hero-section">
        <div className="hero-glow absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              <Badge
                variant="outline"
                className="mb-6 border-primary/30 text-primary font-mono text-xs px-3 py-1"
                data-testid="hero-badge"
              >
                <Zap className="w-3 h-3 mr-1.5" />
                AI-Powered Logistics Solutions
              </Badge>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight"
              data-testid="hero-title"
            >
              Intelligence that
              <br />
              <span className="text-primary">moves the world</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl"
              data-testid="hero-description"
            >
              LogiCortex AI builds intelligent systems for logistics, delivery companies, and enterprise automation. We turn complex operations into streamlined, AI-driven workflows.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button
                  data-testid="hero-cta-primary"
                  className="bg-primary text-white hover:bg-primary/90 rounded-none uppercase tracking-wider font-bold text-xs px-8 py-3 h-12"
                >
                  Work With Us
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  data-testid="hero-cta-secondary"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 rounded-none uppercase tracking-wider font-bold text-xs px-8 py-3 h-12"
                >
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* Offerings */}
      <section className="py-20 md:py-32" data-testid="offerings-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-zinc-500 text-sm md:text-base max-w-lg mb-12">
              From AI-powered intelligence to enterprise automation, we deliver end-to-end technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFERINGS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div
                  className={`group bg-[#0A0A0A] border border-white/5 rounded-xl p-6 h-full transition-colors duration-300 ${item.borderColor} card-glow`}
                  data-testid={`offering-card-${i}`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-5 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 relative" data-testid="cta-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 md:p-16 text-center"
          >
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
              Ready to transform your operations?
            </h2>
            <p className="text-zinc-500 text-sm md:text-base max-w-lg mx-auto mb-8">
              Let&apos;s discuss how LogiCortex AI can accelerate your business with intelligent automation.
            </p>
            <Link to="/contact">
              <Button
                data-testid="cta-contact-button"
                className="bg-primary text-white hover:bg-primary/90 rounded-none uppercase tracking-wider font-bold text-xs px-8 py-3 h-12"
              >
                Get in Touch
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}