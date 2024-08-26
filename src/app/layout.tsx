import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'MegaCursos',
	description: 'Plataforma de cursos online',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ReactQueryProvider>
					<Navigation />
					{children}
					<Footer />
				</ReactQueryProvider>
			</body>
		</html>
	);
}

