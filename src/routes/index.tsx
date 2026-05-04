import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Quote,
  ChevronLeft,
  ChevronRight,
  Users,
  Heart,
  Briefcase,
} from "lucide-react";
import logo from "@/assets/logo.png";
import portrait from "@/assets/fabiano-portrait.png";
import portraitFull from "@/assets/fabiano-full.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const CONTACT = {
  whatsapp: "5534997781917",
  phone: "+55 (34) 99778-1917",
  email: "fabianosalles.trp1@gmail.com",
  instagram: "https://instagram.com/fabiano.terapeuta",
  facebook: "https://facebook.com/fabianosalles.terapeuta",
  location: "Uberlândia, Minas Gerais — atendimento presencial e online",
};

const WHATSAPP_MESSAGE =
  "Olá Fabiano! Gostaria de agendar uma sessão.";
const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const NAV = [
  ["Para quem é", "#para-quem"],
  ["Como funciona", "#como-funciona"],
  ["Serviços", "#servicos"],
  ["Sobre", "#sobre"],
  ["Depoimentos", "#depoimentos"],
  ["Agendar", "#agendar"],
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-2">
          <img src={logo} alt="Fabiano Salles" className="h-9 w-auto" />
        </a>
        <nav className="hidden md:flex gap-7 text-sm font-sub text-muted-foreground">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition font-sub font-semibold"
        >
          Agendar
        </a>
        <button
          aria-label="Abrir menu"
          className="md:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-5 py-4 flex flex-col gap-4">
          {NAV.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="text-sm font-sub text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            className="text-center text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-sub font-semibold"
          >
            Agendar
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="topo"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden"
      style={{ background: "var(--gradient-soft)" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="order-2 md:order-1">
          <p className="font-sub text-xs uppercase tracking-[0.25em] text-primary mb-5">
            Terapia sistêmica para homens
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.05] mb-6">
            Reconheça sua história. Acesse a força do masculino.
          </h1>
          <p className="font-sub text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Acompanho homens adultos em processos de Constelação Familiar e
            Terapia Sistêmica — para compreender padrões que se repetem,
            encontrar clareza e seguir em frente com presença e propósito.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-sub font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)] text-center inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
            <a
              href="#como-funciona"
              className="px-7 py-3.5 rounded-full border border-primary/30 text-primary font-sub font-semibold hover:bg-primary/5 transition text-center"
            >
              Como funciona
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs font-sub text-muted-foreground">
            <span>Online · Brasil e exterior</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Presencial em Uberlândia-MG</span>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div
            className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60"
            style={{ background: "var(--gradient-brand)", filter: "blur(40px)" }}
          />
          <img
            src={portrait}
            alt="Fabiano Salles, terapeuta sistêmico e constelador"
            width={1024}
            height={1024}
            className="rounded-3xl w-full max-w-md mx-auto shadow-[var(--shadow-soft)] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ParaQuem() {
  const items = [
    "Você sente que carrega um peso antigo que não consegue nomear.",
    "Repete padrões em relacionamentos, trabalho ou na relação com pai e mãe.",
    "Está em um momento de virada — paternidade, separação, luto, recomeço.",
    "Quer compreender o lugar que ocupa na sua família e na sua história.",
    "Busca um espaço onde possa ser homem sem máscara, sem julgamento.",
  ];
  return (
    <section id="para-quem" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-sub text-xs uppercase tracking-[0.25em] text-primary mb-4">
          Para quem é
        </p>
        <h2 className="text-3xl md:text-4xl mb-12 max-w-2xl">
          Este trabalho é para você se…
        </h2>
        <ul className="space-y-5">
          {items.map((t) => (
            <li
              key={t}
              className="flex gap-4 items-start text-foreground/85 font-sub text-lg leading-relaxed"
            >
              <svg
                className="mt-1.5 h-5 w-5 shrink-0 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    {
      n: "01",
      t: "Conversa inicial",
      d: "Um primeiro encontro online para escutar você, entender sua demanda e definir juntos o caminho.",
    },
    {
      n: "02",
      t: "Sessões de terapia sistêmica",
      d: "Encontros semanais ou quinzenais, online ou presenciais, integrando escuta, corpo e olhar sistêmico.",
    },
    {
      n: "03",
      t: "Constelação familiar",
      d: "Quando indicado, propomos uma constelação individual ou em grupo para olhar o sistema familiar.",
    },
    {
      n: "04",
      t: "Integração",
      d: "Acompanhamento do que se moveu — para que a transformação chegue ao cotidiano e às relações.",
    },
  ];
  return (
    <section
      id="como-funciona"
      className="py-24 md:py-32"
      style={{ background: "var(--primary-soft)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sub text-xs uppercase tracking-[0.25em] text-primary mb-4">
          Como funciona
        </p>
        <h2 className="text-3xl md:text-4xl mb-14 max-w-2xl">
          Um processo claro, no seu ritmo.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] border border-border/40"
            >
              <div className="font-display font-bold text-3xl text-primary mb-3">
                {s.n}
              </div>
              <h3 className="text-xl mb-2">{s.t}</h3>
              <p className="font-sub text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Servicos() {
  const services = [
    {
      icon: Users,
      title: "Constelação Individual",
      desc: "Sessão fenomenológica e sistêmica de até 1h30, com bonecos e representações simbólicas, para investigar dinâmicas ocultas, padrões repetitivos e lealdades invisíveis. Online ou presencial em Uberlândia-MG.",
    },
    {
      icon: Heart,
      title: "Acompanhamento Terapêutico",
      desc: "Sessões de 50 min em frequência combinada, integrando Constelação Familiar e escuta clínica para sustentar mudanças consistentes em relações, escolhas de vida e padrões emocionais.",
    },
    {
      icon: Briefcase,
      title: "Constelação Empresarial",
      desc: "Aplicação da abordagem sistêmica ao contexto corporativo — pacote com anamnese, sessão de constelação e acompanhamento para destravar liderança, equipes e resultados.",
    },
  ];
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-sub text-xs uppercase tracking-[0.25em] text-primary mb-4">
          Serviços
        </p>
        <h2 className="text-3xl md:text-4xl mb-4 max-w-2xl">
          Caminhos para diferentes momentos.
        </h2>
        <p className="font-sub text-muted-foreground max-w-2xl mb-14 leading-relaxed">
          Soluções terapêuticas e consultoria sistêmica adaptadas ao que você
          (ou sua organização) precisa nesta fase.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] border border-border/40 flex flex-col"
            >
              <Icon className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-xl mb-3">{title}</h3>
              <p className="font-sub text-muted-foreground leading-relaxed text-[15px]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section
      id="sobre"
      className="py-24 md:py-32 text-primary-foreground"
      style={{ background: "var(--gradient-brand)" }}
    >
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-center">
        <img
          src={portraitFull}
          alt="Fabiano Salles"
          loading="lazy"
          className="rounded-2xl w-full max-w-sm mx-auto shadow-[var(--shadow-soft)] object-cover"
        />
        <div>
          <p className="font-sub text-xs uppercase tracking-[0.25em] text-primary-soft/90 mb-4">
            Sobre mim
          </p>
          <h2 className="text-3xl md:text-4xl mb-6 text-white">Fabiano Salles</h2>
          <div className="space-y-5 font-sub text-white/90 leading-relaxed text-lg">
            <p>
              Sou Constelador e Terapeuta Sistêmico. Há mais de uma década
              acompanho homens adultos em processos de autoconhecimento,
              transição de vida e reconciliação com suas origens.
            </p>
            <p>
              Minha abordagem integra a Constelação Familiar com uma condução
              clínica focada em ampliar a consciência sobre padrões familiares,
              lealdades invisíveis e dinâmicas sistêmicas que limitam o
              potencial humano.
            </p>
            <p>
              Acredito que toda história merece ser olhada com dignidade — e
              que, quando um homem encontra seu lugar no sistema familiar, ele
              pode caminhar com leveza, clareza e força.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  const items = [
    {
      q: "Encontrei um lugar onde pude finalmente baixar a guarda. Em poucos meses minha relação com meu pai mudou — e comigo mesmo também.",
      a: "R., 42 anos",
    },
    {
      q: "A constelação com o Fabiano foi um divisor de águas no meu casamento e na minha paternidade. Uma escuta rara.",
      a: "M., 38 anos",
    },
    {
      q: "Saio de cada sessão com mais clareza sobre quem eu sou e do que estou sendo chamado a fazer.",
      a: "L., 51 anos",
    },
  ];
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const t = items[i];
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-sub text-xs uppercase tracking-[0.25em] text-primary mb-4 text-center">
          Depoimentos
        </p>
        <h2 className="text-3xl md:text-4xl mb-14 text-center">
          Histórias de homens que atravessaram.
        </h2>
        <figure
          className="p-8 md:p-12 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] text-center"
        >
          <Quote className="h-8 w-8 text-primary/40 mx-auto mb-5" />
          <blockquote className="font-sub text-lg leading-relaxed text-foreground/90 italic">
            "{t.q}"
          </blockquote>
          <figcaption className="mt-6 font-sub text-sm text-muted-foreground">
            — {t.a}
          </figcaption>
        </figure>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="p-2 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/5 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Depoimento ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "bg-primary w-8" : "bg-primary/20 w-2"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Próximo"
            className="p-2 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/5 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Inspiracoes() {
  const quotes = [
    {
      t: "O que herdamos de nossos pais é apenas o começo. O que fazemos com isso é nossa responsabilidade.",
      a: "Bert Hellinger",
    },
    {
      t: "Não é o caminho que nos transforma, mas a coragem de caminhar.",
      a: "Thiago de Mello",
    },
    {
      t: "A verdadeira força está em reconhecer nossas raízes e seguir em frente com clareza.",
      a: "Fabiano Salles",
    },
  ];
  return (
    <section
      id="inspiracoes"
      className="py-24 md:py-32"
      style={{ background: "var(--primary-soft)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-sub text-xs uppercase tracking-[0.25em] text-primary mb-4">
          Inspirações
        </p>
        <h2 className="text-3xl md:text-4xl mb-14 max-w-2xl">
          Pensamentos que guiam o trabalho.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.a}
              className="bg-card p-8 rounded-2xl border border-border/40 shadow-[var(--shadow-card)]"
            >
              <Quote className="w-7 h-7 text-primary/40 mb-4" />
              <blockquote className="font-sub italic text-foreground/85 leading-relaxed mb-4">
                "{q.t}"
              </blockquote>
              <figcaption className="font-sub text-sm font-semibold text-primary">
                — {q.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Agendar() {
  return (
    <section id="agendar" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-sub text-xs uppercase tracking-[0.25em] text-primary mb-4">
            Como agendar
          </p>
          <h2 className="text-3xl md:text-4xl mb-6">O primeiro passo é simples.</h2>
          <p className="font-sub text-lg text-muted-foreground leading-relaxed mb-8">
            Envie uma mensagem pelo WhatsApp contando brevemente o que te traz.
            Respondo pessoalmente em até 24 horas e marcamos uma conversa
            inicial.
          </p>
          <ul className="space-y-4 font-sub">
            <li className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition"
              >
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  WhatsApp
                </span>
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-foreground hover:text-primary transition break-all"
              >
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  E-mail
                </span>
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span className="text-foreground">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Atendimento
                </span>
                {CONTACT.location}
              </span>
            </li>
          </ul>
          <div className="flex gap-3 mt-8">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/5 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/5 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div
          className="rounded-2xl p-8 md:p-10 text-center"
          style={{ background: "var(--primary-soft)" }}
        >
          <h3 className="text-2xl md:text-3xl mb-4">Pronto para começar?</h3>
          <p className="font-sub text-muted-foreground mb-8 leading-relaxed">
            Agende sua primeira conversa e dê o passo inicial em direção a uma
            vida com mais clareza, leveza e propósito.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-sub font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)]"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar agora
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="pt-14 pb-10 text-sm font-sub"
      style={{ background: "var(--primary-deep)", color: "oklch(1 0 0 / 0.8)" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <img
            src={logo}
            alt="Fabiano Salles"
            className="h-14 w-auto mb-4 brightness-0 invert"
          />
          <p className="opacity-80 leading-relaxed">
            Constelador e Terapeuta Sistêmico dedicado à transformação e ao
            desenvolvimento humano — com foco em homens adultos.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-white mb-3">Serviços</h4>
          <ul className="space-y-2 opacity-80">
            <li><a href="#servicos" className="hover:text-white">Constelação Individual</a></li>
            <li><a href="#servicos" className="hover:text-white">Acompanhamento Terapêutico</a></li>
            <li><a href="#servicos" className="hover:text-white">Constelação Empresarial</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-white mb-3">Contato</h4>
          <ul className="space-y-2 opacity-80">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white break-all">
                {CONTACT.email}
              </a>
            </li>
            <li className="opacity-90">{CONTACT.location}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 border-t border-white/15 pt-6 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Fabiano Salles — Todos os direitos reservados.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <ParaQuem />
      <ComoFunciona />
      <Servicos />
      <Sobre />
      <Depoimentos />
      <Inspiracoes />
      <Agendar />
      <Footer />
    </main>
  );
}
