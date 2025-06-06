import { ChevronDown, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Profile Photo */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
            <img
              src="/images/harshita.jpeg"
              alt="Harshita Jaiswal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Harshita <span className="text-blue-600">Jaiswal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
              Senior DevOps Engineer
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed">
              Experienced DevOps Engineer with 7+ years of expertise in building cloud-native, 
              production-grade platforms. Specialized in Kubernetes infrastructure, automation, 
              and scalable system architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-16">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
              <a 
                href="https://www.linkedin.com/in/harshita-jaiswal-175747112/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>

            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
