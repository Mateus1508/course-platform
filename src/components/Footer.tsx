'use client';

import { Typography } from '@mui/material';
import { usePathname } from 'next/navigation';

const Footer = () => {
	const pathname = usePathname();

	const shouldHideFooter =
		pathname === '/user/login' ||
		pathname === '/user/register' ||
		pathname === '/';

	return (
		!shouldHideFooter && (
			<div className="w-full py-4 px-2 bg-blue-800 text-center ">
				<Typography className="text-white">
					Developed by Mateus
				</Typography>
			</div>
		)
	);
};

export default Footer;
