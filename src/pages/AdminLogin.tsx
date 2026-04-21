import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/adminAuth";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(user.trim(), pass.trim())) {
      navigate("/admin", { replace: true });
    } else {
      setError("Usuário ou senha inválidos.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a1f3d] via-[#1e4a8a] to-[#3b82f6] text-white flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-6">
          <Lock className="h-5 w-5 text-[#c9a84c]" />
          <h1 className="font-serif text-2xl font-semibold">Painel Admin</h1>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="user" className="text-blue-100">Usuário</Label>
            <Input
              id="user"
              autoFocus
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              placeholder="admin"
            />
          </div>
          <div>
            <Label htmlFor="pass" className="text-blue-100">Senha</Label>
            <Input
              id="pass"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              placeholder="••••"
            />
          </div>

          {error && <p className="text-sm text-red-300">{error}</p>}
          <p className="text-xs text-blue-200/80">Dica: usuário <strong>admin</strong> · senha <strong>123</strong></p>

          <Button
            type="submit"
            className="w-full bg-[#c9a84c] text-[#0a1f3d] hover:bg-[#dcc06b] font-semibold"
          >
            Entrar
          </Button>
        </div>
      </form>
    </main>
  );
}
