import { Button } from "@/components/ui/button";
import { Download, BookOpen, Check, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import cover from "@/assets/ebook-cover.jpg";

const PDF_URL = "/Conheca-a-Biblia-Daniel-Filho.pdf";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a1f3d] via-[#1e4a8a] to-[#3b82f6] text-white">
      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-20">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c9a84c]">
            · Sola Scriptura ·
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Conheça a Bíblia
          </h1>
          <p className="mt-4 font-serif italic text-lg md:text-xl text-blue-100">
            Inerrante · Inspirada · Suficiente
          </p>
          <p className="mt-2 text-sm text-blue-200">por Daniel Filho</p>
        </header>

        <section className="grid gap-10 md:grid-cols-2 md:items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
          <div className="flex justify-center">
            <img
              src={cover}
              alt="Capa do ebook Conheça a Bíblia, de Daniel Filho"
              className="w-64 md:w-80 rounded-lg shadow-2xl ring-1 ring-[#c9a84c]/40"
              loading="eager"
            />
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
              Um manual pastoral sobre a doutrina das Escrituras
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              Uma jornada em 12 capítulos pelas grandes verdades sobre a
              Bíblia: revelação, cânon, inspiração, inerrância, suficiência e
              autoridade — com citações de Calvino, Lutero, Spurgeon, Warfield,
              Packer, Sproul, Grudem, Bavinck, Augustus Nicodemus e outros.
            </p>

            <ul className="space-y-2 mb-8 text-sm text-blue-100">
              {[
                "49 páginas em formato A5, prontas para ler ou imprimir",
                "12 capítulos + prefácio, introdução e bibliografia",
                "Análises contextuais e gramaticais (hebraico e grego)",
                "Boxes de citações e perguntas para reflexão",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="h-4 w-4 mt-0.5 text-[#c9a84c] shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#c9a84c] text-[#0a1f3d] hover:bg-[#dcc06b] font-semibold"
              >
                <a href={PDF_URL} download>
                  <Download className="mr-1" />
                  Baixar PDF
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-1" />
                  Ler online
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-blue-200">
              Arquivo PDF · ~1 MB · Distribuição livre para uso pessoal
            </p>
          </div>
        </section>

        <section className="mt-10 text-center text-sm text-blue-200">
          <p className="font-serif italic">
            "A relva seca, e a flor cai, mas a palavra de nosso Deus permanece
            eternamente." — Isaías 40.8
          </p>
        </section>

        <footer className="mt-12 text-center text-xs text-blue-300/70">
          © Daniel Filho — Soli Deo Gloria
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
