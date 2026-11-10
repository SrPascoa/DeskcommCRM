import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

/**
 * "Tenho sessão?" — usado só pela tela de login (`RetomarSessao`).
 * 204 com sessão válida, 401 sem. Sem corpo: não expõe dados de ninguém.
 */
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return new NextResponse(null, {
    status: user ? 204 : 401,
    headers: { "Cache-Control": "no-store" },
  });
}
