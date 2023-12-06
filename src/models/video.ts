export interface IVideoThumbnailItem {
	url: string;
	width: number;
	height: number;
}

export interface IVideoThumbnails {
	default: IVideoThumbnailItem;
	medium: IVideoThumbnailItem;
	high: IVideoThumbnailItem;
	standard?: IVideoThumbnailItem | undefined;
	maxres?: IVideoThumbnailItem | undefined;
	test?: string;
}

export interface IYoutubeResponse {
	kind: 'youtube#playlistItem';
	etag: string;
	id: string;
	snippet: {
		publishedAt: Date;
		channelId: string;
		title: string;
		description: string;
		thumbnails: IVideoThumbnails;
		channelTitle: string;
		videoOwnerChannelTitle: string;
		videoOwnerChannelId: string;
		playlistId: string;
		position: number;
		resourceId: {
			kind: string;
			videoId: string;
		};
	};
	contentDetails: {
		videoId: string;
		startAt: string;
		endAt: string;
		note: string;
		videoPublishedAt: Date;
	};
	status: {
		privacyStatus: string;
	};
}

export interface IVideo {
	videoId: string;
	title: string;
	description: string;
	thumbnails: IVideoThumbnails;
}
