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
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


	<h1>Videos</h1>

	{#each data.videos as video}
	<a
		rel="external noreferrer"
		href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
		style={`background-image: url(${getThumbnailUrl(video.snippet.thumbnails)});width:100px; height: 100px; float: left`}
		class="video"
		target="_blank"
	>
		
	</a>
{/each}


<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
