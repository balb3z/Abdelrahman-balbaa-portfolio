import { useEffect, useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import ProjectCover from "./ProjectCover";
import { Chip } from "./shared";

type Props = { project: Project | null; onClose: () => void };

const ProjectModal = ({ project, onClose }: Props) => {
  const [index, setIndex] = useState(0);
  useEffect(() => setIndex(0), [project?.slug]);

  const count = project?.images.length ?? 0;
  const go = (d: number) => setIndex((i) => (i + d + count) % count);

  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="block max-h-[92dvh] w-[calc(100vw-2rem)] max-w-3xl gap-0 overflow-y-auto rounded-2xl border-border bg-card p-0 sm:rounded-2xl [&>button]:right-3 [&>button]:top-3 [&>button]:z-20 [&>button]:rounded-full [&>button]:bg-black/60 [&>button]:p-2 [&>button]:text-white">
        {project && (
          <>
            {/* Gallery */}
            <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
              <ProjectCover key={`${project.slug}-${index}`} project={project} index={index} />
              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Show screenshot ${i + 1}`}
                        aria-current={i === index}
                        className={cn("h-1.5 rounded-full transition-all", i === index ? "w-6 bg-white" : "w-1.5 bg-white/50")}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {project.category}
                {project.year && ` · ${project.year}`}
              </p>
              <DialogTitle className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{project.title}</DialogTitle>
              <DialogDescription className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project.description}
              </DialogDescription>

              <h4 className="mt-7 text-sm font-semibold text-foreground">Key features</h4>
              <ul className="mt-3 space-y-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <h4 className="mt-7 text-sm font-semibold text-foreground">Tech stack</h4>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Github size={16} /> View code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-5 py-2.5 text-sm text-muted-foreground">
                    <Github size={16} /> Repository not public yet
                  </span>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <ExternalLink size={16} /> Live demo
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
