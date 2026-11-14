import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, profile } from "@/data/portfolio";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      let current = "";
      for (const l of navLinks) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= 140) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-2 font-semibold tracking-tight text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-xs text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            AB
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === l.href && <span className="absolute inset-0 -z-10 rounded-full bg-secondary" />}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            download={profile.cvFileName}
            className="hidden items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary sm:inline-flex"
          >
            <Download size={15} /> CV
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] border-t border-border bg-background md:hidden">
          <ul className="container-x flex flex-col gap-1 py-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3.5 text-lg transition-colors",
                    active === l.href ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href={profile.cv}
                download={profile.cvFileName}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-medium text-primary-foreground"
              >
                <Download size={18} /> Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
