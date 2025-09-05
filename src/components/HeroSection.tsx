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
    <section className="relative bg-background pt-24 pb-12 text-center overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Low Exposure */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/membros-dos-sindicatos-trabalhando-juntos.jpg"
          alt="Membros dos sindicatos trabalhando juntos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Título Principal */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg animate-in fade-in-0 slide-in-from-bottom-4 duration-1000" style={{ lineHeight: '1.15' }}>
            A plataforma de inteligência comercial que{" "}
            <span className="text-[#20a5c2] drop-shadow-lg">
              transforma sua clínica em uma máquina de resultados
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base md:text-lg text-white/90 mb-10 max-w-3xl mx-auto drop-shadow-md animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-200">
            Unifique agendamentos, marketing e vendas em um só lugar. O
            Conciarge é o sistema com IA que automatiza processos, qualifica
            pacientes e te dá o controle total da sua operação para escalar com
            segurança.
          </p>
        </div>

        {/* Diagrama de Fluxo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-400">
          {flowSteps.map((step, index) => {
            const Icon = step.icon; // Renomeia para uma variável com letra maiúscula
            return (
              <React.Fragment key={index}>
                <div className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/90 backdrop-blur-sm p-3 text-sm font-medium text-gray-700 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  <Icon className="w-5 h-5 text-[#20a5c2] group-hover:scale-110 transition-transform duration-300" weight="duotone" />
                  <span>{step.label}</span>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-white hidden md:block drop-shadow-md" weight="bold" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Botão de Chamada para Ação (CTA) */}
        <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 delay-600">
          <Button variant="hero" size="lg" className="text-base px-6 py-3 bg-[#20a5c2] hover:bg-[#1a8ca3] text-white border-none shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
            AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
          </Button>
          <p className="text-sm text-gray-200 drop-shadow-md">
            Descubra o real retorno sobre seu investimento em marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;