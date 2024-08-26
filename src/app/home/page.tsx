'use client';

import { useGetChannels } from '@/hooks/useGetChannels';
import { useSearchPlaylists } from '@/hooks/useSearchPlaylists';
import Carousel from '@/components/Carousel';
import { Container } from '@mui/material';
import CarouselSection from '@/components/CarouselSection';

const Home = () => {
	const { data: topProgramming, isLoading: loadingTopProgramming } =
		useSearchPlaylists('curso de programação', 'viewCount');
	const { data: recentProgramming, isLoading: loadingRecentProgramming } =
		useSearchPlaylists('curso de programação', 'date');
	const { data: topChannels, isLoading: loadingTopChannels } = useGetChannels(
		'programação',
		'viewCount'
	);

	return (
		<Container className="flex flex-col min-h-screen h-full gap-6 pb-48">
			<div className="flex flex-col gap-2 mt-5">
				<h1 className="text-2xl font-bold">Bem-vindo ao MegaCursos!</h1>
				<p>
					Aqui você encontrará os melhores cursos para desenvolver
					suas skills no mundo da tecnologia.
				</p>
			</div>

			<CarouselSection
				title="Cursos mais acessados no momento"
				items={topProgramming}
				loading={loadingTopProgramming}
			/>

			<CarouselSection
				title="Novidades no mercado"
				items={recentProgramming}
				loading={loadingRecentProgramming}
			/>

			<CarouselSection
				title="Melhores professores"
				items={topChannels}
				loading={loadingTopChannels}
			/>
		</Container>
	);
};

export default Home;
