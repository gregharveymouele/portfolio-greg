import { createContext, useContext, useMemo, useState, useCallback } from "react";

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [item, setItem] = useState(null); // { image, title, subtitle } | null

  const open = useCallback((image, title, subtitle) => {
    setItem({ image, title, subtitle });
  }, []);

  const close = useCallback(() => setItem(null), []);

  const value = useMemo(() => ({ item, open, close }), [item, open, close]);

  return <LightboxContext.Provider value={value}>{children}</LightboxContext.Provider>;
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within a LightboxProvider");
  return ctx;
}
