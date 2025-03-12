import axios from 'axios';
import { LOGIN_URL, REGISTER_URL, SERVER_ERROR } from '../constants/app_constants';
import { AuthResponse } from '../types/authentication';
import { LoginRequest, RegisterRequest } from '../schemas/authenticationSchema';
import publicApi from '../lib/api/publicApi';

export async function registerUser(body: RegisterRequest): Promise<AuthResponse> {
	try {
		const response = await publicApi.post<AuthResponse>(`${REGISTER_URL}`, body);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			if (error.status === 400) {
				const errorList = error.response.data.errors.map((e: string) => {
					return e;
				});
				throw new Error(errorList);
			}
			throw new Error(error.response.data.message);
		}
		throw new Error(SERVER_ERROR);
	}
}

export async function loginUser(body: LoginRequest): Promise<AuthResponse> {
	try {
		const response = await publicApi.post<AuthResponse>(`${LOGIN_URL}`, body);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			console.log(error);
			if (error.status === 400) {
				const errorList = error.response.data.errors.map((e: string) => {
					return e;
				});
				throw new Error(errorList);
			}
			throw new Error(error.response.data.message);
		}
		throw new Error(SERVER_ERROR);
	}
}
