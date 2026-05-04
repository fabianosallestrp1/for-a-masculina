import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import portrait from "@/assets/fabiano-portrait.png";
import portraitFull from "@/assets/fabiano-full.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%20Fabiano%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.";

function Nav() {
  const links = [
    ["Para quem é", "#para-quem"],
    ["Como funciona", "#como-funciona"],
    ["Depoimentos", "#depoimentos"],
    ["Sobre", "#sobre"],
    ["Agendar", "#agendar"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-2">
          <img src={logo} alt="Fabiano Salles" className="h-9 w-auto" />
        </a>
        <nav className="hidden md:flex gap-7 text-sm font-sub text-muted-foreground">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          className="text-xs md:text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition font-sub font-semibold"
        >
          Agendar
        </a>
      </div>
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
            Acompanho homens adultos em processos de constelação familiar e terapia
            sistêmica — para atravessar o que pesa, encontrar clareza e seguir
            novos caminhos com presença e propósito.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#agendar"
              className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-sub font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)] text-center"
            >
              Agendar uma sessão
            </a>
            <a
              href="#como-funciona"
              className="px-7 py-3.5 rounded-full border border-primary/30 text-primary font-sub font-semibold hover:bg-primary/5 transition text-center"
            >
              Como funciona
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs font-sub text-muted-foreground">
            <span>Atendimento online · Brasil e exterior</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Presencial em SP</span>
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

function Depoimentos() {
  const items = [
    {
      q: "Encontrei um lugar onde pude finalmente baixar a guarda. Em poucos meses minha relação com meu pai mudou — e comigo mesmo também.",
      a: "R., 42 anos",
    },
    {
      q: "Fabiano tem uma escuta rara. A constelação foi um divisor de águas no meu casamento e na minha paternidade.",
      a: "M., 38 anos",
    },
    {
      q: "Saio de cada sessão com mais clareza sobre quem eu sou e do que estou sendo chamado a fazer.",
      a: "L., 51 anos",
    },
  ];
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sub text-xs uppercase tracking-[0.25em] text-primary mb-4">
          Depoimentos
        </p>
        <h2 className="text-3xl md:text-4xl mb-14 max-w-2xl">
          Histórias de homens que atravessaram.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((d) => (
            <figure
              key={d.a}
              className="p-8 rounded-2xl border border-border bg-card flex flex-col shadow-[var(--shadow-card)]"
            >
              <svg
                className="h-7 w-7 text-primary/40 mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6v-6H5.17A2.17 2.17 0 0 1 7.34 9.83V6h-.17Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6v-6h-2.83a2.17 2.17 0 0 1 2.17-2.17V6h-.17Z" />
              </svg>
              <blockquote className="font-sub text-base leading-relaxed text-foreground/90 flex-1">
                {d.q}
              </blockquote>
              <figcaption className="mt-6 font-sub text-sm text-muted-foreground">
                — {d.a}
              </figcaption>
            </figure>
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
          alt="Fabiano Salles em seu consultório"
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
              Sou terapeuta sistêmico e constelador familiar e estrutural. Há mais
              de uma década acompanho homens adultos em processos de
              autoconhecimento, transição de vida e reconciliação com suas origens.
            </p>
            <p>
              Acredito que toda história merece ser olhada com dignidade — e que,
              quando um homem encontra seu lugar no sistema familiar, ele pode
              caminhar com leveza, clareza e força.
            </p>
            <p>
              Meu trabalho integra a abordagem sistêmica fenomenológica de Bert
              Hellinger, escuta clínica e práticas de presença no corpo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Agendar() {
  return (
    <section id="agendar" className="py-24 md:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-sub text-xs uppercase tracking-[0.25em] text-primary mb-4">
          Como agendar
        </p>
        <h2 className="text-3xl md:text-4xl mb-6">O primeiro passo é simples.</h2>
        <p className="font-sub text-lg text-muted-foreground leading-relaxed mb-10">
          Envie uma mensagem pelo WhatsApp contando brevemente o que te traz.
          Respondo pessoalmente em até 24 horas e marcamos uma conversa inicial.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href={WHATSAPP_URL}
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-sub font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)]"
          >
            Falar no WhatsApp
          </a>
          <a
            href="mailto:contato@fabianosalles.com.br"
            className="px-8 py-4 rounded-full border border-primary/30 text-primary font-sub font-semibold hover:bg-primary/5 transition"
          >
            Enviar e-mail
          </a>
        </div>
        <div className="font-sub text-sm text-muted-foreground space-y-1">
          <p>Sessões online para todo o Brasil e exterior.</p>
          <p>Atendimento presencial em São Paulo.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-12 text-center text-sm font-sub"
      style={{ background: "var(--primary-deep)", color: "oklch(1 0 0 / 0.75)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <img src={logo} alt="Fabiano Salles" className="h-14 w-auto mx-auto mb-4 brightness-0 invert" />
        <p>Constelador e Terapeuta Sistêmico</p>
        <p className="mt-4 text-xs opacity-70">
          © {new Date().getFullYear()} Fabiano Salles — Todos os direitos reservados.
        </p>
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
      <Depoimentos />
      <Sobre />
      <Agendar />
      <Footer />
    </main>
  );
}
