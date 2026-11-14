import { Award } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { Reveal } from "./shared";

/** Original Education + Certifications layout, driven by src/data/portfolio.ts. */
const EducationSection = () => (
  <section id="education" className="py-20">
    <div className="container mx-auto px-6">
      {/* Education */}
      <Reveal className="mb-16">
        <h2 className="mb-2 text-center text-3xl font-bold text-foreground">Education</h2>
        <div className="mx-auto mb-12 h-1 w-12 rounded bg-primary" />

        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <img
              src={education.logo}
              alt={education.school}
              className="h-28 w-28 rounded-2xl border border-border object-cover shadow-md"
            />
            <div>
              <h3 className="text-2xl font-bold text-foreground">{education.school}</h3>
              <p className="text-lg font-semibold text-primary">
                {education.faculty} — AI Department
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {education.period} · {education.status}
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Certifications */}
      <Reveal>
        <h2 className="mb-2 text-center text-3xl font-bold text-foreground">Certifications</h2>
        <div className="mx-auto mb-12 h-1 w-12 rounded bg-primary" />

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal
              key={c.name}
              delay={0.08 * i}
              className="rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <Award size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{c.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {c.issuer} · {c.date}
                  </p>
                  <p className="text-xs text-muted-foreground">{c.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default EducationSection;
