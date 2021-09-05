<script context="module">
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

	let searchString: string = '';

	$: {
		videoList = searchString ? videos.filter((video) => video.snippet.title.toLowerCase().includes(searchString) || video.snippet.description.toLowerCase().includes(searchString) ) : videos;
	}
</script>

<svelte:head>
	<title>Justin Harkey - Daily Videos</title>
</svelte:head>

<div class="home">
	<div class="search">
		<input class="search__input" type="text" bind:value={searchString} placeholder="Search videos" />
	</div>
	{#each videoList as video}
		<a
			rel="external"
			href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
			class="video"
			style={`background-image: url(${getThumbnailUrl(video.snippet.thumbnails)})`}
			target="_blank"
		>
			<span class="video__title">
				{video.snippet.title}
			</span>
		</a>
	{/each}
</div>

<style>
	:global(body) {
		font-family: Arial, Helvetica, sans-serif;
		margin: 0;
		padding: 0;
	}
	.home {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		padding: 0;
	}
	.search {
		width: calc(100% - 10px);
		margin: 5px;
		box-sizing: border-box;
	}
	.search__input {
		font: inherit;
		width: 100%;
		margin: 0;
		padding: 5px;
		box-sizing: border-box;
	}
	#latest {
		width: 90vw;
		height: 50.625vw;
		border-radius: 10px;
		margin: 5vw;
	}
	.video {
		width: 100%;
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
		display: block;
		position: relative;
		text-decoration: none;
		color: #fff;
		margin: 0;
		min-height: 40vw;
		padding: 0;
		box-sizing: border-box;
		z-index: 1;
	}
	/* .video::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		background: url('/imageOverlay.png') top left repeat;
		z-index: -1;
	} */

	.video__title {
		font-size: 4vw;
		font-weight: bold;
		background: #000;
		color: #fff;
		line-height: 2;
		padding: 0.2vw 2vw;
		transition: background 200ms ease-in-out, color 200ms ease-in-out;
		display: inline-block;
	}
	.video:hover .video__title {
		background: #fff;
		color: #000;
	}

	@media (min-width: 600px) {
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
	}

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
