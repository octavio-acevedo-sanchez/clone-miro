'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useOrganization } from '@clerk/nextjs';
import { api } from '@/convex/_generated/api';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { toast } from 'sonner';

export const EmptyBoards = (): React.ReactNode => {
	const { organization } = useOrganization();
	const { mutate, pending } = useApiMutation(api.board.create);

	const onClick = (): void => {
		if (!organization) return;

		void mutate({
			orgId: organization.id,
			title: 'Untitled'
		})
			.then(id => {
				console.log(id);
				toast.success('Board created');
			})
			.catch(() => toast.error('Failded to create board'));
	};

	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<Image src='/notes.png' alt='Empty' height={150} width={150} />
			<h2 className='text-2xl font-semibold mt-6'>Create your first board!</h2>
			<p className='text-muted-foreground text-sm mt-2'>
				Start by creating a board for you organization
			</p>
			<div className='mt-6'>
				<Button disabled={pending} size='lg' onClick={onClick}>
					Create board
				</Button>
			</div>
		</div>
	);
};
