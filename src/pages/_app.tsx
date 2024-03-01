import { api } from '~/utils/api';

import type { Metadata } from 'next';
import { type AppType } from 'next/app';

import { ThemeProvider } from 'next-themes';
import '~/styles/globals.css';

import { MainNav } from '~/components/navigation/main-nav';
import { SiteFooter } from '~/components/site-footer';
import { TailwindIndicator } from '~/components/tailwind-indicator';
import { Toaster } from '~/components/ui/toaster';
import { siteConfig } from '~/config/site';

export const metadata: Metadata = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

const MyApp: AppType = ({ Component, pageProps }) => {
  const isAuthenticated = true;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen flex-col">
        <header className="container z-40 bg-background">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav
              isAuthenticated={Boolean(isAuthenticated)}
              items={siteConfig.mainNav}
            />
          </div>
        </header>
        <main className="container flex-1">
          <Component {...pageProps} />
        </main>
        <SiteFooter />
      </div>
      <Toaster />
      <TailwindIndicator />
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
