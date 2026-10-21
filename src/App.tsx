
import { projects } from "./projects";

function ProjectImage({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  if (image) {
    return (
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-44 w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.02]"
      />
    );
  }

  return (
    <div className="flex h-44 w-full items-center justify-center rounded-xl border border-dashed border-white/15 bg-slate-900/80 text-sm text-slate-400">
      Linkga bosing!
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen overflow-hidden bg-[#060a16] text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(6,10,22,0.88), rgba(6,10,22,0.96)), url(/qodir-devops-portfolio/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060a16]/80 backdrop-blur-xl">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="font-mono text-lg font-bold tracking-tight"
          >
            <span className="text-blue-400">~/</span>qodir.dev
          </a>

          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a
              href="#home"
              className="transition hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#projects"
              className="transition hover:text-blue-400"
            >
              Projects
            </a>
            <a
              href="/qodir-devops-portfolio/cv.pdf"
              download
              className="rounded-lg border border-blue-400/40 px-4 py-2 text-blue-300 transition hover:bg-blue-500/10"
            >
              CV ↓
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main id="home">
        <section className="container mx-auto flex min-h-[85vh] items-center px-6 py-20">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 font-mono text-xs text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              DEVOPS ENGINEER
            </div>

            <p className="mb-4 font-mono text-sm tracking-widest text-blue-400 sm:text-base">
              ASSALOMU ALEYKUM, MEN 
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              MuhammadQodir
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                DevOps Engineer
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Men infratuzilmani avtomatlashtirish, CI/CD
              jarayonlarini yo‘lga qo‘yish, container orchestration
              va monitoring yechimlari bilan ishlayman.
              Maqsadim — ishonchli, xavfsiz va kengaytiriladigan
              tizimlarni yaratish.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Docker",
                "Kubernetes",
                "Linux",
                "Terraform",
                "AWS",
                "Jenkins",
                "GitHub Actions",
                "Ansible",
                "Python",
                "Prometheus",
                "Grafana",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs text-slate-300 transition hover:border-blue-400/50 hover:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                View Projects
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/qodir-devops-portfolio/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                Download CV
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="mt-16 flex items-center gap-3 font-mono text-xs text-slate-500">
              <span className="text-blue-400">$</span>
              <span>kubectl get infrastructure --status=ready</span>
              <span className="h-4 w-1 animate-pulse bg-blue-400" />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="container mx-auto scroll-mt-24 px-6 pb-24 pt-12"
        >
          <div className="mb-12">
            <p className="mb-3 font-mono text-sm tracking-widest text-blue-400">
              01 / PORTFOLIO
            </p>

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Featured Projects
                </h2>
                <p className="mt-3 max-w-xl leading-7 text-slate-400">
                  Amaliy laboratoriyalar, infratuzilma va
                  avtomatlashtirish bo‘yicha loyihalarim.
                </p>
              </div>

              <span className="font-mono text-sm text-slate-500">
                {String(projects.length).padStart(2, "0")} projects
              </span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-blue-950/30"
              >
                <div className="overflow-hidden rounded-xl">
                  <ProjectImage
                    title={project.title}
                    image={project.image}
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-7 transition group-hover:text-blue-300">
                    {project.title}
                  </h3>

                  <svg
                    viewBox="0 0 24 24"
                    className="mt-1 h-5 w-5 flex-shrink-0 fill-current text-slate-500 transition group-hover:text-blue-400"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-white/[0.08] pt-4 text-sm font-medium text-blue-400 transition group-hover:text-blue-300">
                  View on GitHub <span aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-7 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>
            <span className="font-mono text-blue-400">~/</span>
            qodir.dev
          </p>
          <p>
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
