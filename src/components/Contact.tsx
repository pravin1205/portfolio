import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EMAIL_TEMPLATE_PARAMS } from "@/config/emailjs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: EMAIL_TEMPLATE_PARAMS.to_name,
        reply_to: EMAIL_TEMPLATE_PARAMS.reply_to
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pravinjosh5021@gmail.com",
      href: "mailto:pravinjosh5021@gmail.com",
      color: "hsl(263 70% 50.4%)"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9629138542",
      href: "tel:+919629138542",
      color: "hsl(280 100% 70%)"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: "https://maps.google.com/?q=Bengaluru,India",
      color: "hsl(200 100% 70%)"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/pravin1205",
      color: "hsl(240 5% 64.9%)"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pravin-n-759b5126b",
      color: "hsl(200 100% 50%)"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create 
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Get In Touch</h3>
            
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.label}
                  className="card-gradient border-border/50 shadow-card hover-lift transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <a 
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group"
                    >
                      <div 
                        className="rounded-lg p-3 mr-4 group-hover:animate-pulse-glow transition-smooth"
                        style={{ 
                          background: `${info.color}20`,
                          border: `1px solid ${info.color}30`
                        }}
                      >
                        <info.icon className="h-6 w-6" style={{ color: info.color }} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-lg font-medium text-foreground group-hover:text-primary transition-smooth">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div 
                      className="rounded-lg p-4 hover-lift group-hover:animate-pulse-glow transition-smooth border border-border/50"
                      style={{ 
                        background: `${social.color}10`,
                        borderColor: `${social.color}30`
                      }}
                    >
                      <social.icon 
                        className="h-6 w-6 group-hover:scale-110 transition-transform" 
                        style={{ color: social.color }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="card-gradient border-border/50 shadow-card mt-8">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3" />
                  <div>
                    <p className="font-medium text-foreground">Available for new opportunities</p>
                    <p className="text-sm text-muted-foreground">
                      Open to full-time positions and freelance projects
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Send a Message</h3>
            
            <Card className="card-gradient border-border/50 shadow-card">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-muted/30 border-border/50 focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-muted/30 border-border/50 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <Label htmlFor="subject" className="text-foreground font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-muted/30 border-border/50 focus:border-primary"
                      placeholder="Project discussion, job opportunity, etc."
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-2 bg-muted/30 border-border/50 focus:border-primary resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 shadow-elegant hover-lift"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>

                {/* Form Note */}
                <div className="mt-6 p-4 skill-gradient rounded-lg border border-primary/30">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground mb-1">Quick Response Guaranteed</p>
                      <p>I typically respond within 24 hours. For urgent matters, feel free to call directly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;