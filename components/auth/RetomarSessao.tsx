"use client";

import { useEffect } from "react";

/**
 * Quem chega ao login COM sessão viva segue para o destino.
 *
 * O cookie de sessão é `sameSite: "strict"`: não viaja quando a navegação nasce
 * fora do site (abrir a app instalada no Android, link vindo de outra app), e o
 * `proxy` manda a pessoa para `/login` embora a sessão exista. Um `fetch` feito
 * por ESTE documento é same-site — o cookie viaja — e, havendo sessão, o
 * `location.replace` daqui também. Mesmo mecanismo de `lib/auth/ponte-de-volta.ts`.
 */
export function RetomarSessao({ destino }: { destino: string }) {
  useEffect(() => {
    fetch("/api/v1/auth/sessao", { credentials: "same-origin", cache: "no-store" })
      .then((r) => {
        if (r.ok) window.location.replace(destino);
      })
      .catch(() => {});
  }, [destino]);
  return null;
}
