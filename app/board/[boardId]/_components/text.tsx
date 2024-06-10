import { cn, colorToCss } from '@/lib/utils';
import { Kalam } from 'next/font/google';
import ContentEditable, {
	type ContentEditableEvent
} from 'react-contenteditable';
import type { TextLayer } from '@/types/canvas';
import { useMutation } from '@/liveblocks.config';

const font = Kalam({
	subsets: ['latin'],
	weight: ['400']
});

const calculateFontSize = (width: number, height: number): number => {
	const maxFontSize = 96;
	const scaleFactor = 0.5;
	const fontSizeBaseOnHeight = height * scaleFactor;
	const fontSizeBaseOnWidth = width * scaleFactor;

	return Math.min(fontSizeBaseOnHeight, fontSizeBaseOnWidth, maxFontSize);
};

interface TextProps {
	id: string;
	layer: TextLayer;
	onPointerDown: (e: React.PointerEvent, id: string) => void;
	selectionColor?: string;
}

export const Text = ({
	id,
	layer,
	onPointerDown,
	selectionColor
}: TextProps): React.ReactNode => {
	const { x, y, height, width, fill, value } = layer;

	const updateValue = useMutation(({ storage }, newValue: string) => {
		const liveLayers = storage.get('layers');

		liveLayers.get(id)?.set('value', newValue);
	}, []);

	const handleContentChange = (e: ContentEditableEvent): void => {
		updateValue(e.target.value);
	};

	return (
		<foreignObject
			x={x}
			y={y}
			width={width}
			height={height}
			onPointerDown={e => onPointerDown(e, id)}
			style={{
				outline: selectionColor ? `1px solid ${selectionColor}` : 'none'
			}}
		>
			<ContentEditable
				html={value ?? 'Text'}
				onChange={handleContentChange}
				className={cn(
					'h-full w-full flex items-center justify-center text-center drop-shadow-md outline-none',
					font.className
				)}
				style={{
					color: fill ? colorToCss(fill) : '#000',
					fontSize: calculateFontSize(width, height)
				}}
			/>
		</foreignObject>
	);
};
