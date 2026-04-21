// Registro central de ebooks do projeto.
// Cada novo ebook gerado deve ser adicionado aqui — esta página serve como
// "modelo" para futuras publicações de Daniel Filho.

export type Ebook = {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  pages: number;
  cover: string; // import path resolvido em tempo de build
  pdfUrl: string; // caminho público do PDF
  description: string;
  status: "publicado" | "rascunho" | "em-construcao";
  createdAt: string; // ISO
  // Conteúdo editável (texto-fonte do ebook). Pode ser regenerado em PDF depois.
  // Mantido em formato simples (markdown leve) para edição rápida.
  source?: string;
};

import cover1 from "@/assets/ebook-cover.jpg";

export const ebooks: Ebook[] = [
  {
    id: "conheca-a-biblia",
    title: "Conheça a Bíblia",
    subtitle: "Inerrante · Inspirada · Suficiente",
    author: "Daniel Filho",
    pages: 49,
    cover: cover1,
    pdfUrl: "/Conheca-a-Biblia-Daniel-Filho.pdf",
    description:
      "Manual pastoral em 12 capítulos sobre a doutrina das Escrituras: revelação, cânon, inspiração, inerrância, suficiência e autoridade.",
    status: "publicado",
    createdAt: "2026-04-21",
    source: `# Conheça a Bíblia — Inerrante, Inspirada, Suficiente
Autor: Daniel Filho

## Prefácio
A Bíblia não é apenas um livro entre outros. Ela é a Palavra do Deus vivo...

## Introdução — Por que estudar a doutrina das Escrituras hoje?
Vivemos um tempo em que a autoridade da Bíblia é constantemente questionada...

## Capítulo 1 — O que é a Bíblia?
A palavra "Bíblia" vem do grego biblía, plural de biblíon ("livrinho")...

## Capítulo 2 — Revelação geral e revelação especial
"Os céus declaram a glória de Deus" (Sl 19.1)...

## Capítulo 3 — O cânon das Escrituras
Como chegamos aos 66 livros? O cânon (do grego kanón, "régua")...

## Capítulo 4 — A doutrina da inspiração
"Toda Escritura é inspirada por Deus" — theópneustos (2Tm 3.16)...

## Capítulo 5 — Teorias da inspiração e a visão verbal-plenária
A inspiração não foi mecânica nem meramente conceitual...

## Capítulo 6 — O que significa inerrância
A Declaração de Chicago (1978) afirma que a Escritura...

## Capítulo 7 — Objeções comuns e respostas
"E os erros aparentes?" — analisamos os principais casos...

## Capítulo 8 — A suficiência das Escrituras (Sola Scriptura)
A Reforma redescobriu que a Escritura basta para fé e prática...

## Capítulo 9 — A autoridade da Palavra na vida e na Igreja
Toda autoridade humana está sob a autoridade da Palavra...

## Capítulo 10 — Princípios de interpretação
Contexto, contexto, contexto. Análise gramatical e histórica...

## Capítulo 11 — A Bíblia e a vida cristã prática
Ler, meditar, memorizar, estudar, aplicar...

## Capítulo 12 — Volte às Escrituras
Conclusão pastoral: o convite permanente é simples — volte ao Livro.

## Bibliografia
Calvino, Lutero, Spurgeon, Warfield, Packer, Sproul, Grudem, Bavinck,
Augustus Nicodemus, Heber Carlos de Campos, entre outros.
`,
  },
];

export const getEbook = (id: string) => ebooks.find((e) => e.id === id);
