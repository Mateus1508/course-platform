'use client';

import DefaultButton from '@/components/DefaultButton';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	return (
		<main className="flex min-h-screen flex-col gap-8 items-center justify-center p-24 bg-[url('/bg.jpg')] bg-cover bg-center">
			<Typography variant="h1" className="font-bold text-blue-800">
				MegaCursos
			</Typography>
			<h1 className="text-3xl font-bold text-center text-blue-900">
				Seja bem vindo ao seu Portal para Aprender e Crescer
				profissionamente!
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
			</div>
		</main>
	);
}

