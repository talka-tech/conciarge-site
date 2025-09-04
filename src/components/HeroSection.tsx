import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, TrendUp } from "phosphor-react";

const HeroSection = () => {
  const flowSteps = [
    {
      icon: Users,
      label: "Volume Alto de Leads",
    },
    {
      icon: Heart,
      label: "Capacidade de Atendimento",
    },
    {
      icon: TrendUp,
      label: "Conversão em Vendas",
    },
  ];

  return (
    <section className="relative bg-background pt-40 pb-20 text-center overflow-hidden">
      {/* Background Image with Low Exposure */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/membros-dos-sindicatos-trabalhando-juntos.jpg"
          alt="Membros dos sindicatos trabalhando juntos"
          className="w-full h-full object-cover brightness-[0.15] opacity-30"
        />
        <div className="absolute inset-0 bg-background/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Título Principal */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-brand-navy animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            A plataforma de inteligência comercial que{" "}
            <span className="text-primary">
              transforma sua clínica em uma máquina de resultados
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-200">
            Unifique agendamentos, marketing e vendas em um só lugar. O
            Conciarge é o sistema com IA que automatiza processos, qualifica
            pacientes e te dá o controle total da sua operação para escalar com
            segurança.
          </p>
        </div>

        {/* Diagrama de Fluxo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-400">
          {flowSteps.map((step, index) => {
            const Icon = step.icon; // Renomeia para uma variável com letra maiúscula
            return (
              <React.Fragment key={index}>
                <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-3 text-sm font-medium text-muted-foreground hover:bg-muted/70 transition-all duration-300 hover:scale-105 hover:shadow-md group">
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" weight="duotone" />
                  <span>{step.label}</span>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-border hidden md:block" weight="bold" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Botão de Chamada para Ação (CTA) */}
        <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 delay-600">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 shadow-hero transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
            AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Descubra o real retorno sobre seu investimento em marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;