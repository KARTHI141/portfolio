import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CursorGlow } from '@/components/CursorGlow';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Karthick Raja G | Backend Software Engineer',
  description:
    'Backend Software Engineer with 2.5+ years of experience building scalable systems using Java, Spring Boot, Microservices, AWS, and Docker. AWS Certified Developer.',
  keywords: [
    'Backend Engineer',
    'Java Developer',
    'Spring Boot',
    'Microservices',
    'AWS',
    'Docker',
    'Software Engineer',
    'Karthick Raja',
  ],
  openGraph: {
    title: 'Karthick Raja G | Backend Software Engineer',
    description:
      'Backend Software Engineer building scalable systems with Java, Spring Boot & AWS',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="noise-overlay">
        <ThemeProvider>
          <CursorGlow />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
