import { Container, EscapeContainer } from '../../components/library/structure';
import { Navbar, Sidebar } from '../../components/TAG/navigation';

const WebsiteLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main>
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<EscapeContainer escape={'all'}>
				<Container>{children}</Container>
			</EscapeContainer>
		</main>
	);
};

export default WebsiteLayout;
