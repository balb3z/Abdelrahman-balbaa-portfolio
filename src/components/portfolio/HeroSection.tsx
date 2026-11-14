import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.webp";
import { profile } from "@/data/portfolio";

const HeroSection = () => {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 sm:pt-36 lg:pb-28">
      {/* backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          <motion.div {...fade(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Currently: Technical Instructor @ eYouth
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {profile.firstName}
            <br />
            <span className="text-gradient">{profile.lastName}</span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-5 font-mono text-sm text-primary sm:text-base">
            {profile.title} · AI Student
          </motion.p>

          <motion.p {...fade(0.22)} className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.ul {...fade(0.28)} className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
            {profile.roles.map((r) => (
              <li key={r} className="chip">
                {r}
              </li>
            ))}
          </motion.ul>

          <motion.div {...fade(0.34)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.6)] transition-transform hover:-translate-y-0.5"
            >
              View projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.cv}
              download={profile.cvFileName}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-3 py-3 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div {...fade(0.4)} className="mt-9 flex items-center gap-5 text-muted-foreground">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-primary">
              <Mail size={20} />
            </a>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin size={15} /> {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-primary/25 via-transparent to-highlight/10 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white">
            <img
              src={profilePhoto}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={877}
              className="aspect-[4/5] w-full object-cover object-top"
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-background/70 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-sm font-semibold text-foreground">Alexandria University</p>
                <p className="text-xs text-muted-foreground">Faculty of Computer & Data Science · AI</p>
              </div>
              <span className="font-mono text-xs text-primary">'28</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
