import { Calendar } from "lucide-react";
import { activities } from "@/data/portfolio";
import { OrgLogo, Reveal, SectionHeading } from "./shared";

const ActivitiesSection = () => (
  <section id="leadership" className="section pt-0 sm:pt-0">
    <div className="container-x">
      <SectionHeading eyebrow="06 · Leadership" title="Activities & leadership" />
      <div className="grid gap-5 md:grid-cols-2">
        {activities.map((a, i) => (
          <Reveal key={a.org} delay={0.08 * i} className="surface surface-hover p-6">
            <div className="flex items-start gap-4">
              <OrgLogo name={a.org} src={a.logo} />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground">{a.role}</h3>
                <p className="text-sm text-primary">{a.org}</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar size={12} /> {a.period}
                  {a.location && ` · ${a.location}`}
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-2">
              {a.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
