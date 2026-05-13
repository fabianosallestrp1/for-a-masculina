## Implementar Opção B — sálvia clara + azuis

### 1. `src/styles.css`
Adicionar token novo na paleta `:root`:
- `--surface-sage-light: #E8F0EC` (sálvia muito clara — neutro quente, substitui o branco/areia como respiro)

Manter os tokens já usados: `--surface-azure: #C2DCEC` e `--surface-deep: #8FB0C2`.
Remover (ou apenas deixar de usar) `--surface-sand`, `--surface-teal`, `--surface-sage`. Vou removê-los para manter o arquivo enxuto.

Adicionar mapeamento `--color-surface-sage-light` no bloco `@theme inline`.

### 2. `src/routes/index.tsx`
Atualizar os `className` das seções:

| Seção | Antes | Depois |
|---|---|---|
| Hero | gradiente suave | mantém |
| Para quem | `bg-surface-sage` | `bg-surface-sage-light` |
| Como funciona | `bg-surface-sand` | `bg-surface-azure` |
| Serviços | `bg-surface-teal` | `bg-surface-sage-light` |
| Sobre | gradiente brand | mantém |
| Trajetória | `bg-surface-azure` | `bg-surface-sage-light` |
| Ecos | `bg-surface-sage` | `bg-surface-azure` |
| Inspirações | `bg-surface-sand` | `bg-surface-sage-light` |
| Agendar | `bg-surface-deep` | mantém |
| Footer | petróleo | mantém |

Sequência final: gradiente → sálvia clara → azul claro → sálvia clara → [gradiente azul/petróleo] → sálvia clara → azul claro → sálvia clara → petróleo claro → petróleo.

### 3. QA
Após salvar, verificar visualmente no preview se o contraste entre cards brancos e fundo sálvia está agradável e se nenhum texto perde legibilidade.

**Custo: ~1 crédito.**