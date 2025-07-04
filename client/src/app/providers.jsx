'use client';
import { AuthProvider } from '@/contexts/AuthContext';
import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
export function Providers({ children }) {
  const router = useRouter();

  return (
    <AuthProvider>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider attribute={'class'} defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </HeroUIProvider>
    </AuthProvider>
  );
}
