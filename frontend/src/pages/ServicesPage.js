import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Brain, Truck, Database, Code, Building, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const SERVICES = [
  {
    icon: Brain,
    tags: ["Machine Learning", "NLP", "Computer Vision"],
    color: "text-primary",
    bgAccent: "bg-blue-500/10",
    span: "md:col-span-2",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery Automation",
    description: "End-to-end automation for delivery and supply chain operations. Route optimization, fleet management, and real-time tracking powered by intelligent algorithms.",
    tags: ["Route Optimization", "Fleet Management", "Tracking"],
    color: "text-secondary",
    bgAccent: "bg-amber-500/10",
    span: "md:col-span-1",
  },
  {
    icon: Database,
    title: "Data Engineering Pipelines",
    description: "Build robust data pipelines that transform raw data into strategic assets. ETL processes, data lakes, and real-time streaming architectures designed for scale.",
    tags: ["ETL Pipelines", "Data Lakes", "Streaming"],
    color: "text-accent",
    bgAccent: "bg-emerald-500/10",
    span: "md:col-span-1",
  },
  {
    icon: Code,
    title: "Python Backend Development",
    description: "High-performance backend systems built with Python. FastAPI, Django, and async architectures designed for scale, reliability, and developer productivity.",
    tags: ["FastAPI", "Django", "Microservices"],
    color: "text-zinc-300",
    bgAccent: "bg-zinc-500/10",
    span: "md:col-span-1",
  },
  {
    icon: Building,
    title: ".NET Enterprise Solutions",
    description: "Enterprise-grade applications on the .NET platform. Secure, scalable, and fully integrated with the Microsoft ecosystem for critical business operations.",
    tags: [".NET Core", "Azure", "Enterprise"],
    color: "text-zinc-300",
    bgAccent: "bg-zinc-500/10",
    span: "md:col-span-1",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20" data-testid="services-page">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3" data-testid="services-label">
            Services
          </p>
          <h1
            className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4"
            data-testid="services-title"
          >
            What we build
          </h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-xl" data-testid="services-description">
            From AI integration to enterprise platforms, we engineer solutions that drive measurable business outcomes.
          </p>
        </motion.div>
      </section>

      {/* Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="services-grid">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={service.span}
            >
              <div
                className="group bg-[#0A0A0A] border border-white/5 rounded-xl p-8 h-full hover:border-white/10 transition-colors duration-300 card-glow relative overflow-hidden"
                data-testid={`service-card-${i}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg ${service.bgAccent} flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-lg text-white mb-3" data-testid={`service-title-${i}`}>
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-white/10 text-zinc-500 font-mono text-[10px] px-2 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-zinc-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-[#0A0A0A] border border-white/5 rounded-xl p-8"
        >
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-1">
              Have a project in mind?
            </h3>
            <p className="text-zinc-500 text-sm">
              Let&apos;s discuss how we can help you build it.
            </p>
          </div>
          <Link to="/contact">
            <Button
              data-testid="services-cta-button"
              className="bg-primary text-white hover:bg-primary/90 rounded-none uppercase tracking-wider font-bold text-xs px-8 py-3 h-12 shrink-0"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}