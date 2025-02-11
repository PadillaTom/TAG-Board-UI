import { Container } from '../../components/library/structure';

const AuthenticationLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main className="min-h-dvh  grid place-items-center bg-white text-foreground">
			<Container>{children}</Container>
		</main>
	);
};

export default AuthenticationLayout;
