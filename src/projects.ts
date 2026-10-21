export interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    image: string;
  }
  

  export const projects: Project[] = [
    {
      title: "DevOps-online-learning-platform-infra",
      description:
        "Automated build, test, and deploy pipeline for a containerized app, with multi-stage workflows and automatic rollback on failure.",
      tags: ["Docker", "GitHub Actions", "CI/CD"],
      githubUrl: "https://github.com/Ismoilov05",
      image: "",
    },
    {
      title: "Kubernetes Cluster| first project",
      description:
        "Full observability stack on Kubernetes using Prometheus for metrics collection and Grafana dashboards for real-time visualization.",
      tags: ["Kubernetes", "Prometheus", "Grafana"],
      githubUrl: "https://github.com/Ismoilov05",
      image: "",
    },
    {
      title: "Infrastructure as Code on AWS",
      description:
        "Reproducible AWS infrastructure (VPC, EC2, S3) provisioned and managed entirely through Terraform modules.",
      tags: ["Terraform", "AWS", "IaC"],
      githubUrl: "https://github.com/Ismoilov05",
      image: "",
    },
    {
      title: "Automated Server Provisioning",
      description:
        "Ansible playbooks for configuring and provisioning Linux servers consistently across multiple environments.",
      tags: ["Ansible", "Linux", "Bash"],
      githubUrl: "https://github.com/Ismoilov05",
      image: "",
    },
    {
      title: " CI Pipeline for Microservices",
      description:
        "Multi-branch Jenkins pipeline that builds, tests, and pushes Docker images for a microservices architecture.",
      tags: ["Jenkins", "Docker", "Microservices"],
      githubUrl: "https://github.com/Ismoilov05",
      image: "",
    },
    {
      title: "Log Aggregation & Alerting",
      description:
        "Centralized logging setup with alert rules for catching failures and performance issues before they impact users.",
      tags: ["Prometheus", "Grafana", "Linux"],
      githubUrl: "https://github.com/Ismoilov05",
      image: "",
    },
    {
      title: "Dockerized-microservices",
      description:
        "A multi-container application orchestrated with Docker Compose, including networking and persistent volumes.",
      tags: ["Docker", "Bash Scripting"],
      githubUrl: "https://github.com/Ismoilov05/dockerized-microservices",
      image: "",
    },
    {
      title: "AWS Auto Scaling Infrastructure",
      description:
        "Auto-scaling group and load balancer setup on AWS, provisioned with Terraform to handle variable traffic loads.",
      tags: ["AWS", "Terraform", "Python"],
      githubUrl: "https://github.com/Ismoilov05",
      image: "",
    },
    {
      title: "Kubernetes Deployment Automation",
      description:
        "Helm charts and deployment scripts for rolling out and managing applications on a Kubernetes cluster.",
      tags: ["Kubernetes", "Bash Scripting"],
      githubUrl: "https://github.com/Ismoilov05",
      image: "",
    },
    {
      title: "Python Automation Scripts for DevOps",
      description:
        "Collection of Python utilities for automating routine infrastructure tasks like backups, health checks, and reports.",
      tags: ["Python", "Linux", "Bash"],
      githubUrl: "https://github.com/Ismoilov05",
      image: "",
    },
  ];