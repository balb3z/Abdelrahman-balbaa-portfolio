import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences, type Experience } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Chip, OrgLogo, Reveal, SectionHeading } from "./shared";

export const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <article className="surface surface-hover p-5 sm:p-7">
    <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex gap-4">
        <OrgLogo name={exp.company} src={exp.logo} />
        <div>
          <h3 className="text-lg font-semibold leading-snug text-foreground">{exp.role}</h3>
          <p className="text-sm font-medium text-primary">{exp.company}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground sm:flex-col sm:items-end sm:text-right">
        <span className="inline-flex items-center gap-1.5">
          <Calendar size={13} />
          {exp.period}
          {exp.current && (
            <span className="ml-1 rounded-full bg-highlight/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-highlight">
              Current
            </span>
          )}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={13} /> {exp.location}
        </span>
        {exp.type && (
          <span className="inline-flex items-center gap-1.5">
            <Briefcase size={13} /> {exp.type}
          </span>
        )}
      </div>
    </header>

    <p className="mt-5 text-sm text-foreground/85">{exp.summary}</p>
    <ul className="mt-3 space-y-2">
      {exp.points.map((p) => (
        <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
          {p}
        </li>
      ))}
    </ul>
    <div className="mt-5 flex flex-wrap gap-1.5">
      {exp.skills.map((s) => (
        <Chip key={s}>{s}</Chip>
      ))}
    </div>
  </article>
);

const ExperienceSection = () => (
  <section id="experience" className="section">
    <div className="container-x">
      <SectionHeading
        eyebrow="03 · Experience"
        title="Where I've worked"
        description="Internships and roles across infrastructure, telecom, banking, and education."
      />

      <ol className="relative space-y-6 sm:pl-10">
        <span
          className="absolute bottom-4 left-[11px] top-4 hidden w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:block"
          aria-hidden="true"
        />
        {experiences.map((exp, i) => (
          <li key={`${exp.company}-${exp.role}`} className="relative">
          <Reveal delay={0.05 * i}>
            <span
              className={cn(
                "absolute -left-10 top-8 hidden h-[23px] w-[23px] items-center justify-center rounded-full border bg-background sm:flex",
                exp.current ? "border-highlight/60" : "border-primary/50",
              )}
              aria-hidden="true"
            >
              <span className={cn("h-2 w-2 rounded-full", exp.current ? "bg-highlight" : "bg-primary")} />
            </span>
            <ExperienceCard exp={exp} />
          </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ExperienceSection;
