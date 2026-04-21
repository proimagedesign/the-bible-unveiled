import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getEbook } from "@/data/ebooks";
import { useEbookDraft } from "@/hooks/useEbookDrafts";
import { ArrowLeft, Save, RotateCcw, Eye } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function AdminEbookEdit() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const ebook = getEbook(id);

  if (!ebook) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#0a1f3d] via-[#1e4a8a] to-[#3b82f6] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">Ebook não encontrado.</p>
          <Button onClick={() => navigate("/admin")}>Voltar</Button>
        </div>
      </main>
    );
  }

  const { value, save, reset } = useEbookDraft(ebook.id, ebook.source ?? "");
  const [draft, setDraft] = useState(value);
  const [title, setTitle] = useState(ebook.title);
  const [subtitle, setSubtitle] = useState(ebook.subtitle ?? "");

  const handleSave = () => {
    save(draft);
    toast({
      title: "Alterações salvas",
      description:
        "O texto foi salvo localmente. Para regenerar o PDF, peça no chat: 'regenerar PDF do ebook " +
        ebook.id +
        "'.",
    });
  };

  const handleReset = () => {
    reset();
    setDraft(ebook.source ?? "");
    toast({ title: "Texto restaurado", description: "Voltou ao original." });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a1f3d] via-[#1e4a8a] to-[#3b82f6] text-white">
      <div className="container mx-auto max-w-4xl px-6 py-10">
        <Button
          asChild
          variant="ghost"
          className="text-blue-100 hover:text-white hover:bg-white/10 mb-6"
        >
          <Link to="/admin"><ArrowLeft className="mr-1 h-4 w-4" /> Voltar ao painel</Link>
        </Button>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a84c]">Editar ebook</p>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold">{ebook.title}</h1>
          <p className="text-sm text-blue-200 mt-1">
            Edite o texto-fonte abaixo. As alterações ficam salvas no seu navegador.
            Para gerar um novo PDF com as mudanças, peça no chat.
          </p>
        </header>

        <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="t" className="text-blue-100">Título</Label>
              <Input
                id="t"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 bg-white/10 border-white/20 text-white"
              />
            </div>
            <div>
              <Label htmlFor="s" className="text-blue-100">Subtítulo</Label>
              <Input
                id="s"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="mt-1 bg-white/10 border-white/20 text-white"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="src" className="text-blue-100">
              Texto do ebook (markdown leve)
            </Label>
            <Textarea
              id="src"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="mt-1 min-h-[480px] font-mono text-sm bg-white/10 border-white/20 text-white"
            />
            <p className="text-xs text-blue-200 mt-2">
              {draft.length.toLocaleString("pt-BR")} caracteres
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleSave}
              className="bg-[#c9a84c] text-[#0a1f3d] hover:bg-[#dcc06b] font-semibold"
            >
              <Save className="mr-1 h-4 w-4" /> Salvar alterações
            </Button>
            <Button
              variant="outline"
              onClick={handleReset}
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <RotateCcw className="mr-1 h-4 w-4" /> Restaurar original
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <a href={ebook.pdfUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-1 h-4 w-4" /> Ver PDF atual
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
