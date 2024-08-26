'use client';

import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Menu,
	MenuItem,
	Avatar,
	Link,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import useAuthStore from '@/store/authStore';
import { GoHome } from 'react-icons/go';

const Navigation = () => {
	const router = useRouter();
	const pathname = usePathname();
	const { clearToken } = useAuthStore.getState();

	const shouldHideAppBar =
		pathname === '/user/login' ||
		pathname === '/user/register' ||
		pathname === '/';

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		clearToken();
		router.push('/');
	};

	return (
		!shouldHideAppBar && (
			<AppBar position="static" className="bg-blue-800">
				<Toolbar>
					<Typography variant="h5">MegaCursos</Typography>
					{pathname !== '/home' && (
						<Link
							href="/home"
							className="flex items-center ml-9"
							color="inherit"
							underline="none"
						>
							<GoHome size={32} />
						</Link>
					)}
					<div style={{ flexGrow: 1 }} />
					<IconButton onClick={handleClick} color="inherit">
						<Avatar />
					</IconButton>
					<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(open)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Perfil</MenuItem>
						<MenuItem onClick={handleClose}>Configurações</MenuItem>
						<MenuItem onClick={handleLogout}>Sair</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		)
	);
};

export default Navigation;
