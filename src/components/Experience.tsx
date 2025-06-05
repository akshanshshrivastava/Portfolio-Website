
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Senior DevOps Engineer</h3>
                <h4 className="text-xl text-blue-600 font-semibold">Oracle</h4>
              </div>
              <div className="flex flex-col md:items-end mt-4 md:mt-0">
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>06/2018 - Current</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Bengaluru, India</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-900 mb-3">Key Achievements</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>SPOC and technical lead for "Observability Services Overlay (OSO)" - a custom Prometheus-Alertmanager stack</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Expert in Kubernetes networking, multi-tenancy, CRI like "Container(d)" and Docker</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Designed and maintained 10+ core Ansible playbooks enabling idempotent deployments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Skilled in CI/CD pipelines with GitLab and Jenkins - proficient-as-code</span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-3">Technical Impact</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Reduced upgrade time by ~50% through fast-forward cluster upgrade mechanism</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Maintained 100+ clusters across diverse environments: Bare-metal, OpenStack, and VMware</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Created 5+ in-house Helm charts and maintained 240+ open-source Helm charts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Mentored 20+ engineers, fostering collaboration and deep technical growth</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Education</h5>
              <div className="text-gray-700">
                <p className="font-medium">B.Tech 01/2018</p>
                <p>Indian Institute of Information Technology, Design And Manufacturing (IIITDM), Jabalpur - Jabalpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
