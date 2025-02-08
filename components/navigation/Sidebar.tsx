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
} from '@/components/ui/sidebar';
import { Container } from '../library/structure';
import { WEBSITE_ROUTES } from '../../constants/routes';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { SheetDescription, SheetTitle } from '../ui/sheet';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';

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
	return (
		<aside className="sm:hidden" aria-label="Menú principal de TAG Board">
			<nav className="w-full h-[5rem] bg-white fixed top-0 drop-shadow-md z-30">
				<Container className="h-full flex flex-row items-center justify-between">
					<div className="relative flex flex-col items-center justify-center">
						<Menu size={'30px'}></Menu>
						<SidebarTrigger className="opacity-0 absolute top-0 left-0 w-full h-full" />
					</div>
					<div className="flex gap-2">
						<h2>TAG</h2>
						<span>Board</span>
					</div>
				</Container>
			</nav>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Tag Board</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<a href={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</a>
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
