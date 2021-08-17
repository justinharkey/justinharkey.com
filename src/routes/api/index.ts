import type { IVideo } from 'src/models/video';
import { API_KEY_YOUTUBE } from '../../constants';

async function fetchVideos() {
    const allData = [];
    let morePagesAvailable = true;
    let nextPage = '';
    const videos: IVideo[] = [];

    while (morePagesAvailable) {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLgZU13QtpzkvvyraXfdtKm1AY0ofsDvGD&key=${API_KEY_YOUTUBE}${nextPage ? `&pageToken=${nextPage}` : ''}`, {
            method: 'GET',
        })
        const data = await response.json();
        data.items.forEach(e => allData.push(e));
        nextPage = data.nextPageToken;
        morePagesAvailable = data.nextPageToken;
        console.log('Getting next video page')
    }

    allData.forEach((item: IVideo) => {
        if (item.snippet.videoOwnerChannelTitle === 'ShustOne' && item.snippet.title !== 'Deleted video') {
            videos.push(item);
        }
    });

    console.log('Video fetch complete')

    return videos;
}

export async function get(): Promise<{
    body: IVideo[];
}> {
    return {
        body: await fetchVideos()
    }
}