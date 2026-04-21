import { Button } from "@/components/ui/button";
import { Download, BookOpen, Check, LayoutGrid, Book, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import bibliaCover from "@/assets/ebook-cover.jpg";
import cruzCover from "@/assets/ebook-cover.png";
import escatologiaCover from "@/assets/escatologia-cover.png";
import disciplinaCover from "@/assets/disciplina-cover.png";

const ebooks = [
  {
    id: "biblia",
    title: "Conheça a Bíblia",
    subtitle: "Inerrante · Inspirada · Suficiente",
    author: "Daniel Filho",
    cover: bibliaCover,
    url: "/Conheca-a-Biblia-Daniel-Filho.pdf",
    description: "Um manual pastoral sobre a doutrina das Escrituras, explorando revelação, cânon e autoridade.",
    accent: "#c9a84c",
    slogan: "Sola Scriptura"
  },
  {
    id: "cruz",
    title: "A Cruz de Cristo",
    subtitle: "A doutrina da Expiação Substitutiva",
    author: "Daniel Filho",
    cover: cruzCover,
    url: "/a-cruz-de-cristo-daniel-filho.pdf",
    description: "Uma jornada profunda sobre o evento central da fé cristã e o sacrifício de Jesus.",
    accent: "#c9a84c",
    slogan: "Solus Christus"
  },
  {
    id: "escatologia",
    title: "Escatologia",
    subtitle: "O Fim dos Tempos e a Glória de Cristo",
    author: "Daniel Filho",
    cover: escatologiaCover,
    url: "#",
    description: "Uma análise bíblica sobre as últimas coisas e a esperança da volta de Cristo.",
    accent: "#d4af37", // Matching its original gold if needed, but using Burgundy/Gold theme
    slogan: "Soli Deo Gloria"
  },
  {
    id: "disciplina",
    title: "Disciplina Cristã",
    subtitle: "O Caminho da Santificação",
    author: "Daniel Filho",
    cover: disciplinaCover,
    url: "#",
    description: "O chamado bíblico para a vida de disciplina, piedade e crescimento espiritual.",
    accent: "#c9a84c",
    slogan: "Coram Deo"
  }
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a1f3d] via-[#1e4a8a] to-[#3b82f6] text-white">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <header className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <Book className="h-8 w-8 text-[#c9a84c]" />
            </div>
          </div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c9a84c]">
            · Biblioteca Teológica ·
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            E-books de Daniel Filho
          </h1>
          <p className="mt-4 font-serif italic text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Recursos pastorais para o crescimento na graça e no conhecimento de nosso Senhor.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {ebooks.map((ebook) => (
            <section 
              key={ebook.id}
              className="group flex flex-col md:flex-row gap-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              <div className="flex justify-center md:w-1/3 shrink-0">
                <img
                  src={ebook.cover}
                  alt={`Capa do ebook ${ebook.title}`}
                  className="w-40 md:w-full rounded-lg shadow-xl ring-1 ring-[#c9a84c]/20 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#c9a84c] mb-1 font-semibold">
                    {ebook.slogan}
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-1 leading-tight">
                    {ebook.title}
                  </h2>
                  <p className="text-sm font-serif italic text-blue-200 mb-3">
                    {ebook.subtitle}
                  </p>
                  <p className="text-blue-100 text-sm leading-relaxed mb-4 line-clamp-3">
                    {ebook.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-[#c9a84c] text-[#0a1f3d] hover:bg-[#dcc06b] font-semibold flex-1"
                    >
                      <a href={ebook.url} download>
                        <Download className="mr-1 h-4 w-4" />
                        Baixar PDF
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white flex-1"
                    >
                      <a href={ebook.url} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="mr-1 h-4 w-4" />
                        Ler Online
                      </a>
                    </Button>
                  </div>
                  <p className="text-[10px] text-blue-300/70 text-center">
                    Formato A5 · Edição {ebook.author}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-20 text-center text-sm text-blue-200 max-w-2xl mx-auto">
          <p className="font-serif italic text-lg mb-4">
            "A relva seca, e a flor cai, mas a palavra de nosso Deus permanece
            eternamente." — Isaías 40.8
          </p>
          <div className="h-px w-24 bg-[#c9a84c]/30 mx-auto mb-6" />
        </section>

        <footer className="mt-12 text-center text-xs text-blue-300/70">
          © Daniel Filho — Soli Deo Gloria — Todos os direitos reservados
        </footer>
      </div>

      {/* Acesso administrativo discreto */}
      <Link
        to="/admin/login"
        aria-label="Acesso administrativo"
        title="Admin"
        className="fixed bottom-3 left-3 z-50 inline-flex items-center gap-1 rounded-md bg-white/5 hover:bg-white/15 border border-white/10 px-2 py-1 text-[10px] text-blue-200/70 hover:text-white transition-colors backdrop-blur-sm"
      >
        <Lock className="h-3 w-3" /> ADM
      </Link>
    </main>
  );
};

export default Index;
