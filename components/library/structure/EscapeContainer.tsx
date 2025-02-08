import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface EscapeContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
	children: React.ReactNode;
	className?: string;
}

const containerVariants = cva('m-auto', {
	variants: {
		escape: {
			all: 'pt-[5.8rem] pb-[8rem]',
			navbar: 'pt-[5.8rem]',
			footer: 'pb-[8rem]',
		},
	},
	defaultVariants: {
		escape: 'navbar',
	},
});

const EscapeContainer: React.FC<EscapeContainerProps> = ({ children, escape, className, ...props }) => {
	return (
		<div className={cn(containerVariants({ escape }), className)} {...props}>
			{children}
		</div>
	);
};

export default EscapeContainer;
