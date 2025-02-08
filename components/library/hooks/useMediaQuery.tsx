import { useEffect, useState } from 'react';

/**
 * A custom React hook that returns true if the specified media query matches,
 * and false otherwise.
 * @param query - The CSS media query string, e.g. "(max-width: 640px)"
 */
export default function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') {
			// If we are on the server, we can’t match media queries
			return;
		}

		const mediaQueryList = window.matchMedia(query);

		// Update state initially
		setMatches(mediaQueryList.matches);

		// Event listener callback
		const listener = (event: MediaQueryListEvent) => {
			setMatches(event.matches);
		};

		mediaQueryList.addEventListener('change', listener);
		return () => {
			mediaQueryList.removeEventListener('change', listener);
		};
	}, [query]);

	return matches;
}
