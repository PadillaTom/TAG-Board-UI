import { RegisterForm } from '../../../components/TAG/forms';

const RegisterPage = () => {
	return (
		<div className="flex flex-col gap-6 md:gap-10">
			<h2 className="form-title">Quiero registrarme!</h2>
			<RegisterForm></RegisterForm>
		</div>
	);
};

export default RegisterPage;
