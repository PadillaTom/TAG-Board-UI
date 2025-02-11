'use client';

import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from './theme-provider';
import { SidebarProvider } from '@/components/ui/sidebar';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				<SidebarProvider>
					<AuthProvider>{children}</AuthProvider>
				</SidebarProvider>
			</ThemeProvider>
		</>
	);
};

export default Providers;
