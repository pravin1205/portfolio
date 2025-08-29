import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Simplify3X Private Limited",
      role: "Full Stack Developer",
      period: "Sep 2024 – Present",
      location: "Bengaluru, India",
      type: "Full-time",
      achievements: [
        "Built dynamic dashboards with ReactJS + Material UI for employee allocations and skill matrices",
        "Created paginated tables, accordion components, and reusable form components with validations",
        "Integrated frontend with Spring Boot APIs for real-time data synchronization",
        "Successfully migrated a monolithic EJB-based telecom system into modern Spring Boot microservices",
        "Implemented Kafka integration and Hexagonal Architecture for improved scalability"
      ],
      technologies: ["ReactJS", "Material UI", "Spring Boot", "Microservices", "Apache Kafka", "Hexagonal Architecture"],
      companyColor: "hsl(263 70% 50.4%)"
    },
    {
      company: "TestYantra Software Solutions",
      role: "Java Backend Developer",
      period: "Aug 2023 – Aug 2024",
      location: "Bengaluru, India",
      type: "Full-time",
      achievements: [
        "Designed and implemented REST APIs and backend modules using Spring Boot",
        "Successfully integrated applications with MongoDB and PostgreSQL databases",
        "Built NLP-powered filter APIs for intelligent data processing",
        "Developed execution report generators with advanced pagination logic",
        "Created comprehensive PDF/HTML reports using Thymeleaf and EJS templates"
      ],
      technologies: ["Spring Boot", "MongoDB", "PostgreSQL", "NLP", "REST APIs", "Thymeleaf", "EJS"],
      companyColor: "hsl(280 100% 70%)"
    }
  ];

  const education = {
    degree: "Bachelor of Engineering",
    field: "Mechanical Engineering",
    institution: "Karapagam College of Engineering",
    location: "Coimbatore, India",
    period: "2018 – 2022",
    grade: "First Class",
    highlights: [
      "Strong analytical and problem-solving foundation",
      "Engineering principles applied to software architecture",
      "Project management and team collaboration experience"
    ]
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From mechanical engineering to full stack development - a journey of continuous learning 
            and building impactful solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company}
                className="card-gradient border-border/50 shadow-card hover-lift transition-smooth"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  {/* Company Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div 
                        className="rounded-lg p-3 mr-4"
                        style={{ 
                          background: `${exp.companyColor}20`,
                          border: `1px solid ${exp.companyColor}30`
                        }}
                      >
                        <Building2 className="h-6 w-6" style={{ color: exp.companyColor }} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{exp.company}</h4>
                        <p className="text-lg text-primary font-medium">{exp.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge className="bg-muted/30 text-foreground hover:bg-muted/50">
                        <Calendar className="mr-2 h-4 w-4" />
                        {exp.period}
                      </Badge>
                      <Badge className="bg-muted/30 text-foreground hover:bg-muted/50">
                        <MapPin className="mr-2 h-4 w-4" />
                        {exp.location}
                      </Badge>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground">
                          <div 
                            className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                            style={{ backgroundColor: exp.companyColor }}
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx}
                          variant="outline"
                          className="border-primary/30 hover:border-primary/50 hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground">Education</h3>
          <Card className="card-gradient border-border/50 shadow-card hover-lift">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="skill-gradient rounded-lg p-3 mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">
                      {education.degree} - {education.field}
                    </h4>
                    <p className="text-lg text-primary font-medium">{education.institution}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Badge className="bg-muted/30 text-foreground hover:bg-muted/50">
                    <Calendar className="mr-2 h-4 w-4" />
                    {education.period}
                  </Badge>
                  <Badge className="bg-muted/30 text-foreground hover:bg-muted/50">
                    <MapPin className="mr-2 h-4 w-4" />
                    {education.location}
                  </Badge>
                </div>
              </div>

              <div className="mb-4">
                <Badge 
                  className="mb-4"
                  style={{ 
                    background: "hsl(150 100% 60% / 0.2)",
                    color: "hsl(150 100% 60%)",
                    border: "1px solid hsl(150 100% 60% / 0.3)"
                  }}
                >
                  {education.grade}
                </Badge>
              </div>

              <div>
                <h5 className="text-sm font-medium text-foreground mb-3">Educational Foundation:</h5>
                <ul className="space-y-2">
                  {education.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;