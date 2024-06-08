'use client';

import { RenameModal } from '@/components/modals/rename-modal';
import { useState, useEffect } from 'react';

export const ModalProvider = (): React.ReactNode => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<>
			<RenameModal />
		</>
	);
};
