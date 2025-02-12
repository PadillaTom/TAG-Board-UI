import { LoginForm } from '../../../components/TAG/forms';

const LoginPage = () => {
	return (
		<div className="flex flex-col gap-6 md:gap-10">
			<h2 className="form-title">Login</h2>
			<LoginForm></LoginForm>
		</div>
	);
};

export default LoginPage;
