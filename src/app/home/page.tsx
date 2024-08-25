import { Container } from '@mui/material';

const Home = () => {
	return (
		<Container className="h-screen">
			<div className="flex flex-col gap-2 mt-5">
				<h1 className=" text-2xl font-bold">
					Bem vindo ao MegaCursos!
				</h1>
				<p className="">
					Aqui você irá encontrar os melhores cursos para desenvolver
					suas skills no mundo da tecnologia
				</p>
			</div>
			<section>
				<h2>Cursos mais acessados no momento</h2>
				{/* Adicione os cards dos cursos aqui */}
			</section>
			<section>
				<h2>Novidades no mercado</h2>
				{/* Adicione os cards das novidades aqui */}
			</section>
			<section>
				<h2>Melhores professores</h2>
				{/* Adicione os cards dos melhores professores aqui */}
			</section>
		</Container>
	);
};

export default Home;
