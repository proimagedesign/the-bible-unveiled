// Autenticação local simples para o painel admin.
// ⚠️ Isto é apenas um gate de UI — não é segurança real.
// Quando o projeto exigir backend, migrar para Lovable Cloud / RLS.

const KEY = "admin:session";
const ADMIN_USER = "admin";
const ADMIN_PASS = "123";

export function login(user: string, pass: string): boolean {
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    sessionStorage.setItem(KEY, "1");
    return true;
  }
  return false;
}

export function logout() {
  sessionStorage.removeItem(KEY);
}

export function isLoggedIn(): boolean {
  return sessionStorage.getItem(KEY) === "1";
}
