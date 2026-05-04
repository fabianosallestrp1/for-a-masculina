import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-forest.jpg";
import portraitImg from "@/assets/fabiano-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Ol%C3%A1%20Fabiano%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.";

function Nav() {
  const links = [
    ["Para quem é", "#para-quem"],
    ["Como funciona", "#como-funciona"],
    ["Depoimentos", "#depoimentos"],
    ["Sobre", "#sobre"],
    ["Agendar", "#agendar"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#topo" className="font-serif text-lg tracking-tight text-primary">Fabiano Salles</a>
        <nav className="hidden md:flex gap-7 text-sm text-muted-foreground">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-primary transition-colors">{l}</a>
          ))}
        </nav>
        <a href={WHATSAPP_URL} className="text-xs md:text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">Agendar</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Homem em uma floresta ao amanhecer"
        width={1600}
        height={1024}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-20 pb-16">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-6">Terapia sistêmica para homens</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-background leading-[1.1] mb-6">
          Reconheça sua história. <br className="hidden sm:block" />
          Acesse a força do masculino.
        </h1>
        <p className="text-base sm:text-lg text-background/80 max-w-xl mx-auto mb-10 leading-relaxed">
          Um espaço sério e acolhedor para homens adultos que desejam compreender suas raízes,
          atravessar o que pesa e viver com mais presença, propósito e verdade.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#agendar" className="px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition shadow-[var(--shadow-warm)]">
            Agendar uma sessão
          </a>
          <a href="#como-funciona" className="px-7 py-3.5 rounded-full border border-background/40 text-background hover:bg-background/10 transition">
            Como funciona
          </a>
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
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Para quem é</p>
        <h2 className="text-3xl md:text-4xl text-primary mb-12 max-w-2xl">
          Este trabalho é para você se…
        </h2>
        <ul className="space-y-5">
          {items.map((t) => (
            <li key={t} className="flex gap-4 items-start text-foreground/85 text-lg leading-relaxed">
              <span className="mt-3 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
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
    { n: "01", t: "Conversa inicial", d: "Um primeiro encontro online para escutar você, entender sua demanda e definir juntos o caminho." },
    { n: "02", t: "Sessões de terapia sistêmica", d: "Encontros semanais ou quinzenais, online ou presenciais, integrando escuta, corpo e olhar sistêmico." },
    { n: "03", t: "Constelação familiar", d: "Quando indicado, propomos uma constelação individual ou em grupo para olhar o sistema familiar." },
    { n: "04", t: "Integração", d: "Acompanhamento do que se moveu — para que a transformação chegue ao cotidiano e às relações." },
  ];
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-muted">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Como funciona</p>
        <h2 className="text-3xl md:text-4xl text-primary mb-14 max-w-2xl">
          Um processo claro, no seu ritmo.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-card p-8 rounded-2xl shadow-[var(--shadow-soft)] border border-border/50">
              <div className="font-serif text-3xl text-secondary mb-3">{s.n}</div>
              <h3 className="text-xl text-primary mb-2">{s.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  const items = [
    { q: "Encontrei um lugar onde pude finalmente baixar a guarda. Em poucos meses minha relação com meu pai mudou — e comigo mesmo também.", a: "R., 42 anos" },
    { q: "Fabiano tem uma escuta rara. A constelação foi um divisor de águas no meu casamento e na minha paternidade.", a: "M., 38 anos" },
    { q: "Sai de cada sessão com mais clareza sobre quem eu sou e do que estou sendo chamado a fazer.", a: "L., 51 anos" },
  ];
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Depoimentos</p>
        <h2 className="text-3xl md:text-4xl text-primary mb-14 max-w-2xl">
          Histórias de homens que atravessaram.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((d) => (
            <figure key={d.a} className="p-8 rounded-2xl border border-border bg-card flex flex-col">
              <blockquote className="font-serif text-lg leading-relaxed text-foreground/90 flex-1">
                “{d.q}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {d.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-center">
        <img
          src={portraitImg}
          alt="Retrato de Fabiano Salles"
          width={1024}
          height={1280}
          loading="lazy"
          className="rounded-2xl w-full max-w-sm mx-auto shadow-[var(--shadow-warm)]"
        />
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-secondary mb-4">Sobre mim</p>
          <h2 className="text-3xl md:text-4xl mb-6 text-background">Fabiano Salles</h2>
          <div className="space-y-5 text-background/85 leading-relaxed text-lg">
            <p>
              Sou terapeuta sistêmico e constelador familiar. Há mais de uma década acompanho
              homens adultos em processos de autoconhecimento, transição de vida e reconciliação
              com suas origens.
            </p>
            <p>
              Acredito que toda história merece ser olhada com dignidade — e que, quando um homem
              encontra seu lugar no sistema familiar, ele pode finalmente caminhar com leveza,
              clareza e força.
            </p>
            <p>
              Meu trabalho integra a abordagem sistêmica fenomenológica de Bert Hellinger,
              psicologia analítica e práticas de presença no corpo.
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
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Como agendar</p>
        <h2 className="text-3xl md:text-4xl text-primary mb-6">
          O primeiro passo é simples.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Envie uma mensagem pelo WhatsApp contando brevemente o que te traz.
          Respondo pessoalmente em até 24 horas e marcamos uma conversa inicial.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a href={WHATSAPP_URL} className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition shadow-[var(--shadow-warm)]">
            Falar no WhatsApp
          </a>
          <a href="mailto:contato@fabianosalles.com.br" className="px-8 py-4 rounded-full border border-primary/30 text-primary hover:bg-primary/5 transition">
            Enviar e-mail
          </a>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>Sessões online para todo o Brasil e exterior.</p>
          <p>Atendimento presencial em São Paulo.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70 py-10 text-center text-sm">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-serif text-lg text-background mb-2">Fabiano Salles</p>
        <p>Terapia sistêmica · Constelação familiar</p>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} — Todos os direitos reservados.</p>
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
