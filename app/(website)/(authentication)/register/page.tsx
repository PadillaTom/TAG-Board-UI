import { RegisterForm } from '../../../../components/TAG/forms';

const RegisterPage = () => {
	return (
		<div className="pt-[12vh] lg:pt-[18vh] flex flex-col items-center gap-10">
			<h2 className="form-title">Quiero registrarme!</h2>
			<RegisterForm></RegisterForm>
		</div>
	);
};

export default RegisterPage;
