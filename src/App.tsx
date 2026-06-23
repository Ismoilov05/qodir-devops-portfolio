export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-blue-500 text-lg">
            Hello, my name is
          </p>

          <h1 className="text-6xl font-bold">
            MuhammadQodir
          </h1>

          <h2 className="mt-4 text-2xl text-zinc-400">
            DevOps Engineer
          </h2>

          <p className="mt-6 max-w-xl text-zinc-500">
            Docker • Kubernetes • Linux • Terraform • AWS • GitHub Actions  CI/CD • Bash Scripting • Python • Ansible • Jenkins • Prometheus • Grafana
          </p>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}