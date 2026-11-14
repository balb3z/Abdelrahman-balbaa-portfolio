import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { OrgLogo, Reveal, SectionHeading } from "./shared";

const EducationSection = () => (
  <section id="education" className="section">
    <div className="container-x">
      <SectionHeading eyebrow="05 · Education" title="Education & certifications" />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
        {/* Degree */}
        <Reveal className="surface relative overflow-hidden p-6 sm:p-8">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border border-border bg-white p-1">
                <img src={education.logo} alt="" loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="eyebrow mb-1 flex items-center gap-1.5">
                  <GraduationCap size={14} /> {education.status}
                </p>
                <h3 className="text-xl font-semibold text-foreground">{education.school}</h3>
              </div>
            </div>
            <p className="mt-6 font-medium text-foreground/90">{education.faculty}</p>
            <p className="text-muted-foreground">{education.department}</p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar size={14} /> {education.period}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} /> {education.location}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <div>
          <Reveal>
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
              <Award size={18} className="text-primary" /> Certifications
            </h3>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal as="li" key={c.name} delay={0.04 * i}>
                <div className="surface surface-hover flex h-full gap-3 p-4">
                  <OrgLogo name={c.issuer} src={c.logo} className="h-10 w-10" />
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold leading-snug text-foreground">{c.name}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                    <p className="mt-2 font-mono text-[11px] text-primary/90">
                      {c.date} · {c.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
