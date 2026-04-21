import { useEffect, useState } from "react";

// Mantém edições dos ebooks em localStorage por id.
// Permite editar o texto-fonte sem backend.

const storageKey = (id: string) => `ebook:draft:${id}`;

export function useEbookDraft(id: string, initial: string) {
  const [value, setValue] = useState<string>(() => {
    const stored = localStorage.getItem(storageKey(id));
    return stored ?? initial;
  });

  useEffect(() => {
    // Se o initial mudou e não há rascunho salvo, sincroniza
    const stored = localStorage.getItem(storageKey(id));
    if (stored === null) setValue(initial);
  }, [id, initial]);

  const save = (next: string) => {
    localStorage.setItem(storageKey(id), next);
    setValue(next);
  };

  const reset = () => {
    localStorage.removeItem(storageKey(id));
    setValue(initial);
  };

  return { value, save, reset };
}
