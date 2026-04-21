import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ebooks } from "@/data/ebooks";
import { ArrowLeft, Pencil, Eye, FileText } from "lucide-react";

export default function AdminEbooksList() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a1f3d] via-[#1e4a8a] to-[#3b82f6] text-white">
      <div className="container mx-auto max-w-5xl px-6 py-10">
        <Button
          asChild
          variant="ghost"
          className="text-blue-100 hover:text-white hover:bg-white/10 mb-6"
        >
          <Link to="/admin"><ArrowLeft className="mr-1 h-4 w-4" /> Voltar ao painel</Link>
        </Button>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a84c]">Biblioteca</p>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold">Outros Ebooks</h1>
          <p className="text-sm text-blue-200 mt-2">
            Peça novos ebooks no chat. Eles serão registrados aqui automaticamente
            usando este projeto como modelo.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {ebooks.map((e) => (
            <article
              key={e.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex gap-4"
            >
              <img
                src={e.cover}
                alt={`Capa de ${e.title}`}
                className="w-20 h-28 object-cover rounded shadow ring-1 ring-[#c9a84c]/30"
              />
              <div className="flex-1 min-w-0">
                <h2 className="font-serif text-lg font-semibold truncate">{e.title}</h2>
                {e.subtitle && (
                  <p className="text-xs italic text-blue-100 truncate">{e.subtitle}</p>
                )}
                <p className="text-xs text-blue-200 mt-1">
                  {e.pages}p · {e.status}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Button asChild size="sm" className="bg-[#c9a84c] text-[#0a1f3d] hover:bg-[#dcc06b]">
                    <Link to={`/admin/ebooks/${e.id}/editar`}>
                      <Pencil className="mr-1 h-3 w-3" /> Editar
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                    <a href={e.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="mr-1 h-3 w-3" /> PDF
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}

          <div className="border border-dashed border-white/20 rounded-xl p-5 flex flex-col items-center justify-center text-center text-blue-200">
            <FileText className="h-8 w-8 mb-2 text-[#c9a84c]" />
            <p className="text-sm">
              Para criar um novo ebook, abra o chat e descreva o título, tema e
              estrutura desejada.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
