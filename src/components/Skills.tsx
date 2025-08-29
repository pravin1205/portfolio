import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Settings, 
  MessageSquare, 
  Layout,
  Server,
  Cpu,
  Brain
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      color: "hsl(263 70% 50.4%)",
      skills: ["Java", "JavaScript", "TypeScript"]
    },
    {
      icon: Server,
      title: "Backend",
      color: "hsl(280 100% 70%)",
      skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring AOP", "Microservices", "REST APIs"]
    },
    {
      icon: Globe,
      title: "Frontend",
      color: "hsl(240 100% 80%)",
      skills: ["ReactJS", "HTML5", "CSS3", "Material UI", "Responsive Design"]
    },
    {
      icon: Database,
      title: "Databases",
      color: "hsl(200 100% 70%)",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "MariaDB"]
    },
    {
      icon: MessageSquare,
      title: "Messaging",
      color: "hsl(320 100% 70%)",
      skills: ["Apache Kafka"]
    },
    {
      icon: Settings,
      title: "Tools",
      color: "hsl(150 100% 60%)",
      skills: ["Git", "GitHub", "GitLab", "Maven", "IntelliJ", "Eclipse", "Postman", "Swagger"]
    },
    {
      icon: Layout,
      title: "Architecture",
      color: "hsl(30 100% 65%)",
      skills: ["Hexagonal Architecture", "Monolithic to Microservices Migration", "RESTful Design"]
    },
    {
      icon: Cpu,
      title: "Others",
      color: "hsl(340 100% 70%)",
      skills: ["EJS", "Express.js", "Thymeleaf", "Offset Explorer", "NLP Integration"]
    },
    {
      icon: Brain,
      title: "AI Technologies",
      color: "hsl(180 100% 60%)",
      skills: ["Cursor", "ChatGPT", "Gemini", "Claude", "Emergent", "Bolt.new", "Base44"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications from backend microservices 
            to responsive frontend experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="card-gradient border-border/50 p-6 shadow-card hover-lift group transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div 
                  className="rounded-lg p-3 mr-3 group-hover:animate-pulse-glow transition-smooth"
                  style={{ 
                    background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                    border: `1px solid ${category.color}30`
                  }}
                >
                  <category.icon 
                    className="h-6 w-6" 
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="w-full justify-start p-3 hover-lift text-left bg-muted/50 hover:bg-muted/70 border-border/30"
                    style={{ 
                      animationDelay: `${index * 0.1 + skillIndex * 0.05}s`,
                      borderLeft: `3px solid ${category.color}`
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Skill Level Indicator */}
              <div className="mt-4 pt-4 border-t border-border/30">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Proficiency</span>
                  <span>
                    {category.title === 'Backend' || category.title === 'Languages' ? 'Expert' :
                     category.title === 'Frontend' || category.title === 'Databases' ? 'Advanced' : 
                     'Intermediate'}
                  </span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                      width: category.title === 'Backend' || category.title === 'Languages' ? '90%' :
                             category.title === 'Frontend' || category.title === 'Databases' ? '80%' : '70%'
                    }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Always learning and adapting to new technologies. Currently exploring 
            <span className="text-primary font-medium"> Cloud Architectures</span> and 
            <span className="text-primary font-medium"> DevOps Practices</span>.
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            <span className="text-cyan-400 font-medium">AI Technologies:</span> Hands-on experience collaborating with AI tools for optimizing development workflows through prompt-driven approaches.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;