import './globals.css';
import { site } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.tagline,
  openGraph: { title: site.name, description: site.tagline, url: site.url, siteName: site.name, type: 'website' },
  twitter: { card: 'summary_large_image', title: site.name, description: site.tagline },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
