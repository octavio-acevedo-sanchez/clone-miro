import React from 'react';

export const Overlay = (): React.ReactNode => {
	return (
		<div className='opacity-0 group-hover:opacity-50 transition-opacity h-full w-full bg-black' />
	);
};
