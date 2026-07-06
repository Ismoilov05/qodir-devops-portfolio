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
      githubUrl: "https://github.com/Ismoilov05/DevOps-online-learning-platform-infra",
      image: "",
    },
    {
      title: "Kubernetes Cluster| first project",
      description:
        "Full installation and using first time k8s stack",
      tags: ["Kubernetes"],
      githubUrl: "https://github.com/Ismoilov05/KubernetesProject",
      image: "",
    },
    {
      title: "Practice Linux",
      description:
        "Ansible playbooks for configuring and provisioning Linux servers consistently across multiple environments.",
      tags: [ "Linux", "Bash"],
      githubUrl: "https://github.com/Ismoilov05/Practice_Linux",
      image: "",
    },
    {
      title: " CI Pipeline for Microservices",
      description:
        "Multi-branch  pipeline that builds, tests, and pushes Docker images for a microservices architecture.",
      tags: [ "Docker", "Microservices"],
      githubUrl: "https://github.com/Ismoilov05/weather-django-ci",
      image: "",
    },
    {
      title: "Log-management-platform",
      description:
        "Centralized logging setup with alert rules for catching failures and performance issues before they impact users.",
      tags: ["Prometheus", "Grafana", "Linux"],
      githubUrl: "https://github.com/Ismoilov05/Log-management-platform",
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
      title: "VProfileProjectPractice",
      description:
        "it is for learning DevOps, this is depends on My UdemyCourse",
      tags: ["Python", "Linux", "Bash"],
      githubUrl: "https://github.com/Ismoilov05/VProfileProjectPractice",
      image: "",
    },

    {
      title: "Monitoring-Platform",
      description:
        "Monitoring platform for tracking system metrics and performance, with alerting and visualization features.",
      tags: ["Python", "Linux", "Bash", "Prometheus", "Grafana", "Nginx"],
      githubUrl: "https://github.com/Ismoilov05/Monitoring-Platform",
      image: "",
    },
  ];