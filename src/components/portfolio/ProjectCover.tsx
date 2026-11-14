import { useState } from "react";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * Project thumbnail. Shows the first screenshot when one exists; otherwise
 * (or if the image fails to load) renders a generated placeholder cover
 * tinted with the project's accent hue.
 */
const ProjectCover = ({
  project,
  className,
  index = 0,
  compact = false,
}: {
  project: Project;
  className?: string;
  index?: number;
  compact?: boolean;
}) => {
  const src = project.images[index];
  const [failed, setFailed] = useState(false);
  const hue = project.accent ?? 160;

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={`${project.title} screenshot${project.images.length > 1 ? ` ${index + 1}` : ""}`}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={cn("h-full w-full object-cover object-top", className)}
      />
    );
  }

  const initials = project.title
    .split(/[\s—-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      role="img"
      aria-label={`${project.title} — placeholder cover`}
      className={cn("relative flex h-full w-full items-center justify-center overflow-hidden", className)}
      style={{
        background: `radial-gradient(120% 90% at 0% 0%, hsl(${hue} 70% 60% / 0.35), transparent 55%),
                     radial-gradient(90% 80% at 100% 100%, hsl(${(hue + 50) % 360} 70% 60% / 0.25), transparent 60%),
                     hsl(220 35% 97%)`,
      }}
    >
      <div className="bg-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <svg className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-40" viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0 80 C 60 60, 90 90, 140 55 S 230 20, 280 45 S 360 30, 400 10 L400 100 L0 100 Z"
          fill={`hsl(${hue} 60% 55% / 0.18)`}
        />
        <path
          d="M0 80 C 60 60, 90 90, 140 55 S 230 20, 280 45 S 360 30, 400 10"
          fill="none"
          stroke={`hsl(${hue} 55% 45%)`}
          strokeWidth="1.5"
        />
      </svg>
      <span
        className={cn("relative font-mono font-semibold tracking-tight", compact ? "text-base" : "text-4xl")}
        style={{ color: `hsl(${hue} 50% 32%)` }}
      >
        {initials}
      </span>
      {!compact && (
      <span className="absolute bottom-3 right-3 rounded-full border border-border bg-white/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        Screenshot coming soon
      </span>
      )}
    </div>
  );
};

export default ProjectCover;
