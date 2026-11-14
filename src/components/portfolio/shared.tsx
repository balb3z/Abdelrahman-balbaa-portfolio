import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

/** Fades + lifts its children in once when scrolled into view. */
export const Reveal = ({
  delay = 0,
  as = "div",
  className,
  children,
  ...rest
}: HTMLMotionProps<"div"> & { delay?: number; as?: "div" | "li" }) => {
  const reduce = useReducedMotion();
  const Comp = (as === "li" ? motion.li : motion.div) as typeof motion.div;
  return (
    <Comp
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) => (
  <Reveal className={cn("mb-12 max-w-2xl sm:mb-16", className)}>
    <p className="eyebrow mb-3">{eyebrow}</p>
    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>}
  </Reveal>
);

/** Organization logo, or a monogram tile when no logo is available. */
export const OrgLogo = ({ name, src, className }: { name: string; src?: string; className?: string }) => {
  const initials = name
    .replace(/\(.*?\)/g, "")
    .split(/[\s–-]+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border",
        src ? "bg-white p-1.5" : "bg-gradient-to-br from-primary/20 to-primary/5",
        className,
      )}
      aria-hidden="true"
    >
      {src ? (
        <img src={src} alt="" loading="lazy" className="h-full w-full object-contain" />
      ) : (
        <span className="font-mono text-sm font-semibold text-primary">{initials}</span>
      )}
    </div>
  );
};

export const Chip = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("chip", className)}>{children}</span>
);
