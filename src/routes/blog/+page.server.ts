import { CMS_POST_URL } from '../../constants';
import type { PageServerLoad } from './$types';

export const load =  (async () => {
    const response = await fetch(CMS_POST_URL);
    const status = response.status;
    let blogs = status === 200 ? await response.json() : null;

    if (blogs) {
        const sticky = blogs.filter((blog: any) => blog.sticky);
        const rest = blogs.filter((blog: any) => !blog.sticky);//.sort((a: any, b: any) => a.date.localeCompare(b.date));
        blogs = [...sticky, ...rest];
    }

    return {
        status: status,
        blogs: blogs,
    };
})satisfies PageServerLoad;