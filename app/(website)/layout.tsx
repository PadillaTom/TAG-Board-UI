import { Container, EscapeContainer } from '../../components/library/structure';
import { Navbar } from '../../components/navigation';

const WebsiteLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main>
			<Navbar></Navbar>
			<EscapeContainer>
				<Container>{children}</Container>
			</EscapeContainer>
		</main>
	);
};

export default WebsiteLayout;
