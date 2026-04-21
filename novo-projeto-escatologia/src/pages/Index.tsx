import { Button } from "@/components/ui/button";
import { Download, BookOpen, Check } from "lucide-react";
import cover from "@/assets/ebook-cover.png";

const PDF_URL = "/escatologia-dispensacionalista-daniel-filho.pdf";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#2a0404] via-[#4a0404] to-[#7b1113] text-white">
      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-20">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
            · Maranata ·
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Escatologia
          </h1>
          <p className="mt-4 font-serif italic text-lg md:text-xl text-red-100">
            Uma Perspectiva Dispensacionalista
          </p>
          <p className="mt-2 text-sm text-red-200">por Daniel Filho</p>
        </header>

        <section className="grid gap-10 md:grid-cols-2 md:items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
          <div className="flex justify-center">
            <img
              src={cover}
              alt="Capa do ebook Escatologia, de Daniel Filho"
              className="w-64 md:w-80 rounded-lg shadow-2xl ring-1 ring-[#d4af37]/40"
              loading="eager"
            />
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-[#f3e5ab]">
              O grandioso clímax da revelação bíblica
            </h2>
            <p className="text-red-100 leading-relaxed mb-6">
              Uma jornada em 10 capítulos pelas grandes verdades escatológicas: 
              arrebatamento, tribulação, o reino milenar e o estado eterno — com citações de 
              grandes mestres do passado e do presente, e análises gramaticais e contextuais.
            </p>

            <ul className="space-y-2 mb-8 text-sm text-red-100">
              {[
                "Formatado em A5, pronto para ler ou imprimir",
                "10 capítulos + introdução completa",
                "Diagramação profissional premium",
                "Boxes de citações e explicações teológicas",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="h-4 w-4 mt-0.5 text-[#d4af37] shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#d4af37] text-[#2a0404] hover:bg-[#f3e5ab] font-semibold transition-colors"
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

            <p className="mt-4 text-xs text-red-200">
              Arquivo PDF · Distribuição livre para uso pessoal
            </p>
          </div>
        </section>

        <section className="mt-10 text-center text-sm text-red-200">
          <p className="font-serif italic">
            "Aquele que testifica estas coisas diz: Certamente, venho sem demora. 
            Amém! Vem, Senhor Jesus!" — Apocalipse 22.20
          </p>
        </section>

        <footer className="mt-12 text-center text-xs text-red-300/70">
          © Daniel Filho — Soli Deo Gloria
        </footer>
      </div>
    </main>
  );
};

export default Index;
