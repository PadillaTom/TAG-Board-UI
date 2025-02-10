import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
	title: {
		default: 'TAG Board',
		template: '%s | TAG Board',
	},
	description:
		'TAG Board es una plataforma para gestionar proyectos al estilo Trello/Jira, ideal para organizar tus tareas, equipos y flujo de trabajo.',
	keywords: ['Gestión de Proyectos', 'Kanban', 'Trello', 'Scrum', 'Agile'],
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: 'https://tag-board-ui.vercel.app/',
		title: 'TAG Board | Gestiona tus proyectos de forma ágil',
		description:
			'TAG Board es la herramienta ideal para organizar tareas y proyectos al estilo Trello/Jira. Perfecto para equipos ágiles y metodología Scrum.',
	},
	icons: {
		icon: './favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body suppressHydrationWarning>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
