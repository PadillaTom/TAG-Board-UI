'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface FullScreenContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	navbarHeight?: number; // Default: 80px (5rem)
	className?: string;
}

const FullScreenHeightContainer: React.FC<FullScreenContainerProps> = ({
	navbarHeight = 170, // Default to 5rem (80px)
	className,
	children,
	...props
}) => {
	const [height, setHeight] = useState('65dvh');

	useEffect(() => {
		const updateHeight = () => {
			const innerHeight = window.innerHeight;
			setHeight(`${innerHeight - navbarHeight}px`); // Adjust height dynamically
		};

		updateHeight(); // Run on mount
		window.addEventListener('resize', updateHeight); // Update on resize

		return () => window.removeEventListener('resize', updateHeight); // Cleanup event
	}, [navbarHeight]);

	return (
		<div style={{ height }} className={cn('w-full', className)} {...props}>
			{children}
		</div>
	);
};

export default FullScreenHeightContainer;
