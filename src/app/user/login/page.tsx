'use client';

import DefaultButton from '@/components/DefaultButton';
import { useRouter } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
	const router = useRouter();
	const handleSubmit = () => {
		router.push(`/api/auth`);
	};
	return (
		<div className="flex min-h-screen flex-col gap-8 items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center">
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
					<FaGoogle size={24} />
					<span>Entrar com google</span>
				</DefaultButton>
			</div>
		</div>
	);
};

export default Login;
