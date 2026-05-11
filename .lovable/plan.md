## Objetivo

Incorporar a nova logo entregue e migrar a paleta do site para a **Opção A — Confiança + Cura** da marca.

## 1. Logo

- Substituir `src/assets/logo.png` pela nova arte (`user-uploads://logo_1.png`) — versão completa com símbolo + wordmark "FABIANO SALLES / Constelador e terapeuta sistêmico".
- Header (l. 52): manter `h-9 w-auto`, mas como a nova arte é mais alta (símbolo empilhado sobre wordmark), aumentar para `h-12 sm:h-14` para preservar legibilidade.
- Hero/grande (l. 113) e Footer (l. 657): manter — só trocar o asset.
- **Favicon**: gerar a partir do símbolo "S" circular. Recortar a parte superior do PNG novo (apenas o círculo), exportar em 32×32 e 180×180 e referenciar em `__root.tsx` (`<link rel="icon">` e `apple-touch-icon`).

## 2. Paleta — atualização do `src/styles.css`

Reescrever o bloco `:root` para refletir a marca aprovada. Mapeamento:

| Token | Antes | Depois | Hex marca |
|---|---|---|---|
| `--primary` | azul `#2497D1` | mantém | `#2497D1` |
| `--primary-deep` | azul-marinho arroxeado | **petróleo** | `#1E5A7A` |
| `--primary-soft` | azul muito claro | mantém | (derivado) |
| `--accent` | = primary | **teal terapêutico** (separado) | `#4FA8A0` |
| `--accent-foreground` | branco | branco | — |
| `--secondary` | azul claro | **sálvia clara** | `#BFD8CC` |
| `--secondary-foreground` | — | petróleo | `#1E5A7A` |
| `--background` | branco puro | mantém branco (ver §3) | `#FFFFFF` |
| `--muted` (fundos de seção) | quase-branco | **areia** | `#F8F7F3` |
| `--muted-foreground` | cinza azulado | **cinza rocha** | `#5E6468` |
| `--ring` | azul | teal (segue accent) | `#4FA8A0` |
| `--gradient-brand` | azul→marinho | mantém visual do logo (azul principal → petróleo) | — |

Modo dark: ajustar proporcionalmente (clarear teal e petróleo para legibilidade em fundo escuro).

Todos os valores convertidos para `oklch()` conforme o padrão do arquivo.

## 3. Aplicação por seção (fundos alternados)

Usar areia (`--muted`) para criar respiração visual entre blocos brancos:

| Seção (ordem atual) | Fundo |
|---|---|
| Hero | branco |
| Serviços | **areia** |
| Trajetória | branco |
| Sobre | **areia** |
| Ecos (depoimentos) | branco |
| Inspirações | **areia** |
| Contato/CTA final | branco |
| Footer | petróleo (`--primary-deep`) |

Ajustes pontuais nos `className` das `<section>` em `src/routes/index.tsx` (substituir `bg-white`/`bg-secondary`/etc. por `bg-background` ou `bg-muted` conforme tabela).

## 4. CTAs em teal

Migrar todos os botões de ação primária para teal. Itens afetados (varredura no `index.tsx`):

- Botão "Agendar conversa" no header
- CTAs do Hero (principal + WhatsApp)
- CTAs ao final de cada seção (Serviços, Sobre, Contato)
- Links de WhatsApp flutuantes (se houver)

Estratégia: como `--accent` agora é teal (separado de primary), atualizar os botões que hoje usam `bg-primary` para `bg-accent text-accent-foreground hover:bg-accent/90`. Deixar `bg-primary` apenas em elementos de identidade (chips, ícones, divisores) — ou substituir por `bg-primary-deep` quando for título/destaque.

Botões secundários (outline): borda em `--primary-deep`, texto em `--primary-deep`, hover com fundo `--secondary` (sálvia).

## 5. Verificações de contraste (WCAG AA)

Antes de finalizar:
- Teal `#4FA8A0` sobre branco: ~3.0:1 — **insuficiente para texto pequeno**. Mitigação: usar teal só em botões grandes (≥18px bold, AA Large = 3:1 ✅) e ícones. Para texto de link em corpo, manter `--primary-deep` `#1E5A7A` (~8.5:1 ✅).
- Texto branco sobre teal em botões: ~3.0:1 — limítrofe. Se ficar fraco visualmente, escurecer o teal do botão para `#3E8B84` mantendo o token `--accent` original para acentos decorativos.
- Cinza rocha `#5E6468` sobre areia `#F8F7F3`: ~6.5:1 ✅.

Testar visualmente após aplicar; se contraste falhar, escurecer a versão "ação" do teal sem alterar o token base.

## 6. Arquivos afetados

- `src/assets/logo.png` (substituir)
- `src/assets/favicon.png` ou `public/favicon.ico` (novo, recortado do símbolo)
- `src/styles.css` (bloco `:root` e `.dark`)
- `src/routes/__root.tsx` (link favicon)
- `src/routes/index.tsx` (ajustes de `className` em `<section>` e botões — ~15-25 linhas)

## 7. Custo estimado

**~3 créditos**: 1 para preparar logo/favicon (recorte + cópias), 1 para reescrever tokens em `styles.css` + dark mode, 1 para varrer `index.tsx` e migrar fundos/botões com QA visual no preview.

## 8. Pontos abertos / decisões já tomadas

- ✅ Fundo: areia em seções alternadas (não global)
- ✅ CTAs: todos em teal
- ✅ Logo completo no header e footer
- ✅ Favicon novo a partir do símbolo
- Pendente apenas: validar contraste na implementação e, se necessário, escurecer o teal só nos botões.
