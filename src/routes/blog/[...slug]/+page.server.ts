import { CMS_POSTS_URL } from '../../../constants';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const formattedSlug = params.slug.replace(/\/$/, '');
	const slugArr = formattedSlug.split('/');
	const slug = slugArr[slugArr.length - 1];

	const paramsObj = new URLSearchParams({
		_embed: 'true',
		slug: slug
	});

	const response = await fetch(`${CMS_POSTS_URL}?${paramsObj}`);
	const status = await response.status;
	const blog = status === 200 ? await response.json() : null;

	console.log(blog);

	return {
		status: status,
		blog: blog[0]
	};
}) satisfies PageServerLoad;
