
import { Award, MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Experienced DevOps Engineer with 7 years of hands-on experience at Oracle, specializing in building 
              cloud-native, production-grade platforms. Proficient in Kubernetes infrastructure and end-to-end platform 
              automation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Recognized technical leader and single point of contact (SPOC) for high-impact mentoring solutions, 
              with deep expertise in Prometheus, container runtimes, and CI/CD pipelines. Skilled in Python, 
              Terraform, Ansible, and implementing security-first governance using Kyverno for Kubernetes environments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Proven track record in delivering scalable systems, mentoring cross-functional teams, and solving 
              complex challenges across hybrid infrastructures—including bare-metal, VMware, and OpenStack.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Bengaluru, KA 560061</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">+91 9424553128</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">harshita649@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">AWS Cloud Technical Essentials</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">OCI AI Foundations Associate</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Microsoft Certified Azure Fundamentals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
