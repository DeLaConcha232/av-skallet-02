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
        description: 'Plataforma de comercio electrónico para la compra de ropa, equipos y calzado clasificados por deportes, desarrollada como proyecto universitario.',
        image: '/project-ecommerce.webp',
        technologies: ['React', 'Vite', 'CSS Modules', 'C#', 'MySQL'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'StartConsulting - Landing Page',
        description: 'Consultoría LandingPage que combina el desarrollo de soluciones tecnológicas personalizadas con una misión educativa.',
        image: '/project-consulting.webp', 
        technologies: ['Astro', 'Tailwind'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Body Calculator - Web App',
        description: 'Web App diseñada para ayudar a los usuarios a calcular su ingesta diaria de calorías y distribución de macronutrientes basada en métricas personales como edad, peso, altura y nivel de actividad física. Ya sea que su objetivo es perder, mantener o ganar peso, esta herramienta proporciona un enfoque personalizado para administrar sus necesidades nutricionales.',
        image: '/project-bodycalculator.webp',
        technologies: ['JS', 'CSS Modules', 'Vite', 'PWA'],
        liveUrl: 'https://bodycalculator.surge.sh/',
        codeUrl: '#'
      },
      {
        title: 'Sheet From Form - Automatización',
        description: 'Sistema de automatización que conecta formularios web con hojas de cálculo en tiempo real.',
        image: '/project-sheetform.webp',
        technologies: ['Node.js', 'React', 'Vite', 'CSS Modules', 'Express', 'SQLite'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Zetio - App Deportiva',
        description: 'Web App Tournament Platform es una aplicación web progresiva diseñada para ayudar a los clubes deportivos a gestionar sus torneos, estadísticas y jugadores, proporcionando tanto interfaces de administración como de usuario.',
        image: '/project-zetio.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA', 'Webhook', 'Stripe'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Orpheon - Sistema de Lealtad',
        description: 'Sistema de lealtad diseñado para ayudar a la empresa a gestionar sus programas de fidelización de clientes, proporcionando tanto interfaces de administración como de usuario.',
        image: '/Sistemas-de-lealtad-Responsive.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Portafolio Personal - Web',
        description: 'Portafolio personal que muestra tus proyectos y habilidades como desarrollador.',
        image: '/portafolio.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Dashboard Admin - Web',
        description: 'Dashboard de administración que muestra métricas y estadísticas clave para la gestión de proyectos.',
        image: '/Dashboard.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Sistema de Tickets - Web',
        description: 'Sistema de gestión de tickets para soporte al cliente, permitiendo la creación, seguimiento y resolución de incidencias.',
        image: '/SistemaTickets.png',
        technologies: ['React', 'Vite', 'Tailwind', 'SQLite', 'Shadcn UI'],
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
        description: 'Sports E-commerce platform for purchasing clothing, gear, and footwear classified by various sports, developed as a university project.',
        image: '/project-ecommerce.webp',
        technologies: ['React', 'Vite', 'CSS Modules', 'C#', 'MySQL'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'StartConsulting - Landing Page',
        description: 'LandingPage consultancy that combines the development of custom technology solutions with an educational mission.',
        image: '/project-consulting.webp',
        technologies: ['Astro', 'Tailwind'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Body Calculator - Web App',
        description: 'Web App designed to help users calculate their daily caloric intake and macronutrient distribution based on personal metrics such as age, weight, height, and physical activity level. Whether you aim to lose, maintain, or gain weight, this tool provides a personalized approach to managing your nutritional needs.',
        image: '/project-bodycalculator.webp',
        technologies: ['JS', 'CSS Modules', 'Vite', 'PWA'],
        liveUrl: 'https://bodycalculator.surge.sh/',
        codeUrl: '#'
      },
      {
        title: 'Sheet From Form - Automation',
        description: 'Its a custom software for a contability company to improve execution times of some activities with the implementation with documents of Excel',
        image: '/project-sheetform.webp',
        technologies: ['Node.js', 'React', 'Vite', 'CSS Modules', 'Express', 'SQLite'],
        liveUrl: '',
        codeUrl: '#'
      },
      {
        title: 'Zetio - Sports App',
        description: 'Web App Tournament Platform is a progressive web application designed to help sports clubs manage their tournaments, statistics, and players, providing both admin and user interfaces',
        image: '/project-zetio.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA', 'Webhook', 'Stripe'],
        liveUrl: '#',
        codeUrl: '#'
      }
      ,
      {
        title: 'Orpheon - Loyalty System',
        description: 'A loyalty system designed to help companies manage their customer loyalty programs, providing both admin and user interfaces.',
        image: '/Sistemas-de-lealtad-Responsive.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Personal Portfolio - Web',
        description: 'Personal portfolio showcasing projects and developer skills.',
        image: '/portafolio.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Admin Dashboard - Web',
        description: 'Admin dashboard that displays key metrics and statistics for project management.',
        image: '/Dashboard.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Tickets system - Web',
        description: 'Ticket management system for customer support, allowing the creation, tracking, and resolution of issues.',
        image: '/SistemaTickets.png',
        technologies: ['React', 'Vite', 'Tailwind', 'SQLite', 'Shadcn UI'],
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
                  {/* <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.viewProject}
                  </Button> */}
                  {/* <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};