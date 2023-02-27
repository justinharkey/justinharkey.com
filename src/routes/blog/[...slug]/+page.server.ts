import { CMS_POST_URL } from '../../../constants';
import type { PageServerLoad } from './$types';

export const load =  (async ({params}) => {
    const slugArr = params.slug.split('/');
    const slug = slugArr[slugArr.length - 1];
    const response = await fetch(`${CMS_POST_URL}?slug=${slug}`);
    const status = response.status;
    let blog = status === 200 ? await response.json() : null;

    return {
        status: status,
        blog: blog[0],
    };
})satisfies PageServerLoad;