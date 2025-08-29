import { Card } from "@/components/ui/card";
import { Code, Database, Server, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, readable code that follows industry best practices and standards."
    },
    {
      icon: Zap,
      title: "Reusable Components",
      description: "Building modular, reusable components that accelerate development and ensure consistency."
    },
    {
      icon: Server,
      title: "Scalable Systems",
      description: "Architecting robust backend systems that can grow with business requirements."
    },
    {
      icon: Database,
      title: "Modern Architecture",
      description: "Implementing hexagonal architecture and microservices for maintainable applications."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate Full Stack Developer with <span className="text-primary font-semibold">2 years of experience</span> in 
            building modern web applications. I specialize in transforming complex business requirements into 
            elegant, scalable solutions using cutting-edge technologies.
          </p>
        </div>

        {/* Personal Story */}
        <div className="mb-16">
          <Card className="card-gradient border-border/50 p-8 shadow-card hover-lift">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  My Journey in Tech
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Started as a Mechanical Engineer, I discovered my passion for software development 
                  and made a successful transition into tech. My engineering background gives me a 
                  unique analytical approach to problem-solving.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently working at <span className="text-primary font-medium">Simplify3X</span>, 
                  I've successfully migrated legacy monolithic systems to modern microservices 
                  architecture and built dynamic dashboards that serve thousands of users daily.
                </p>
              </div>
              <div className="relative">
                <div className="skill-gradient rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                  <div className="text-2xl font-bold text-primary mt-4 mb-2">10+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            What Drives My Development Philosophy
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="card-gradient border-border/50 p-6 shadow-card hover-lift text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="skill-gradient rounded-full p-4 group-hover:animate-pulse-glow transition-smooth">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;