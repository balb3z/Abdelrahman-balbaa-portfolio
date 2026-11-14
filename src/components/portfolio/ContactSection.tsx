import { useState } from "react";
import { Check, Copy, Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./shared";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github, external: true },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref, external: false },
];

const inputCls =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  // No backend on GitHub Pages: compose the message in the visitor's mail app.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section border-t border-border/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="07 · Contact"
          title="Let's work together"
          description="Open to conversations about data engineering, AI, and analytics opportunities. The fastest way to reach me is email or LinkedIn."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="space-y-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="surface surface-hover group flex items-center gap-4 p-4"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon size={19} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{c.label}</span>
                  <span className="block truncate font-medium text-foreground">{c.value}</span>
                </span>
              </a>
            ))}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span aria-live="polite">{copied ? "Email copied" : "Copy email"}</span>
              </button>
              <a
                href={profile.cv}
                download={profile.cvFileName}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Download size={15} /> Download CV
              </a>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin size={14} /> {profile.location}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="surface space-y-4 p-6 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Name</span>
                  <input name="name" required autoComplete="name" placeholder="Your name" className={inputCls} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</span>
                  <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputCls} />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</span>
                <textarea name="message" required rows={5} placeholder="Tell me about the role or project…" className={`${inputCls} resize-y`} />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Send size={16} /> Send message
              </button>
              <p className="text-center text-xs text-muted-foreground">Opens your email app with the message pre-filled.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
