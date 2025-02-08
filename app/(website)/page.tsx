import { Container } from "../../components/library/structure";
import { ModeToggle } from "../../components/library/toggle";

const HomePage = () => {
	return (
		<Container className="flex flex-col gap-4">
			<h2>TAG Board</h2>
			<h2>Homepage</h2>
			<ModeToggle></ModeToggle>
		</Container>
	);
};

export default HomePage;
