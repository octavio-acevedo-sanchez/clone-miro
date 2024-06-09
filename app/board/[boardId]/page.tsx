import { Canvas } from './_components/canvas';

interface BoardIdPageProps {
	params: {
		boardId: string;
	};
}
const BoardIdPage = ({ params }: BoardIdPageProps): React.ReactNode => {
	return <Canvas boardId={params.boardId} />;
};

export default BoardIdPage;
