import { UserButton } from '@clerk/nextjs';

export default function Home(): React.ReactNode {
	return (
		<div className='flex flex-col gap-y-4'>
			<div>This is a</div>
			<div>
				<UserButton />
			</div>
		</div>
	);
}
