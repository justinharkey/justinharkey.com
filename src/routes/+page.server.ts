import { API_KEY_YOUTUBE } from '../constants';
import type { IVideo } from '../models/video';
import type { PageServerLoad } from './$types';

export const load =  (async () => {
    const allData: any[] = [];
    let morePagesAvailable = true;
    let nextPage = '';
    const videos: IVideo[] = [];

    while (morePagesAvailable) {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLgZU13QtpzkvvyraXfdtKm1AY0ofsDvGD&key=${API_KEY_YOUTUBE}${nextPage ? `&pageToken=${nextPage}` : ''}`, {
            method: 'GET',
        })
        const data = await response.json();
        data.items.forEach((e: any) => allData.push(e));
        nextPage = data.nextPageToken;
        morePagesAvailable = data.nextPageToken;
        console.log('Getting next video page');
    }

    allData.forEach((item: IVideo) => {
        if (item.snippet.videoOwnerChannelTitle === 'ShustOne' && item.snippet.title !== 'Deleted video') {
            videos.push(item);
        }
    });

    console.log('Video fetch complete');

    return {
        videos: videos
    };

}) satisfies PageServerLoad;