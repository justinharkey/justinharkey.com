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
			href={`./video/${video.snippet.resourceId.videoId}`}
			class="video"
			style={`background-image: url(${getThumbnailUrl(video.snippet.thumbnails)})`}
		>
			<span class="video__title">
				{video.snippet.title}
			</span>
			<br />
			<span class="video__description">
				{video.snippet.description}
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
		padding: 3vw 0;
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
		margin: 2vw 5vw;
		min-height: 30vw;
		padding: 3vw;
		box-sizing: border-box;
	}

	.video__title,
	.video__description {
		font-size: 2.8vw;
		line-height: 2;
		font-weight: normal;
		background: rgba(0, 0, 0, 0.7);
		padding: 0.6vw 1vw;
		transition: background 200ms ease-in-out, color 200ms ease-in-out;
	}
	.video__title {
		font-size: 4vw;
		font-weight: bold;
		background: #fff;
		color: #000;
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
