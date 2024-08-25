import { Button, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
	children: React.ReactNode;
}

const DefaultButton = ({ children, ...props }: Props) => {
	return (
		<Button
			{...props}
			className={`${
				props.variant === 'contained'
					? 'bg-blue-800 hover:bg-blue-600'
					: 'border-blue-800 hover:border-blue-600 hover:text-blue-500'
			} min-w-40`}
			size="large"
		>
			{children}
		</Button>
	);
};

export default DefaultButton;
