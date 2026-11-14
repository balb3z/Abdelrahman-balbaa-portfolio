import { useCallback, useEffect, useState } from "react";
import { Github } from "lucide-react";
import { profile, projects, type Project } from "@/data/portfolio";
import { ProjectCard, ProjectRow } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Reveal, SectionHeading } from "./shared";

const PARAM = "project";

/** Keeps the open project in the URL (?project=slug) so a project can be shared directly. */
const setUrlProject = (slug: string | null) => {
  const url = new URL(window.location.href);
  if (slug) url.searchParams.set(PARAM, slug);
  else url.searchParams.delete(PARAM);
  window.history.replaceState(null, "", url);
};

const ProjectsSection = () => {
  const [open, setOpen] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get(PARAM);
    const match = slug && projects.find((p) => p.slug === slug);
    if (match) {
      setOpen(match);
      document.getElementById("projects")?.scrollIntoView();
    }
  }, []);

  const openProject = useCallback((p: Project) => {
    setOpen(p);
    setUrlProject(p.slug);
  }, []);
  const close = useCallback(() => {
    setOpen(null);
    setUrlProject(null);
  }, []);

  return (
    <section id="projects" className="section border-y border-border/60 bg-card/30">
      <div className="container-x">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Selected work"
          description="Data platforms, analytics systems, and ML models. Click any project for details, screenshots, and links."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={0.06 * (i % 3)} className={i === 0 ? "md:col-span-2" : undefined}>
              <ProjectCard project={p} onOpen={openProject} className="h-full" wide={i === 0} />
            </Reveal>
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-16">
            <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">More on GitHub</h3>
                <p className="mt-1 text-sm text-muted-foreground">Smaller builds and ML practice projects.</p>
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github size={16} /> All repositories
              </a>
            </Reveal>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p, i) => (
                <Reveal key={p.slug} delay={0.04 * i} className="min-w-0">
                  <ProjectRow project={p} onOpen={openProject} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>

      <ProjectModal project={open} onClose={close} />
    </section>
  );
};

export default ProjectsSection;
