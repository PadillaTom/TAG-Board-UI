'use client';

import { Container } from '../../../../components/library/structure';
import { useAuth } from '../../../../context/AuthContext';

const ProfilePage = () => {
	const { user } = useAuth();
	console.log('Profile Page', user);
	if (user)
		return (
			<Container>
				<h2>{user.role}</h2>
			</Container>
		);
};

export default ProfilePage;
