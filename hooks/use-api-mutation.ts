import { useState } from 'react';
import { useMutation } from 'convex/react';

export const useApiMutation = (mutationFunction: any): any => {
	const [pending, setPending] = useState(false);
	const apiMutation = useMutation(mutationFunction);

	const mutate = (payload: any): any => {
		setPending(true);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		return apiMutation(payload)
			.finally(() => {
				setPending(false);
			})
			.then(result => {
				return result;
			})
			.catch(error => {
				throw error;
			});
	};

	return { mutate, pending };
};
