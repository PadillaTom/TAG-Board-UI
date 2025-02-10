import axios from 'axios';
import { REGISTER_URL, SERVER_ERROR } from '../constants/app_constants';
import { AuthResponse } from '../types/authentication';
import { RegisterFormData } from '../schemas/authenticationSchema';

export async function registerUser(body: RegisterFormData): Promise<AuthResponse> {
	try {
		const response = await axios.post<AuthResponse>(
			`${process.env.NEXT_PUBLIC_LOCAL_BASE_API_URL}${REGISTER_URL}`,
			body,
		);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message);
		}
		throw new Error(SERVER_ERROR);
	}
}
