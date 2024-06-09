'use client';

import { RoomProvider } from '@/liveblocks.config';
import type { Layer } from '@/types/canvas';
import { LiveList, LiveMap, type LiveObject } from '@liveblocks/client';
import { ClientSideSuspense } from '@liveblocks/react';

interface RoomProps {
	children: React.ReactNode;
	roomId: string;
	fallback: NonNullable<React.ReactNode> | null;
}

export const Room = ({
	children,
	roomId,
	fallback
}: RoomProps): React.ReactNode => {
	return (
		<RoomProvider
			id={roomId}
			initialPresence={{ cursor: null, selection: [] }}
			initialStorage={{
				layers: new LiveMap<string, LiveObject<Layer>>(),
				layerIds: new LiveList()
			}}
		>
			<ClientSideSuspense fallback={fallback}>
				{() => children}
			</ClientSideSuspense>
		</RoomProvider>
	);
};
