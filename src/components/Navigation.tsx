import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const current = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

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
• AI Technologies: Cursor, ChatGPT, Gemini, Claude, Emergent, lovable.dev, Bolt.new, Base44

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

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-xl font-bold text-gradient hover:scale-105 transition-transform"
              >
                Pravin N
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${
                    activeSection === item.id
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={handleDownloadResume}
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover-lift"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-primary"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border/50 shadow-elegant">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-smooth ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10 border border-primary/30"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  onClick={handleDownloadResume}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;