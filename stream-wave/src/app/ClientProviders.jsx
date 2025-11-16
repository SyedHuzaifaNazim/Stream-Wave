"use client";

import { ThemeProvider } from "../context/ThemeContext";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/AuthContext";

export default function ClientProviders({ children }) {
  return (
    <ThemeProvider>
      <SessionProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
