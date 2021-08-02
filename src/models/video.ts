export interface IVideoThumbnails {
    url: string,
    width: number,
    height: number
}

export interface IVideo {
    kind: "youtube#playlistItem",
    etag: string,
    id: string,
    snippet: {
        publishedAt: Date,
        channelId: string,
        title: string,
        description: string,
        thumbnails: any,
        //   thumbnails: {
        //     (key): IVideoThumbnails
        //   },
        channelTitle: string,
        videoOwnerChannelTitle: string,
        videoOwnerChannelId: string,
        playlistId: string,
        position: number,
        resourceId: {
            kind: string,
            videoId: string,
        }
    },
    contentDetails: {
        videoId: string,
        startAt: string,
        endAt: string,
        note: string,
        videoPublishedAt: Date
    },
    status: {
        privacyStatus: string
    }
}