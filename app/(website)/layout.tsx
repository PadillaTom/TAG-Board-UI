import { Container, EscapeContainer } from '../../components/library/structure';
import { Navbar, TAGSidebar } from '../../components/TAG/navigation';

const WebsiteLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main>
			<Navbar></Navbar>
			<TAGSidebar></TAGSidebar>
			<EscapeContainer escape={'all'}>
				<Container className="bg-background text-foreground">{children}</Container>
			</EscapeContainer>
		</main>
	);
};

export default WebsiteLayout;
