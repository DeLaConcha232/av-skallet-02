import React from 'react';
import { Download, Award, Users, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useApp } from '@/contexts/AppContext';

const translations = {
  es: {
    title: 'Av-skallet Studio',
    subtitle: 'Elegancia + Escalabilidad + Cercanía Técnica',
    description:
      'Diseñamos y construimos software a medida que se siente sólido hoy y preparado para crecer mañana. En Av‑skallet no solo ejecutamos: nos metemos a fondo en tu problema, refinamos la idea contigo y convertimos la complejidad en arquitectura limpia, rápida y mantenible. Cada entrega es clara, iterativa y alineada a tu visión. ¿Necesitas transformar procesos, lanzar un producto o modernizar tu stack? Hablemos y hagamos que tu software sea una ventaja competitiva.',
    downloadCV: 'Descargar CV',
    stats: [
      { icon: Award, label: 'Años Construyendo', value: '3+' },
      { icon: Users, label: 'Soluciones Entregadas', value: '15+' },
      { icon: Coffee, label: 'Tazas de Café', value: '∞' }
    ]
  },
  en: {
    title: 'Av-skallet Studio',
    subtitle: 'Elegance + Scalability + Technical Partnership',
    description:
      'We design and build custom software that feels solid today and ready to scale tomorrow. At Av‑skallet we don’t just ship features: we dive into your problem, refine the idea with you, and turn complexity into clean, performant, maintainable architecture. Every delivery is transparent, iterative, and aligned with your vision. Looking to transform processes, launch a product, or modernize your stack? Let’s talk and turn software into your competitive advantage.',
    downloadCV: 'Download CV',
    stats: [
      { icon: Award, label: 'Years Building', value: '3+' },
      { icon: Users, label: 'Delivered Solutions', value: '15+' },
      { icon: Coffee, label: 'Cups of Coffee', value: '∞' }
    ]
  }
};

export const About: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];

  const handleDownloadCV = () => {
    // Replace with actual CV file path
    const cvUrl = '/cv-av-skallet.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = `cv-av-skallet-${language}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
            <p className="text-xl text-muted-foreground mb-6">{t.subtitle}</p>
            
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              {t.description}
            </p>
            
            {/* <Button 
              size="lg"
              onClick={handleDownloadCV}
              className="hover-lift"
            >
              <Download className="mr-2 h-5 w-5" />
              {t.downloadCV}
            </Button> */}
          </div>
          
          {/* Image & Stats */}
          <div className="animate-slide-up">
            <div className="relative mb-8">
              {/* Visual: central circle with geometric cleanliness + orbiting tech tokens */}
              <div
                className="w-80 h-80 mx-auto rounded-3xl hover-lift relative bg-muted/30 backdrop-blur"
                aria-label={language === 'es' ? 'Identidad visual de Av-skallet con círculo geométrico y tecnologías orbitando' : 'Av-skallet visual identity with geometric circle and orbiting technologies'}
              >
                {/* Central clean circle */}
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative size-48 rounded-full bg-gradient-to-br from-primary/15 via-accent/20 to-primary/10 border border-primary/20 shadow-[0_0_40px_-10px_rgba(0,0,0,0.25)]">
                    {/* Dashed rotating ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/30 animate-[spin_8s_linear_infinite]"></div>
                    {/* Inner subtle grid */}
                    <div
                      className="absolute inset-4 rounded-full opacity-40"
                      style={{
                        backgroundImage:
                          'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '12px 12px',
                        backgroundPosition: '0 0',
                        mixBlendMode: 'overlay'
                      }}
                    ></div>
                    {/* Static geometric chord */}
                    <div className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary/30"></div>
                    <div className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-primary/20"></div>
                  </div>
                </div>

                {/* Orbit ring: one spinning parent; child chips placed at different angles on exact circle */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 animate-[spin_50s_linear_infinite]">
                    {[
                      { label: 'React', cls: 'border-cyan-300/30 bg-cyan-500/15 text-cyan-300', angle: 10 },
                      { label: 'Tailwind', cls: 'border-sky-300/30 bg-sky-500/15 text-sky-300', angle: 55 },
                      { label: 'Vercel', cls: 'border-zinc-300/20 bg-zinc-900 text-white', angle: 100, vercel: true },
                      { label: 'Node', cls: 'border-emerald-300/30 bg-emerald-500/15 text-emerald-300', angle: 150 },
                      { label: 'SQL', cls: 'border-indigo-300/30 bg-indigo-500/15 text-indigo-300', angle: 200 },
                      { label: 'Supabase', cls: 'border-green-300/30 bg-green-500/15 text-green-300', angle: 250 },
                      { label: 'Java', cls: 'border-orange-300/30 bg-orange-500/15 text-orange-300', angle: 295 },
                      { label: 'JS', cls: 'border-yellow-300/30 bg-yellow-400/20 text-yellow-300', angle: 330 },
                      { label: 'TS', cls: 'border-blue-300/30 bg-blue-500/15 text-blue-300', angle: 0 }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          transform: `rotate(${item.angle}deg) translateX(6.9rem) rotate(-${item.angle}deg)`
                        }}
                      >
                        <div
                          className={`w-9 h-9 rounded-full grid place-items-center border shadow-sm backdrop-blur-sm ${item.cls} animate-[spin_50s_linear_infinite_reverse]`}
                          aria-label={item.label}
                          title={item.label}
                        >
                          {item.vercel ? (
                            <div className="w-0 h-0 border-l-[7px] border-l-transparent border-b-[12px] border-b-white border-r-[7px] border-r-transparent" />
                          ) : (
                            <span className="text-[10px] font-bold leading-none">
                              {item.label.length > 4 ? item.label.slice(0, 4) : item.label}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary orbit for depth (smaller, slower) */}
                <div className="absolute inset-6 animate-[spin_52s_linear_infinite]">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  </div>
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                  </div>
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full -z-10"></div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {t.stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card 
                    key={index}
                    className="text-center hover-lift animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};