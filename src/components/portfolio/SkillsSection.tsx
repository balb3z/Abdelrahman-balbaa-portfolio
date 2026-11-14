import { BarChart3, BrainCircuit, Cloud, Code2, Database, Rocket, type LucideIcon } from "lucide-react";
import { skillGroups, type SkillIcon } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./shared";

const icons: Record<SkillIcon, LucideIcon> = {
  code: Code2,
  chart: BarChart3,
  database: Database,
  cloud: Cloud,
  rocket: Rocket,
  brain: BrainCircuit,
};

const SkillsSection = () => (
  <section id="skills" className="section">
    <div className="container-x">
      <SectionHeading
        eyebrow="02 · Skills"
        title="Technical toolkit"
        description="Languages, platforms, and concepts I use across data engineering, analytics, and machine learning."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} delay={0.05 * i} className="surface surface-hover group p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={19} />
                </div>
                <h3 className="font-semibold text-foreground">{g.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default SkillsSection;
