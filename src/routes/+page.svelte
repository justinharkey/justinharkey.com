<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import type { IVideo, IVideoThumbnails } from '../models/video';

	export let data: { videos: IVideo[] };

	const getThumbnailUrl = (thumbnails: IVideoThumbnails) => {
		let url = thumbnails?.medium?.url || '';
		if (!url) {
			url = thumbnails?.default?.url;
		}
		if (!url) {
			url = '';
		}
		return url;

		// TODO: Inline all images
		// let response = await fetch(url);
		// let blob = await response.blob();
		// let buffer = Buffer.from(await blob.text());
		// let imageData = "data:" + blob.type + ';base64,' + buffer.toString('base64');
		// return imageData;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


	<h1>Videos</h1>

	<div id="videos">
		{#each data.videos as video}
		<a
			rel="external noreferrer"
			href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
			style={`background-image: url(${getThumbnailUrl(video.snippet.thumbnails)})`}
			class="video"
			target="_blank"
		>
		</a>
		{/each}
	</div>

<style>
	h1 {
		width: 100%;
		padding: 1rem;
		border: 1px solid #bbb;
		border-width: 0 1px;
		background: rgba(211, 211, 211, 0.4);
		box-sizing: border-box;
		margin: 0;
	}

	#videos {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		padding: 1rem;
		border: 1px solid #f80;
		border-width: 0 1px;
		background: rgba(255,255,255,0.3);
	}

	#videos a {
		background-color: #000;
		aspect-ratio: 16/9;
		width: 100%;
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		transition: background 200ms ease-in-out;
	}

	#videos a:hover {
		background-size: 105%;
		transition: background 200ms ease-in-out;
	}
</style>
