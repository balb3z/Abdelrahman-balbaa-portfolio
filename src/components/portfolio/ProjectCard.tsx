import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import ProjectCover from "./ProjectCover";
import { Chip } from "./shared";

type Props = { project: Project; onOpen: (p: Project) => void; className?: string; wide?: boolean };

/** Full card with thumbnail. The whole card opens the details modal; link icons go straight to GitHub / demo. */
export const ProjectCard = ({ project, onOpen, className, wide }: Props) => (
  <article className={cn("surface surface-hover group relative flex flex-col overflow-hidden", className)}>
    <div className={cn("relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary", wide && "md:aspect-[21/9]")}>
      <ProjectCover project={project} className="transition-transform duration-500 group-hover:scale-[1.03]" />
      {project.images.length > 1 && (
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-0.5 font-mono text-[10px] text-white">
          {project.images.length} screenshots
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <div className="mb-2 flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        <span>{project.category}</span>
        {project.year && <span>{project.year}</span>}
      </div>
      <h3 className="text-lg font-semibold leading-snug text-foreground">
        {/* Stretched button: makes the whole card clickable while keeping inner links usable */}
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          aria-haspopup="dialog"
        >
          {project.title}
        </button>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
        {project.tech.length > 5 && <Chip>+{project.tech.length - 5}</Chip>}
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-2 border-t border-border pt-4">
        <span className="mr-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
          Details <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Github size={16} />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  </article>
);

/** Compact row used for the "more on GitHub" list. */
export const ProjectRow = ({ project, onOpen }: Props) => (
  <article className="surface surface-hover group relative flex items-center gap-4 p-4">
    <div className="h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-border">
      <ProjectCover project={project} compact />
    </div>
    <div className="min-w-0 flex-1">
      <h3 className="truncate text-sm font-semibold text-foreground">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          aria-haspopup="dialog"
        >
          {project.title}
        </button>
      </h3>
      <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{project.summary}</p>
    </div>
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} on GitHub`}
        className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
      >
        <Github size={16} />
      </a>
    )}
  </article>
);
