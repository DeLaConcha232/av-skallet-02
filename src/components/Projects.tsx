import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';

const translations = {
  es: {
    title: 'Proyectos Destacados',
    subtitle: 'Algunos de mis trabajos más recientes que demuestran mi experiencia técnica',
    viewProject: 'Ver Proyecto',
    viewCode: 'Ver Código',
    projects: [
      {
        title: 'Plataforma E-commerce',
        description: 'Plataforma completa de comercio electrónico con gestión de inventario, pagos y analytics.',
        image: '/project-ecommerce.webp',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'StartConsulting - Landing Page',
        description: 'Landing page profesional para consultoría de software con diseño responsive y animaciones.',
        image: '/project-consulting.webp', 
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Body Calculator - Web App',
        description: 'Aplicación web para cálculos corporales con interfaz moderna y funcionalidades avanzadas.',
        image: '/project-bodycalculator.webp',
        technologies: ['React', 'TypeScript', 'Vite', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Sheet From Form - Automatización',
        description: 'Sistema de automatización que conecta formularios web con hojas de cálculo en tiempo real.',
        image: '/project-sheetform.webp',
        technologies: ['Node.js', 'Google Sheets API', 'Webhook', 'Express'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Zetio - App Deportiva',
        description: 'Plataforma moderna para gestión de torneos deportivos con interfaz mobile-first.',
        image: '/project-zetio.webp',
        technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
        liveUrl: '#',
        codeUrl: '#'
      }
    ]
  },
  en: {
    title: 'Featured Projects',
    subtitle: 'Some of my most recent work showcasing my technical expertise',
    viewProject: 'View Project',
    viewCode: 'View Code',
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Complete e-commerce platform with inventory management, payments and analytics.',
        image: '/project-ecommerce.webp',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'StartConsulting - Landing Page',
        description: 'Professional landing page for software consulting with responsive design and animations.',
        image: '/project-consulting.webp',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Body Calculator - Web App',
        description: 'Web application for body calculations with modern interface and advanced features.',
        image: '/project-bodycalculator.webp',
        technologies: ['React', 'TypeScript', 'Vite', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Sheet From Form - Automation',
        description: 'Automation system that connects web forms with spreadsheets in real-time.',
        image: '/project-sheetform.webp',
        technologies: ['Node.js', 'Google Sheets API', 'Webhook', 'Express'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Zetio - Sports App',
        description: 'Modern platform for sports tournament management with mobile-first interface.',
        image: '/project-zetio.webp',
        technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
        liveUrl: '#',
        codeUrl: '#'
      }
    ]
  }
};

export const Projects: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {t.projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-lift hover-glow group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.viewProject}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};