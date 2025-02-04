import 'app/ui/global.css';
import { inter } from 'app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Practice Coding',
  description: 'A practice project for Next.js.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
