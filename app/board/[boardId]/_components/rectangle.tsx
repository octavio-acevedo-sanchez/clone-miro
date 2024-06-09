import type { RectangleLayer } from '@/types/canvas';

interface RectangleProps {
	id: string;
	layer: RectangleLayer;
	onPointerDown: (e: React.PointerEvent, id: string) => void;
	selectionColor?: string;
}

export const Rectangle = ({
	id,
	layer,
	onPointerDown,
	selectionColor
}: RectangleProps): React.ReactNode => {
	const { x, y, width, height, fill } = layer;

	return (
		<rect
			className='drow-shadow-md'
			onPointerDown={e => onPointerDown(e, id)}
			style={{
				transform: `translate(${x}px, ${y}px)`
			}}
			x={0}
			y={0}
			width={width}
			height={height}
			strokeWidth={1}
			fill='#000'
			stroke='transparent'
		/>
	);
};
