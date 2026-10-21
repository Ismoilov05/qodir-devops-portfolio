export interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    image: string;
  }
  

  export const projects: Project[] = [
    


    {
      title: "Kubernetes Cluster Setup",
      description:
        "A highly available Kubernetes cluster setup with multiple worker nodes, configured for auto-scaling and rolling updates.",
      tags: ["Kubernetes"],
      githubUrl: "https://github.com/Ismoilov05/shopsphere-k8slab.git",
      image: "",
    },
    {
      title: "Kubernetes Deployment labs",
      description:
        " A collection of Kubernetes deployment examples, including YAML manifests for various workloads and services.",
      tags: ["Kubernetes", "Bash Scripting"],
      githubUrl: "https://github.com/Ismoilov05/k8s-lab.git",
      image: "",
    },
    
  

    {
      title: " CI Pipeline for Microservices",
      description:
        "Multi-branch Jenkins pipeline that builds, tests, and pushes Docker images for a microservices architecture.",
      tags: ["Jenkins", "Docker", "Microservices"],
      githubUrl: "https://github.com/Ismoilov05/Java-Spring-example-2-microservices-with-postgres-CI-CD-for-it.git",
      image: "",
    },
    {
      title: "Log Aggregation & Alerting",
      description:
        "Centralized logging setup with alert rules for catching failures and performance issues before they impact users.",
      tags: ["Prometheus", "Grafana", "Linux"],
      githubUrl: "https://github.com/Ismoilov05/Monitoring-Platform.git",
      image: "",
    },

    {
      title: "Marketplace API with Docker Compose",
      description:
        "Docker Compose setup for a multi-container application, including a web server, database, and caching layer, with environment variable management.",
      tags: ["Docker Compose", "Node.js", "Express"],
      githubUrl: "https://github.com/Ismoilov05/Marketplaceplace-api.git",
      image: "",
    },
    {
      title: "online-learning-platform-infra",
      description:
        "Automated build, test, and deploy pipeline for a containerized app, with multi-stage workflows and automatic rollback on failure.",
      tags: ["Docker", "GitHub Actions", "CI/CD"],
      githubUrl: "https://github.com/Ismoilov05/DevOps-online-learning-platform-infra.git",
      image: "",
    },
   
  
  ];