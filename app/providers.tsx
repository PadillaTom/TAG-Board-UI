'use client';

import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from './theme-provider';
import { SidebarProvider } from '@/components/ui/sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				<SidebarProvider>
					<QueryClientProvider client={queryClient}>
						<AuthProvider>{children}</AuthProvider>
					</QueryClientProvider>
				</SidebarProvider>
			</ThemeProvider>
		</>
	);
};

export default Providers;
