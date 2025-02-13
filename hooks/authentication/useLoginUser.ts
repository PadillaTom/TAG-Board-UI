import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../actions/authentication_actions';
import { USER_ROUTES } from '../../constants/routes';

export function useLoginUser() {
	const router = useRouter();
	const { updateUser } = useAuth();

	return useMutation({
		mutationFn: loginUser,
		onSuccess: (response) => {
			updateUser(response.jwt);
			router.push(USER_ROUTES.DASHBOARD);
		},
		onError: (error: Error) => {
			throw new Error(error.message);
		},
	});
}
