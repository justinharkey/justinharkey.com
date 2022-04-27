<script context="module">
	export const prerender = true;
	
	export async function load({ fetch }) {
		const res = await fetch(`/api`);

		if (res.ok) return { props: { videos: await res.json() } };
		return {
			status: res.status,
			error: new Error(`Could not load videos`)
		};
	}
</script>

<script lang="ts">
	import type { IVideo, IVideoThumbnails } from 'src/models/video';

	export let videos: IVideo[];
	let videoList: IVideo[];

	const getThumbnailUrl = (thumbnails: IVideoThumbnails) => {
		let url = thumbnails?.medium?.url || '';
		if (!url) {
			url = thumbnails?.default?.url;
		}
		if (!url) {
			url = '';
		}
		return url;
	};

	const getUpdatedVideoList = (searchString: string) => {
		let updatedVideos: IVideo[] = [];
		const lowercaseSearchString = searchString.toLowerCase();
		// we could use filter here or any other array operation besides a simple loop
		// but loop is the fastest so here we are
		for (let i = 0; i <= videos.length; i++) {
			if (videos[i]) {
				let videoSnippet = videos[i].snippet;
				// also originally had .includes() here but index of is like 5x faster so
				if (videoSnippet.title.toLowerCase().indexOf(lowercaseSearchString) !== -1 || videoSnippet.description.toLowerCase().indexOf(lowercaseSearchString) !== -1) {
					updatedVideos.push(videos[i]);
				}
			}
		}
		return updatedVideos;
	}

	let searchString: string = '';

	$: {
		videoList = searchString ? getUpdatedVideoList(searchString) : videos;
		console.log(searchString);
	}
</script>

<svelte:head>
	<title>Daily Videos | Justin Harkey</title>
</svelte:head>

<div class="home">
	<div class="search">
		<input class="search__input" type="text" bind:value={searchString} placeholder="Search videos" />
	</div>
	<div class="videos">
		{#each videoList as video}
			<a
				rel="external"
				href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
				style={`background-image: url(${getThumbnailUrl(video.snippet.thumbnails)})`}
				class="video"
				target="_blank"
			>
				
			</a>
		{/each}
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Work Sans', Arial, Helvetica, sans-serif;
		margin: 0;
		padding: 0;
	}
	.home {
		padding: 0;
	}

	.videos {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		margin: 0 1vw 1vw;
	}
	.search {
		width: calc(100% - 10px);
		margin: 5px;
		box-sizing: border-box;
	}
	.search__input {
		font: inherit;
		width: calc( 100% - 2vw );
		margin: 1vw;
		padding: 2vw 2vw;
		box-sizing: border-box;
		border-radius: 8px;
		border: 1px solid #dfdfdf;
		box-sizing: border-box;
	}

	.search__input:focus {
		box-shadow: 0 3px 10px rgba(0,0,0,0.16);
		color: #000;
	}

	.video {
		background-color: #000;
		aspect-ratio: 16/9;
		width: 100%;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: 50% 50%;
	}

	.video:hover {
		color: #0040b8;
	}

	/* @media (min-width: 600px) {
		.video {
			width: 50%;
			min-height: 25vw;
		}
		.video__title {
			font-size: 2vw;
			line-height: 2;
		}
	}

	@media (min-width: 768px) {
		.video {
			width: 33.33%;
			min-height: 20vw;
		}
		.video__title {
			font-size: 1.4vw;
			line-height: 1.4;
		}
	}

	@media (min-width: 1024px) {
		.video {
			width: 25%;
			min-height: 14vw;
		}
		.video__title {
			font-size: 1.2vw;
			line-height: 1.2;
		}
	} */

	/* @media (min-width: 1500px) {
		.video {
			width: 20%;
			height: 13vw;
		}
		.video__title {
			font-size: 1.2vw;
			line-height: 1.2;
		}
	} */
</style>
