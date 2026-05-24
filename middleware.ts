import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAuthRoute =
    nextUrl.pathname.startsWith("/login") ||
    nextUrl.pathname.startsWith("/register");

  // 1. Se estiver na rota de login/register e logado, vai pro dashboard
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/dashboard", nextUrl));
    }
    return NextResponse.next();
  }

  // 2. Se não estiver logado e tentar acessar qualquer coisa que não seja auth, vai pro login
  if (!isLoggedIn && nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

// Configuração para rodar apenas nas rotas protegidas
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
