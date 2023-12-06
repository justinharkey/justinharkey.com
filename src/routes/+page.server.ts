import { API_KEY_YOUTUBE } from '../constants';
import type { IYoutubeResponse, IVideo } from '../models/video';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	let morePagesAvailable = true;
	let nextPage = '';
	const videos: IVideo[] = [];

	while (morePagesAvailable) {
		const response = await fetch(
			`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLgZU13QtpzkvvyraXfdtKm1AY0ofsDvGD&key=${API_KEY_YOUTUBE}${
				nextPage ? `&pageToken=${nextPage}` : ''
			}`,
			{
				method: 'GET'
			}
		);
		const data = await response.json();
		if (response.status === 200) {
			data.items.forEach((item: IYoutubeResponse) => {
				if (
					item.snippet.videoOwnerChannelTitle === 'ShustOne' &&
					item.snippet.title !== 'Deleted video'
				) {
					videos.push({
						videoId: item.snippet.resourceId.videoId,
						title: item.snippet.title,
						description: item.snippet.description,
						thumbnails: item.snippet.thumbnails
					});
				}
			});
			nextPage = data.nextPageToken;
			morePagesAvailable = data.nextPageToken;
			console.log('Getting next video page');
		} else {
			morePagesAvailable = false;
			console.log('Aborting');
		}
	}

	console.log('Video fetch complete');

	return {
		videos: videos
	};
}) satisfies PageServerLoad;
