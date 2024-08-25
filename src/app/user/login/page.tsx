'use client';

import DefaultButton from '@/components/Button';
import { useRouter } from 'next/navigation';

const Login = () => {
	const router = useRouter();
	const handleSubmit = () => {
		router.push(`/api/auth`);
	};
	return (
		<div className="flex min-h-screen flex-col gap-8 items-center justify-center">
			<div className="border border-blue-800 flex flex-col gap-8 w-96  p-5 rounded-md">
				<h1 className="text-xl font-bold underline text-blue-800">
					Bem-vindo de volta!
				</h1>
				<p>
					Clique no botão e realize seu login para continuar os
					estudos!
				</p>
				<DefaultButton
					onClick={handleSubmit}
					type="button"
					variant="contained"
					fullWidth
				>
					Entrar com google
				</DefaultButton>
			</div>
		</div>
	);
};

export default Login;
