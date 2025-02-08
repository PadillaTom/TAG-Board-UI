import { LinkButton } from '../../components/library/button';
import { ModeToggle } from '../../components/library/toggle';

const HomePage = () => {
	return (
		<section className="min-h-[150vh] flex flex-col gap-2 items-center">
			<h2>Homepage</h2>
			<LinkButton route={'/'} variant={'default'}>
				Default o Primary
			</LinkButton>
			<LinkButton route={'/'} variant={'secondary'}>
				Secondary{' '}
			</LinkButton>
			<LinkButton route={'/'} variant={'outline'}>
				Outline
			</LinkButton>
			<LinkButton route={'/'} variant={'destructive'}>
				Destructive
			</LinkButton>
			<LinkButton route={'/'} variant={'ghost'}>
				Ghots
			</LinkButton>
			<LinkButton route={'/'} variant={'link'}>
				Link
			</LinkButton>
			<ModeToggle></ModeToggle>
		</section>
	);
};

export default HomePage;
