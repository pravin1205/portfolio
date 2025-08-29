import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Employee Dashboard System",
      description: "Dynamic ReactJS dashboard with Material UI for employee allocations and skill matrices. Features paginated tables, accordion components, and real-time data integration with Spring Boot APIs.",
      category: "Full Stack",
      tech: ["ReactJS", "Material UI", "Spring Boot", "REST APIs", "Pagination"],
      github: "https://github.com/pravin1205/employee-dashboard",
      live: "https://employee-dashboard-demo.com",
      type: "Professional",
      highlights: ["Real-time Data", "Responsive Design", "Reusable Components"],
      hidden: false
    },
    {
      title: "Microservices Migration Platform",
      description: "Successfully migrated a monolithic EJB-based telecom system to modern Spring Boot microservices architecture with Kafka integration and Hexagonal Architecture patterns.",
      category: "Backend",
      tech: ["Spring Boot", "Apache Kafka", "Microservices", "Hexagonal Architecture", "Migration"],
      github: "https://github.com/pravin1205/microservices-migration",
      live: "",
      type: "Enterprise",
      highlights: ["Legacy Migration", "Scalable Architecture", "Event-Driven"],
      hidden: true
    },
    {
      title: "NLP Filter API System",
      description: "Built intelligent filtering APIs with Natural Language Processing capabilities, execution report generators, and advanced pagination logic for large datasets.",
      category: "Backend",
      tech: ["Spring Boot", "NLP", "PostgreSQL", "REST APIs", "Report Generation"],
      github: "https://github.com/pravin1205/nlp-filter-system",
      live: "",
      type: "AI/ML",
      highlights: ["NLP Integration", "Smart Filtering", "Report Generation"],
      hidden: true
    },
    {
      title: "Dynamic Report Generator",
      description: "Comprehensive report generation system creating PDF and HTML reports using Thymeleaf and EJS templates. Supports multiple data sources and custom formatting.",
      category: "Full Stack",
      tech: ["Spring Boot", "Thymeleaf", "EJS", "PDF Generation", "MongoDB"],
      github: "https://github.com/pravin1205/report-generator",
      live: "https://report-generator-demo.com",
      type: "Utility",
      highlights: ["Multi-format Output", "Template Engine", "Data Visualization"],
      hidden: false
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with ReactJS and TypeScript. Features smooth animations, dark mode support, and optimized performance.",
      category: "Frontend",
      tech: ["ReactJS", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
      github: "https://github.com/pravin1205/portfolio",
      live: "https://pravin-portfolio.com",
      type: "Personal",
      highlights: ["Smooth Animations", "SEO Optimized", "Mobile First"],
      hidden: false
    },
    {
      title: "E-Commerce Backend API",
      description: "Scalable e-commerce backend with user authentication, product management, order processing, and payment integration. Built with Spring Boot microservices architecture.",
      category: "Backend",
      tech: ["Spring Boot", "Spring Security", "MySQL", "JWT", "Payment Gateway"],
      github: "https://github.com/pravin1205/ecommerce-backend",
      live: "",
      type: "E-Commerce",
      highlights: ["Secure Authentication", "Payment Integration", "Scalable Architecture"],
      hidden: false
    }
  ];

  const filters = ["All", "Frontend", "Backend", "Full Stack"];

  const filteredProjects = activeFilter === "All" 
    ? projects.filter(project => !project.hidden)
    : projects.filter(project => project.category === activeFilter && !project.hidden);

  const getTypeColor = (type: string) => {
    const colors = {
      "Professional": "hsl(150 100% 60%)",
      "Enterprise": "hsl(280 100% 70%)",
      "AI/ML": "hsl(320 100% 70%)",
      "Utility": "hsl(200 100% 60%)",
      "Personal": "hsl(150 100% 60%)",
      "E-Commerce": "hsl(150 100% 60%)"
    };
    return colors[type as keyof typeof colors] || "hsl(240 100% 80%)";
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of real-world applications and systems I've built, from enterprise 
            microservices to modern web applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`hover-lift ${
                activeFilter === filter 
                  ? "bg-primary text-primary-foreground shadow-elegant" 
                  : "border-primary/30 text-foreground hover:bg-primary/10"
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-gradient border-border/50 shadow-card hover-lift group transition-smooth overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Type Badge */}
              <div className="p-6 pb-0">
                <Badge 
                  className="mb-4 text-xs"
                  style={{ 
                    background: `${getTypeColor(project.type)}20`,
                    color: getTypeColor(project.type),
                    border: `1px solid ${getTypeColor(project.type)}30`
                  }}
                >
                  {project.type}
                </Badge>
              </div>

              <div className="p-6 pt-0">
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary" 
                        className="text-xs bg-muted/30 hover:bg-muted/50"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline" 
                        className="text-xs border-primary/30 hover:border-primary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Hidden but kept for future use */}
                <div className="flex gap-3" style={{ display: 'none' }}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild 
                    className="flex-1 hover-lift"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button 
                      size="sm" 
                      asChild 
                      className="flex-1 hover-lift bg-primary hover:bg-primary/90"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More projects available on my{" "}
            <a 
              href="https://github.com/pravin1205" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              GitHub profile
            </a>
            . Always working on something new!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;