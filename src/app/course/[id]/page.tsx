import { Container } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Course = () => {
	const { id } = useParams();
	return (
		<Container className="flex flex-col">
			<h1>Course Page</h1>
			<p>id {id}.</p>
			<Link href="/">Go back to Home</Link>
		</Container>
	);
};

export default Course;
