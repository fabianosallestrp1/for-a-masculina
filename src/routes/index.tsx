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
  TreePine,
  Compass,
  Network,
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
  ["Ecos", "#ecos"],
  ["Agendar", "#agendar"],
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-2">
          <img src={logo} alt="Fabiano Salles" className="h-14 sm:h-16 w-auto" />
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
          className="hidden md:inline-flex text-sm px-5 py-2.5 rounded-full bg-accent-strong text-accent-foreground hover:bg-accent transition font-sub font-semibold"
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
            className="text-center text-sm px-5 py-2.5 rounded-full bg-accent-strong text-accent-foreground font-sub font-semibold"
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
          <img
            src={logo}
            alt="Fabiano Salles — Terapeuta Sistêmico e Constelador"
            className="h-20 md:h-24 w-auto mb-8 drop-shadow-sm"
          />
          <p className="font-sub text-sm uppercase tracking-[0.25em] text-primary mb-5 font-semibold">
            Terapia Sistêmica para Homens
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.6rem] leading-[1.05] mb-6">
            Reconheça sua história, reconecte-se consigo e acesse a força do masculino.
          </h1>
          <p className="font-sub text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-xl">
            Acompanho homens em processos de Constelação Familiar e Terapia
            Sistêmica para compreender padrões que se repetem, fortalecer a
            relação consigo mesmos e seguir novos caminhos com mais clareza nas
            relações, nas escolhas e na própria história.
          </p>
          <p className="font-sub text-sm md:text-base text-muted-foreground/90 mb-8">
            Atendimentos online para Brasil e exterior · Presencial em Uberlândia-MG.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-accent-strong text-accent-foreground font-sub font-semibold hover:bg-accent transition shadow-[var(--shadow-soft)] text-center inline-flex items-center justify-center gap-2"
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
          <p className="mt-5 font-sub text-sm text-muted-foreground italic max-w-md">
            Você pode me escrever com simplicidade, mesmo que ainda não saiba
            explicar exatamente o que está vivendo.
          </p>
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
    "Você enfrenta dificuldades nas relações — no namoro, no casamento, com os filhos, com o pai, com a mãe ou até consigo mesmo — e percebe que algo se repete, mesmo quando tenta fazer diferente.",
    "Você não consegue sustentar relações estáveis, se envolve, se afasta, rompe ou se cala, e sente que há um padrão por trás disso.",
    "O dinheiro até chega, mas não fica; a vida anda, mas não se firma; você trabalha, se esforça, mas não consegue construir estabilidade com tranquilidade.",
    "Você vive momentos de virada, como separação, paternidade, luto, recomeços ou crises internas, e sente que precisa olhar sua história com mais profundidade.",
    "Você quer compreender o lugar que ocupa na sua família e perceber como essa posição influencia suas escolhas, vínculos e forma de caminhar pela vida.",
    "Você busca um espaço sério e seguro, onde possa olhar para si com verdade, sem precisar sustentar máscaras o tempo todo.",
  ];
  return (
    <section id="para-quem" className="py-24 md:py-32 bg-surface-sage-light">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-sub text-sm uppercase tracking-[0.25em] font-semibold text-primary mb-4">
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
        <p className="mt-12 font-sub text-lg md:text-xl text-foreground/90 leading-relaxed max-w-2xl italic">
          Se algo em você sente que não dá mais para seguir do mesmo jeito, esse pode ser um bom começo.
        </p>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    {
      n: "01",
      t: "Conversa inicial",
      d: "Um primeiro encontro, talvez online, para escutar você, compreender sua demanda e avaliar juntos o caminho mais adequado para este momento.",
    },
    {
      n: "02",
      t: "Sessões de terapia sistêmica",
      d: "Encontros semanais ou quinzenais, online ou presenciais, integrando escuta, corpo e olhar sistêmico para ampliar a consciência sobre o que você vive e o que se repete.",
    },
    {
      n: "03",
      t: "Constelação familiar",
      d: "Quando fizer sentido no processo, propomos uma constelação individual ou em grupo para olhar o sistema familiar e as dinâmicas que podem estar influenciando sua vida hoje.",
    },
    {
      n: "04",
      t: "Integração",
      d: "Acompanhamento do que se moveu nas sessões, para que os insights não fiquem apenas no campo da compreensão, mas alcancem o cotidiano, as relações e as decisões concretas.",
    },
  ];
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-surface-azure">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sub text-sm uppercase tracking-[0.25em] font-semibold text-primary mb-4">
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
      icon: TreePine,
      title: "Constelação Individual",
      desc: "Sessão fenomenológica e sistêmica de até 1h30, com recursos simbólicos e representativos, para investigar dinâmicas ocultas, padrões repetitivos e vínculos que pedem um novo olhar. Online ou presencial em Uberlândia-MG.",
    },
    {
      icon: Compass,
      title: "Acompanhamento Terapêutico",
      desc: "Sessões de 50 minutos em frequência combinada, integrando Constelação Familiar e escuta clínica para sustentar mudanças consistentes nas relações, nas escolhas e nos padrões emocionais.",
    },
    {
      icon: Network,
      title: "Constelação Empresarial",
      desc: "Aplicação da abordagem sistêmica ao contexto organizacional, com anamnese, sessão de constelação e acompanhamento voltado a liderança, equipes, clima e resultados.",
    },
  ];
  return (
    <section id="servicos" className="py-24 md:py-32 bg-surface-sage-light">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-sub text-sm uppercase tracking-[0.25em] font-semibold text-primary mb-4">
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
              <p className="font-sub text-muted-foreground leading-relaxed text-base">
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
          <p className="font-sub text-sm uppercase tracking-[0.25em] font-semibold text-primary-soft/90 mb-4">
            Sobre mim
          </p>
          <h2 className="text-3xl md:text-4xl mb-6 text-white">Fabiano Salles</h2>
          <div className="space-y-5 font-sub text-white/90 leading-relaxed text-lg">
            <p>
              Sou Constelador e Terapeuta Sistêmico. Há mais de uma década
              acompanho processos de autoconhecimento, transição de vida e
              reconciliação com as próprias origens.
            </p>
            <p>
              Minha abordagem integra a Constelação Familiar com uma condução
              clínica focada em ampliar a consciência sobre padrões familiares,
              lealdades invisíveis e dinâmicas sistêmicas que muitas vezes
              limitam vínculos, escolhas e possibilidades de vida.
            </p>
            <p>
              Tenho um foco especial no trabalho com homens em meia-idade —
              momento de travessia em que muitas perguntas pedem lugar. Mas
              meu consultório acolhe qualquer pessoa que chegue com uma
              história que pede escuta: mulheres, casais, jovens adultos. O
              que sustenta a prática não é o público, é o compromisso com a
              verdade de cada história.
            </p>
            <p>
              Acredito que toda história merece ser olhada com dignidade — e
              que, quando alguém encontra seu lugar no sistema familiar, pode
              caminhar com mais leveza, clareza e força.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trajetoria() {
  const stats = [
    { Icon: TreePine, n: "[X]+", l: "anos de prática sistêmica" },
    { Icon: Compass, n: "[X]+", l: "constelações conduzidas" },
    { Icon: Network, n: "[X]+", l: "grupos e círculos facilitados" },
  ];
  const formacao = [
    "Formação em Constelação Familiar — [Instituição]",
    "Formação em Terapia Sistêmica — [Instituição]",
    "Supervisão contínua com [Nome / linha de trabalho]",
    "Participação em encontros e jornadas — [evento / ano]",
  ];
  return (
    <section id="trajetoria" className="py-24 md:py-32 bg-surface-azure">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sub text-sm uppercase tracking-[0.25em] font-semibold text-primary mb-4 text-center">
          Trajetória
        </p>
        <h2 className="text-3xl md:text-4xl mb-14 text-center">
          Anos de prática, escuta e estudo.
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {stats.map(({ Icon, n, l }) => (
            <div key={l} className="text-center">
              <Icon className="h-8 w-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-3xl md:text-4xl text-foreground mb-2">{n}</div>
              <p className="font-sub text-sm text-muted-foreground leading-relaxed">{l}</p>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          <h3 className="font-sub text-sm uppercase tracking-[0.2em] font-semibold text-primary mb-5 text-center">
            Formação e referências
          </h3>
          <ul className="space-y-3 font-sub text-foreground/90">
            {formacao.map((f) => (
              <li key={f} className="flex gap-3">
                <span className="text-primary/60 mt-1.5">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center font-sub text-sm text-muted-foreground mt-8">
          Atendimentos online e presenciais em Uberlândia-MG.
        </p>
      </div>
    </section>
  );
}

function Ecos() {
  const items = [
    "Uma escuta que eu não sabia que era possível.",
    "Um espaço sério, sem atalhos e sem promessas.",
    "Saí com a sensação de ter sido visto sem ser julgado.",
    "Um cuidado raro com cada palavra dita.",
    "A condução sustenta o silêncio sem pressa.",
  ];
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const t = items[i];
  return (
    <section id="ecos" className="py-24 md:py-32 bg-surface-azure">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-sub text-sm uppercase tracking-[0.25em] font-semibold text-primary mb-4 text-center">
          Ecos
        </p>
        <h2 className="text-3xl md:text-4xl mb-6 text-center">
          Sobre o espaço, a escuta e a condução.
        </h2>
        <p className="font-sub text-base md:text-lg italic text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Já procurou um lugar onde fosse possível baixar a guarda? Onde a sua história pudesse ser olhada sem pressa?
        </p>
        <figure
          className="p-8 md:p-12 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] text-center"
        >
          <Quote className="h-8 w-8 text-primary/40 mx-auto mb-5" />
          <blockquote className="font-sub text-lg leading-relaxed text-foreground/90 italic">
            "{t}"
          </blockquote>
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
        <p className="text-center font-sub text-xs text-muted-foreground mt-10 max-w-2xl mx-auto leading-relaxed">
          Frases compartilhadas espontaneamente por participantes sobre a experiência do espaço. Nenhum relato envolve resultados clínicos, dados pessoais ou identificação.
        </p>
      </div>
    </section>
  );
}

function Inspiracoes() {
  const quotes = [
    {
      t: "O que reprovamos nos aprisiona, e só o que amamos nos liberta.",
      a: "Joan Garriga",
      o: "em “Onde estão as moedas?”",
    },
    {
      t: "Cada um de nós encontra a canção que deve cantar. Quem canta essa canção está feliz, bem profundamente, não importa qual seja a sua tarefa.",
      a: "Bert Hellinger",
      o: "em “A fonte não precisa perguntar pelo caminho”",
    },
    {
      t: "Não tenho caminho novo. O que tenho de novo é o jeito de caminhar.",
      a: "Thiago de Mello",
      o: "poema “Vida Verdadeira”, da obra “Faz Escuro mas eu Canto”",
    },
  ];
  return (
    <section id="inspiracoes" className="py-24 md:py-32 bg-surface-sage-light">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-sub text-sm uppercase tracking-[0.25em] font-semibold text-primary mb-4">
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
              <figcaption className="font-sub text-sm text-primary">
                <span className="font-semibold">— {q.a}</span>
                <span className="block text-muted-foreground not-italic mt-1 font-normal">
                  {q.o}
                </span>
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
    <section id="agendar" className="py-24 md:py-32 bg-surface-deep">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-sub text-sm uppercase tracking-[0.25em] font-semibold text-primary mb-4">
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
                <span className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground">
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
                <span className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground">
                  E-mail
                </span>
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span className="text-foreground">
                <span className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground">
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

        <div className="rounded-2xl p-8 md:p-10 text-center bg-secondary/40 border border-border">
          <h3 className="text-2xl md:text-3xl mb-4">Pronto para começar?</h3>
          <p className="font-sub text-muted-foreground mb-8 leading-relaxed">
            Agende sua primeira conversa e dê o passo inicial em direção a uma
            vida com mais clareza, leveza e propósito.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-accent-strong text-accent-foreground font-sub font-semibold hover:bg-accent transition shadow-[var(--shadow-soft)]"
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
      className="pt-14 pb-10 text-base font-sub"
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
      <div className="max-w-6xl mx-auto px-6 border-t border-white/15 pt-6 text-center text-sm opacity-70">
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
      <Trajetoria />
      <Sobre />
      <Ecos />
      <Inspiracoes />
      <Agendar />
      <Footer />
    </main>
  );
}
