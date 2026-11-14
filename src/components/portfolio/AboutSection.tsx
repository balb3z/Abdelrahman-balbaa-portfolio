import { Database, BrainCircuit, LayoutDashboard } from "lucide-react";
import { certifications, experiences, profile, projects } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./shared";

const focus = [
  {
    icon: Database,
    title: "Data Engineering",
    text: "ETL pipelines, medallion (Bronze/Silver/Gold) architectures, Spark, Databricks, and Azure.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    text: "Deep learning, feature engineering, and classical ML, from prototype to evaluation.",
  },
  {
    icon: LayoutDashboard,
    title: "Analytics & Products",
    text: "Dashboards in Power BI and full-stack apps that put data in front of decision-makers.",
  },
];

// Derived from the data file so the numbers stay correct as content is added.
const stats = [
  { value: String(experiences.length), label: "Roles & internships" },
  { value: String(projects.length), label: "Projects" },
  { value: String(certifications.length), label: "Certifications" },
];

const AboutSection = () => (
  <section id="about" className="section border-t border-border/60">
    <div className="container-x">
      <SectionHeading eyebrow="01 · About" title="Turning raw data into systems people use." />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.about.map((p, i) => (
            <p key={i} className={i === 0 ? "text-foreground/90" : undefined}>
              {p}
            </p>
          ))}

          <dl className="grid grid-cols-3 gap-3 pt-4">
            {stats.map((h) => (
              <div key={h.label} className="surface p-4 sm:p-5">
                <dt className="sr-only">{h.label}</dt>
                <dd className="text-2xl font-semibold text-foreground sm:text-3xl">{h.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{h.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="space-y-3">
          {focus.map((f, i) => (
            <Reveal key={f.title} delay={0.08 * i} className="surface surface-hover flex gap-4 p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
