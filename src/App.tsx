import { projects } from "./projects";

function ProjectImage({ title, image }: { title: string; image: string }) {
  if (image) {
    return (
      <img
        src={image}
        alt={title}
        className="h-40 w-full rounded-lg object-cover"
      />
    );
  }

  return (
    <div className="flex h-40 w-full items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 text-sm text-zinc-400">
      Screenshot coming soon
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <section className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-blue-600 text-lg">
            Hello, my name is
          </p>

          <h1 className="text-6xl font-bold">
            MuhammadQodir
          </h1>

          <h2 className="mt-4 text-2xl text-zinc-500">
            DevOps Engineer
          </h2>

          <p className="mt-6 max-w-xl text-zinc-500">
            Docker • Kubernetes • Linux • Terraform • AWS • GitHub Actions  CI/CD • Bash Scripting • Python • Ansible • Jenkins • Prometheus • Grafana
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              View Projects
            </a>

            <a
              href="/qodir-devops-portfolio/cv.pdf"
              download
              className="inline-block rounded-xl border border-zinc-300 px-8 py-4 font-semibold text-zinc-900 transition hover:border-blue-400 hover:text-blue-600"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-6 pb-24">
        <p className="mb-2 text-center font-mono text-sm text-blue-600">
          $ ls ./projects
        </p>
        <h2 className="mb-12 text-center text-4xl font-bold">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-blue-400 hover:shadow-md"
            >
              <ProjectImage title={project.title} image={project.image} />

              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold transition group-hover:text-blue-600">
                  {project.title}
                </h3>
                <svg
                  viewBox="0 0 24 24"
                  className="mt-1 h-5 w-5 flex-shrink-0 fill-current text-zinc-400 transition group-hover:text-blue-600"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>

              <p className="mt-2 flex-1 text-sm text-zinc-500">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-xs text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}