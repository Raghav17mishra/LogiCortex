import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Users } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      data-testid={`team-member-card-${index}`}
    >
      <div className="group bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors duration-300 card-glow">
        {/* Photo */}
        <div className="aspect-[4/5] overflow-hidden relative">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-[filter] duration-500"
            data-testid={`team-member-photo-${index}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>

        {/* Info */}
        <div className="p-6 -mt-8 relative z-10">
          <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1" data-testid={`team-member-role-${index}`}>
            {member.role}
          </p>
          <h3 className="font-heading font-bold text-lg text-white mb-2" data-testid={`team-member-name-${index}`}>
            {member.name}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-4" data-testid={`team-member-desc-${index}`}>
            {member.description}
          </p>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-primary text-sm transition-colors duration-200"
              data-testid={`team-member-linkedin-${index}`}
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-xs">LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Fallback data
// To use local images, place them in 'public/assets/team/' and update the photo path 
// to '/assets/team/your-image.jpg'
const FALLBACK_TEAM = [
  {
    id: "1",
    name: "Rahu Kumar",
    role: ".Net Developer",
    photo: process.env.PUBLIC_URL + "/assets/team/Rahul.jpg",
    description: "3+ years in distributed systems and enterprise architecture.",
    linkedin: "https://www.linkedin.com/in/rahul-kumar-295346218/"
  },
  {
    id: "2",
    name: "Vishal Kumar",
    role: "Logistic Head",
    photo: process.env.PUBLIC_URL + "/assets/team/Vishal.jpg",
    description: "4+ years experience in logistic and supply chain management.",
    linkedin: "https://www.linkedin.com/in/vishal-kumar-006466215/"
  },
  {
    id: "3",
    name: "Raghvendra Mishra",
    role: "Data Engineer",
    photo: process.env.PUBLIC_URL + "/assets/team/Raghav.jpg",
    description: "Supply chain optimization expert. Intelligent routing systems.",
    linkedin: "https://www.linkedin.com/in/raghvendra-mishra-57b67a143/"
  },
  {
    id: "4",
    name: "Asif Ali",
    role: "Senior Developer",
    photo: process.env.PUBLIC_URL + "/assets/team/Asif.jpg",
    description: "Full-stack engineer specializing in Python and React.",
    linkedin: "https://www.linkedin.com/in/asif-ali-frontend-developer/"
  },
  {
    id: "5",
    name: "Shahanshah Khan",
    role: "Senior Developer",
    photo: process.env.PUBLIC_URL + "/assets/team/Shahanshah.jpg",
    description: "Full Stack Developer with 5+ years of experience in web development.",
    linkedin: "https://www.linkedin.com/in/shahanshah-khan-78bb1a159/"
  },
  {
    id: "6",
    name: "Sudheer Kumar Rai",
    role: "Senior Developer",
    photo: process.env.PUBLIC_URL + "/assets/team/Sudheer.jpg",
    description: "Full Stack Developer with 5+ years of experience in product Development.",
    linkedin: "https://www.linkedin.com/in/mrsudheer07/"
  }
];

export default function TeamPage() {
  const [team, setTeam] = useState(FALLBACK_TEAM);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get(`${API}/team`);
        if (res.data && res.data.length > 0) {
          setTeam(res.data);
        }
      } catch {
        // Use fallback data
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="pt-24 pb-20" data-testid="team-page">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
            Engineering Team
          </p>
          <h1
            className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4"
            data-testid="team-title"
          >
            The people behind
            <br />
            the intelligence
          </h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-xl">
            A diverse team of engineers, researchers, and strategists building the future of logistics technology.
          </p>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap gap-8 border-t border-b border-white/5 py-6">
          {[
            { label: "Team Members", value: "30+" },
            { label: "Countries", value: "8" },
            { label: "Years Combined Experience", value: "120+" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="font-heading font-bold text-xl text-white">{stat.value}</span>
              <span className="text-zinc-600 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="team-grid">
          {team.map((member, i) => (
            <TeamMemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* Join banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-bold text-lg text-white mb-1">
              Join our team
            </h3>
            <p className="text-zinc-500 text-sm">
              We&apos;re always looking for talented engineers and researchers to join us.
            </p>
          </div>
          <a href="mailto:careers@logicortex.ai">
            <button
              className="border border-white/20 text-white hover:bg-white/10 rounded-none uppercase tracking-wider font-bold text-xs px-6 py-3 transition-colors duration-200"
              data-testid="team-join-button"
            >
              Get in Touch
            </button>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
