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
</script>

<svelte:head>
	<title>Justin Harkey - Daily Videos</title>
</svelte:head>

<div class="home">
	{#each videos as video}
		<a
			rel="external"
			target="_blank"
			href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
			class="video"
			style={`background-image: url(${getThumbnailUrl(video.snippet.thumbnails)})`}
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
	}
	.video {
		width: 50%;
		height: 29vw;
		background-size: auto 100%;
		background-position: center center;
		background-repeat: no-repeat;
		display: block;
		position: relative;
		text-decoration: none;
		color: #fff;
		transition: background 200ms ease-in-out;
	}

	.video:hover {
		background-size: auto 110%;
	}
	.video__title {
		font-size: 2.4vw;
		line-height: 2.4;
		font-weight: bold;
		position: absolute;
		bottom: 0;
		right: 0;
		text-align: right;
		background: #000;
		padding: 0.4vw 0.8vw;
		transition: background 200ms ease-in-out, color 200ms ease-in-out;
	}

	.video:hover .video__title {
		background: #fff;
		color: #000;
	}

	@media (min-width: 600px) {
		.video {
			width: 33.33%;
			height: 20vw;
		}
		.video__title {
			font-size: 1.8vw;
			line-height: 1.8;
		}
	}

	@media (min-width: 1024px) {
		.video {
			width: 25%;
			height: 16vw;
		}
		.video__title {
			font-size: 1.4vw;
			line-height: 1.4;
		}
	}

	@media (min-width: 1500px) {
		.video {
			width: 20%;
			height: 13vw;
		}
		.video__title {
			font-size: 1.2vw;
			line-height: 1.2;
		}
	}
</style>
