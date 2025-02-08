import { Container, EscapeContainer } from '../../components/library/structure';

const WebsiteLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main>
			<EscapeContainer>
				<Container>{children}</Container>
			</EscapeContainer>
		</main>
	);
};

export default WebsiteLayout;
