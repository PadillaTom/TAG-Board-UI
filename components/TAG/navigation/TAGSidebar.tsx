'use client';

import { Calendar, Home, Inbox, Menu, Search } from 'lucide-react';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
	useSidebar,
} from '@/components/ui/sidebar';
import { Container } from '../../library/structure';
import { WEBSITE_ROUTES } from '../../../constants/routes';
import TAGLogo from '../logo/TAGLogo';
import Link from 'next/link';

// Menu items.
const items = [
	{
		title: 'Inicio',
		url: WEBSITE_ROUTES.HOME,
		icon: Home,
	},
	{
		title: 'Acerca de nosotros',
		url: WEBSITE_ROUTES.ABOUT,
		icon: Inbox,
	},
	{
		title: 'Contacto',
		url: WEBSITE_ROUTES.CONTACT,
		icon: Calendar,
	},
	{
		title: 'Entrar',
		url: WEBSITE_ROUTES.LOGIN,
		icon: Search,
	},
];

const TAGSidebar = () => {
	const { setOpenMobile } = useSidebar();
	return (
		<aside className="sm:hidden">
			<nav className="w-full h-[5rem] bg-white fixed top-0 drop-shadow-sm z-30">
				<Container className="h-full flex flex-row items-center justify-between">
					<div className="relative flex flex-col items-center justify-center">
						<Menu size={'30px'}></Menu>
						<SidebarTrigger className="opacity-0 absolute top-0 left-0 w-full h-full" />
					</div>
					<TAGLogo></TAGLogo>
				</Container>
			</nav>
			<Sidebar collapsible="offcanvas">
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Tag Board</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu className="gap-6 mt-6">
								{items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild onClick={() => setOpenMobile(false)}>
											<Link href={item.url}>
												<span className="text-xl font-normal text-primary">{item.title}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</aside>
	);
};

export default TAGSidebar;
