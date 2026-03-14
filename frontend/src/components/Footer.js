import { Link } from "react-router-dom";
import { Cpu, Linkedin, Github, Mail } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030303] py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-wide">
                LogiCortex
              </span>
            </Link>
            <p className="text-sm max-w-sm">
              Empowering the next generation of logistics with advanced artificial intelligence and machine learning solutions.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-white/5" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} LogiCortex. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}