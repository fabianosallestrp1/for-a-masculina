## Reestruturação da prova social (CFP-safe)

Como você não é psicólogo registrado no CFP, as resoluções não te obrigam — mas vamos adotar a mesma postura ética como padrão de qualidade e cuidado clínico. Isso protege a sua imagem, evita promessas de resultado e mantém o tom fenomenológico/sóbrio da página.

### O que muda na navegação

- O item de menu "Depoimentos" passa a se chamar **"Ecos"** (apontando para `#ecos`).
- Surge uma nova seção **"Trajetória"**, posicionada logo antes de "Sobre mim".

### Nova seção: Trajetória (prova social de autoridade)

Posição: antes de "Sobre mim". Fundo neutro, mesma linguagem visual das demais.

Estrutura:
- Título pequeno: "Trajetória"
- Headline: "Anos de prática, escuta e estudo."
- Linha de números (3 blocos lado a lado, ícones sóbrios já no estilo da página):
  - `[X]+ anos` de prática sistêmica
  - `[X]+` constelações conduzidas
  - `[X]+` grupos / círculos facilitados
- Bloco "Formação e referências" (lista enxuta, 3–5 itens):
  - Formação em Constelação Familiar — `[Instituição]`
  - Formação em Terapia Sistêmica — `[Instituição]`
  - Supervisão contínua com `[Nome / linha de trabalho]`
  - Participação em encontros e jornadas — `[evento/ano]`
- Microcopy de rodapé: "Atendimentos online e presenciais em Uberlândia-MG."

Todos os campos entre `[...]` ficam como **placeholders** prontos para você preencher depois.

### Seção reformulada: Ecos do processo (substitui "Depoimentos")

Posição: mesma da atual seção "Depoimentos". Mantém o carrossel já existente (setas + dots), só muda conteúdo e enquadramento.

- Título pequeno: "Ecos"
- Headline: "Sobre o espaço, a escuta e a condução."
- Abertura curta (1 linha, em itálico discreto), com 2 perguntas que substituem a ideia de "Você já sentiu isso?":
  - "Já procurou um lugar onde fosse possível baixar a guarda? Onde a sua história pudesse ser olhada sem pressa?"
- 3 a 5 frases curtas, **sem nome, sem idade, sem cidade, sem contexto pessoal**, falando apenas da experiência do espaço/condução. Exemplos (placeholders editáveis):
  - "Uma escuta que eu não sabia que era possível."
  - "Um espaço sério, sem atalhos e sem promessas."
  - "Saí com a sensação de ter sido visto sem ser julgado."
  - "Um cuidado raro com cada palavra dita."
  - "A condução sustenta o silêncio sem pressa."
- Nota de rodapé pequena, em `text-muted-foreground`:
  - "Frases compartilhadas espontaneamente por participantes sobre a experiência do espaço. Nenhum relato envolve resultados clínicos, dados pessoais ou identificação."

### Detalhes técnicos

- Arquivo único afetado: `src/routes/index.tsx`.
- Novo componente `Trajetoria()` adicionado e referenciado no JSX principal antes de `<SobreMim />` (ou equivalente).
- Componente `Depoimentos()` renomeado para `Ecos()` (id da seção: `ecos`), mantendo o mesmo carrossel/markup, apenas trocando textos, headline, label e removendo o campo "autor" (`figcaption` vira a nota de rodapé única da seção, não por item).
- Atualizar o array do menu (linha ~42): `["Ecos", "#ecos"]`.
- Ícones novos (Trajetória) usando lucide-react já presente, no mesmo estilo sóbrio: `TreeDeciduous`, `Compass`, `Network` (ou `Waypoints`) — um por bloco de número.
- Sem mudança de tokens de design, sem novas dependências, sem alteração de rotas.

### Fora de escopo

- Não mexer nas seções "Serviços", "Sobre mim" e "Inspirações" já ajustadas.
- Não alterar SEO/head desta rota nesta etapa.