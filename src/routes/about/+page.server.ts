import { CMS_PAGE_URL } from '../../constants';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = await fetch(`${CMS_PAGE_URL}?slug=about`);
	const status = response.status;
	const page = status === 200 ? await response.json() : null;

	return {
		status: status,
		page: page[0]
	};
}) satisfies PageServerLoad;
