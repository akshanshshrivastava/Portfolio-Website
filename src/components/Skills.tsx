
import { Code, Server, Cloud, Settings, Database, Shield } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Automation Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Jenkins", "GitLab CI/CD", "Docker", "Kubernetes", "Helm", "Prometheus", "Grafana", "OpenSearch", "Fluend", "Kibana", "OpenSearch Dashboards", "EFK Stack", "Ansible", "Terraform", "FluxCD"]
    },
    {
      title: "Programming & Scripting",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Shell", "Ansible", "Terraform", "CronJobs", "Helm hooks"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Oracle Cloud (OCI)", "Azure", "VMware", "OpenStack"]
    },
    {
      title: "Infrastructure & Orchestration",
      icon: <Server className="w-6 h-6" />,
      skills: ["Kubernetes", "Docker", "Containerd", "Linux", "macOS", "Windows", "Bare-metal"]
    },
    {
      title: "Monitoring & Observability",
      icon: <Database className="w-6 h-6" />,
      skills: ["Prometheus", "Grafana", "OpenSearch", "EFK Stack", "Helm charts", "Custom dashboards"]
    },
    {
      title: "Security & Governance",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Kyverno policies", "Security best practices", "Infrastructure as Code (IaC)", "Site Reliability Engineering (SRE)"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Methodologies & Practices</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Development Practices</h4>
              <p>Site Reliability Engineering (SRE), Infrastructure as Code (IaC), Agile</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Languages</h4>
              <p>English, Hindi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
