import { CMS_POSTS_URL } from '../../constants';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const url = CMS_POSTS_URL;
	const params = new URLSearchParams({
		_embed: 'true',
		order: 'desc',
		orderby: 'date'
	});
	const response = await fetch(`${url}?${params}`);
	const status = response.status;
	let blogs = status === 200 ? await response.json() : null;

	if (blogs) {
		const sticky = blogs.filter((blog: any) => blog.sticky);
		const rest = blogs.filter((blog: any) => !blog.sticky); //.sort((a: any, b: any) => a.date.localeCompare(b.date));
		blogs = [...sticky, ...rest];
	}

	return {
		status: status,
		blogs: blogs
	};
}) satisfies PageServerLoad;
