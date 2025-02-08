import { ModeToggle } from "../../components/library/toggle";

const HomePage = () => {
	return (
		<section className="flex flex-col gap-2 items-center">
			<h2>TAG Board</h2>
			<h2>Homepage</h2>
			<ModeToggle></ModeToggle>
		</section>
	);
};

export default HomePage;
