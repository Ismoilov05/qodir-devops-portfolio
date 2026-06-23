export interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
  }
  
  // 👇 Bu yerga o'zingizning real projectlaringizni qo'shing.
  // title       — project nomi
  // description — qisqa tavsif (1-2 gap, nima qildi, qaysi muammoni hal qildi)
  // tags        — ishlatilgan texnologiyalar
  // githubUrl   — repo'ga to'liq link
  export const projects: Project[] = [
    {
      title: "CI/CD Pipeline with GitHub Actions",
      description:
        "Automated build, test, and deploy pipeline for a containerized app, with multi-stage workflows and automatic rollback on failure.",
      tags: ["Docker", "GitHub Actions", "CI/CD"],
      githubUrl: "https://github.com/Ismoilov05",
    },
    {
      title: "Kubernetes Cluster Monitoring",
      description:
        "Full observability stack on Kubernetes using Prometheus for metrics collection and Grafana dashboards for real-time visualization.",
      tags: ["Kubernetes", "Prometheus", "Grafana"],
      githubUrl: "https://github.com/Ismoilov05",
    },
    {
      title: "Infrastructure as Code on AWS",
      description:
        "Reproducible AWS infrastructure (VPC, EC2, S3) provisioned and managed entirely through Terraform modules.",
      tags: ["Terraform", "AWS", "IaC"],
      githubUrl: "https://github.com/Ismoilov05",
    },
    {
      title: "Automated Server Provisioning",
      description:
        "Ansible playbooks for configuring and provisioning Linux servers consistently across multiple environments.",
      tags: ["Ansible", "Linux", "Bash"],
      githubUrl: "https://github.com/Ismoilov05",
    },
  ];