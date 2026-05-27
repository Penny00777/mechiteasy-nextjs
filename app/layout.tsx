import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  title: 'Mech It Easy | STEM Kits Nepal',
  description:
    'Empowering the next generation of engineers in Nepal through hands-on STEM kits and professional digital fabrication labs. We make science something you can hold.',
  keywords:
    'STEM kits Nepal, 3D printing Nepal, Engineering Labs, Mech It Easy, Aakaran Tech, Robotics Nepal',
  metadataBase: new URL('https://mechiteasy.com'),
  openGraph: {
    type: 'website',
    title: 'Mech It Easy | STEM Kits & Engineering Labs',
    description:
      'Hands-on engineering education for the next generation. Professional STEM kits and lab setup solutions in Nepal.',
    images: ['/whitered_logo_nobg.png'],
  },
  icons: {
    icon: '/handshakelogo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
