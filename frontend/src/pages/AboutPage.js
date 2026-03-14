import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Target, Eye, Cpu, Zap, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TECH_AREAS = [
  { icon: Cpu, title: "Artificial Intelligence", desc: "ML models, NLP, and computer vision for business intelligence." },
  { icon: Zap, title: "Real-Time Systems", desc: "Low-latency architectures for live tracking and fleet management." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant solutions with end-to-end encryption." },
  { icon: Globe, title: "Cloud Native", desc: "Kubernetes-orchestrated microservices on AWS, Azure, and GCP." },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20" data-testid="about-page">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1
            className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-6"
            data-testid="about-title"
          >
            Engineering the future
            <br />
            of logistics
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
            LogiCortex AI was founded on a simple premise: the logistics industry deserves intelligent technology that matches its complexity. We combine deep domain expertise with cutting-edge AI to transform how goods move around the world.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 h-full" data-testid="mission-card">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Target className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="border-primary/30 text-primary font-mono text-[10px] mb-4">
                Mission
              </Badge>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Democratize AI for Logistics
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                To make advanced artificial intelligence accessible to logistics and delivery companies of all sizes. We believe every supply chain operation deserves intelligent optimization, not just the industry giants. Our mission is to bridge the gap between cutting-edge research and practical, deployable solutions that drive measurable efficiency gains.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 h-full" data-testid="vision-card">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-secondary mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="border-amber-500/30 text-secondary font-mono text-[10px] mb-4">
                Vision
              </Badge>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                A Fully Autonomous Supply Chain
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We envision a world where supply chains operate with minimal human intervention — where AI anticipates demand, optimizes routes in real-time, and self-heals from disruptions. Our technology stack is designed to move the industry incrementally toward this future, one intelligent system at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto bg-white/5" />

      {/* Technology Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" data-testid="tech-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
            Technology Expertise
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            Built on deep technical foundations
          </h2>
          <p className="text-zinc-500 text-sm md:text-base max-w-lg">
            Our engineering team brings together expertise across the full technology spectrum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TECH_AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className="flex items-start gap-4 bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors duration-300"
                data-testid={`tech-card-${i}`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 shrink-0">
                  <area.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-white mb-1">
                    {area.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Innovation Focus */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 md:p-12"
          data-testid="innovation-section"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                AI + Logistics Innovation
              </p>
              <h2 className="font-heading font-bold text-2xl text-white mb-4">
                Where artificial intelligence meets real-world logistics
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                At the intersection of AI and logistics lies enormous potential. We develop proprietary algorithms that solve the most challenging optimization problems in supply chain management — from last-mile delivery routing to warehouse automation and demand forecasting.
              </p>
              <Link to="/services">
                <Button
                  data-testid="about-services-cta"
                  className="bg-primary text-white hover:bg-primary/90 rounded-none uppercase tracking-wider font-bold text-xs px-6 py-3"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "99.7%", label: "System Uptime" },
                { num: "40%", label: "Cost Reduction" },
                { num: "3x", label: "Faster Routing" },
                { num: "500K+", label: "Deliveries Optimized" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/[0.02] border border-white/5 rounded-lg p-4 text-center">
                  <p className="font-heading font-bold text-2xl text-white mb-1">{stat.num}</p>
                  <p className="text-zinc-600 text-xs font-mono">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
