'use client';

import { type ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import qs from 'query-string';
import { useDebounceValue } from 'usehooks-ts';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const SearchInput = (): React.ReactNode => {
	const router = useRouter();
	const [value, setValue] = useState('');
	const [deboucedValue] = useDebounceValue(value, 500);

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	};

	useEffect(() => {
		const url = qs.stringifyUrl(
			{
				url: '/',
				query: {
					search: deboucedValue
				}
			},
			{ skipEmptyString: true, skipNull: true }
		);

		router.push(url);
	}, [deboucedValue, router]);

	return (
		<div className='w-full relative'>
			<Search className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
			<Input
				className='w-full max-w-[516px] pl-9'
				placeholder='Search boards'
				onChange={handleChange}
				value={value}
			/>
		</div>
	);
};
