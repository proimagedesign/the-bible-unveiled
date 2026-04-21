import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ebooks } from "@/data/ebooks";
import { logout } from "@/lib/adminAuth";
import { LogOut, Pencil, BookOpen, Plus, Eye } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const primary = ebooks[0];
  const others = ebooks.slice(1);

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a1f3d] via-[#1e4a8a] to-[#3b82f6] text-white">
      <div className="container mx-auto max-w-5xl px-6 py-10">
        <header className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c9a84c]">Painel</p>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold">Administração de Ebooks</h1>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <LogOut className="mr-1 h-4 w-4" /> Sair
          </Button>
        </header>

        {/* Ebook principal */}
        <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] mb-3">Ebook em destaque</p>
          <div className="grid gap-6 md:grid-cols-[200px_1fr] md:items-start">
            <img
              src={primary.cover}
              alt={`Capa de ${primary.title}`}
              className="w-40 md:w-full rounded-lg shadow-xl ring-1 ring-[#c9a84c]/40"
            />
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold">{primary.title}</h2>
              {primary.subtitle && (
                <p className="font-serif italic text-blue-100 mt-1">{primary.subtitle}</p>
              )}
              <p className="text-sm text-blue-200 mt-1">
                {primary.author} · {primary.pages} páginas · {primary.status}
              </p>
              <p className="text-blue-100 mt-4 leading-relaxed">{primary.description}</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Button
                  asChild
                  className="bg-[#c9a84c] text-[#0a1f3d] hover:bg-[#dcc06b] font-semibold"
                >
                  <Link to={`/admin/ebooks/${primary.id}/editar`}>
                    <Pencil className="mr-1 h-4 w-4" /> Editar
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <Link to="/admin/ebooks">
                    <BookOpen className="mr-1 h-4 w-4" /> Outros ebooks
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <a href={primary.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-1 h-4 w-4" /> Visualizar PDF
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Atalho para novos */}
        <section className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-semibold">Construir um novo ebook</h3>
            <p className="text-sm text-blue-200 mt-1">
              Use este projeto como modelo. Peça aqui no chat um novo ebook e ele
              aparecerá em "Outros ebooks".
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <Link to="/admin/ebooks">
              <Plus className="mr-1 h-4 w-4" /> Ver biblioteca ({ebooks.length})
            </Link>
          </Button>
        </section>

        {others.length > 0 && (
          <p className="mt-6 text-sm text-blue-200">
            Você tem {others.length} ebook(s) adicional(is) em construção.
          </p>
        )}
      </div>
    </main>
  );
}
