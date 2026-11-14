import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="border-t border-border/60 py-10">
    <div className="container-x flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
      <div>
        <p className="font-semibold text-foreground">{profile.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          © {new Date().getFullYear()} · {profile.title} · {profile.location}
        </p>
      </div>
      <nav aria-label="Footer">
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-2">
        {[
          { href: profile.github, icon: Github, label: "GitHub", ext: true },
          { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", ext: true },
          { href: `mailto:${profile.email}`, icon: Mail, label: "Email", ext: false },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            {...(s.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <s.icon size={17} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
