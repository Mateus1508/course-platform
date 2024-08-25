'use client';

import DefaultButton from '@/components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	return (
		<main className="flex min-h-screen flex-col gap-8 items-center p-24">
			<Image
				src="/logo-site.png"
				alt="logo-mega-news"
				width={200}
				height={200}
			/>
			<h1 className="text-3xl font-bold text-center text-blue-900">
				Bem-vindo à MegaCursos <br /> O Seu Portal para Aprender e
				Crescer!
			</h1>
			<p className="text-sm w-7/12 text-center">
				Na MegaCursos, acreditamos que o aprendizado é a chave para o
				sucesso e para um futuro promissor. Nossa missão é fornecer a
				você as ferramentas e o conhecimento necessários para alcançar
				seus objetivos, seja no âmbito pessoal ou profissional.
			</p>
			<div className="flex gap-4 items-center">
				<DefaultButton
					variant="contained"
					onClick={() => router.push('user/login')}
				>
					Fazer Login
				</DefaultButton>
				<span>Ou</span>
				<DefaultButton
					variant="outlined"
					onClick={() => router.push('user/register')}
				>
					Cadastre-se
				</DefaultButton>
			</div>
		</main>
	);
}

