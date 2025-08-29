import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    // Check if PDF resume exists, otherwise fallback to text version
    const pdfUrl = '/Pravin-N-Full-Stack-Developer.pdf';
    
    // Try to fetch the PDF file to check if it exists
    fetch(pdfUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // PDF exists, download it
          const a = document.createElement('a');
          a.href = pdfUrl;
          a.download = 'Pravin-N-Full-Stack-Developer.pdf';
          a.target = '_blank';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else {
          // PDF doesn't exist, fallback to text version
          downloadTextResume();
        }
      })
      .catch(() => {
        // Error fetching PDF, fallback to text version
        downloadTextResume();
      });
  };

  const downloadTextResume = () => {
    const resumeData = `
PRAVIN N - FULL STACK DEVELOPER

Email: pravinjosh5021@gmail.com
Phone: +91-9629138542
Location: Bengaluru, India

PROFESSIONAL SUMMARY:
Full Stack Developer with 2 years of experience specializing in Java Spring Boot microservices and ReactJS. 
Skilled in building scalable backend systems, integrating frontend components, RESTful API development, 
production support, and modernizing legacy systems. AI Generalist with hands-on experience in prompt-driven development workflows.

TECHNICAL SKILLS:
• Languages: Java, JavaScript, TypeScript
• Backend: Spring Boot, Spring MVC, Spring Data JPA, Microservices
• Frontend: ReactJS, HTML5, CSS3, Material UI
• Databases: MySQL, PostgreSQL, MongoDB, MariaDB
• Tools: Git, GitHub, Maven, IntelliJ, Postman, Swagger
• AI Technologies: Cursor, ChatGPT, Gemini, Claude, Emergent, Bolt.new, Base44

EXPERIENCE:
Simplify3X Private Limited (Sep 2024 – Present)
- Built dynamic dashboards with ReactJS + Material UI
- Created paginated tables and reusable components
- Migrated monolithic systems to microservices architecture

TestYantra Software Solutions (Aug 2023 – Aug 2024)  
- Designed REST APIs using Spring Boot
- Integrated with MongoDB and PostgreSQL
- Built NLP-powered filter APIs and report generators

EDUCATION:
B.E. Mechanical Engineering
Karapagam College of Engineering, Coimbatore (2018 – 2022)
    `;
    
    const blob = new Blob([resumeData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Pravin_N_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90" />
        
        {/* Accent Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-blue-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/15 to-cyan-400/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Heading */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block text-white drop-shadow-lg">Pravin N</span>
          </h1>
          <div className="text-gradient text-2xl md:text-3xl font-semibold mb-6">
            Full Stack Developer
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-slate-300 mb-6 font-medium animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Java Spring Boot & ReactJS Specialist → AI Generalist
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Building scalable backend systems and modern web applications with{' '}
          <span className="text-blue-400 font-semibold">clean code</span>,{' '}
          <span className="text-blue-400 font-semibold">reusable components</span>, and{' '}
          <span className="text-blue-400 font-semibold">impactful business delivery</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={handleDownloadResume}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0 font-semibold px-10 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 hover-lift transition-all duration-300"
          >
            <Download className="mr-3 h-6 w-6" />
            Download Resume
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={scrollToContact}
            className="border-2 border-blue-400/60 text-white hover:bg-blue-500/20 hover:border-blue-400 font-semibold px-10 py-4 text-lg backdrop-blur-sm bg-white/5 hover-lift transition-all duration-300"
          >
            <Mail className="mr-3 h-6 w-6" />
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://github.com/pravin1205" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
          >
            <Github className="h-8 w-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/pravin-n-759b5126b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a 
            href="mailto:pravinjosh5021@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;