<script lang="ts">
	import type { IVideoThumbnails, IVideo } from '../models/video';

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
			href={`https://www.youtube.com/watch?v=${video.videoId}`}
			style={`background-image: url(${getThumbnailUrl(video.thumbnails)})`}
			class="video"
			target="_blank"
		>
		</a>
		{/each}
	</div>

<style>
	#videos {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		padding: 1rem;
		border-width: 0 1px;
	}

	#videos a {
		background-color: #000;
		aspect-ratio: 16/9;
		width: 100%;
		background-size: 120%;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		transition: all 200ms ease-in-out;
		opacity: 0.9;
		clip-path: polygon(1% 0, 100% 0%, 99% 100%, 0% 100%);
	}

	#videos a:hover {
		background-size: 100%;
		transition: all 200ms ease-in-out;
		opacity: 1;
		clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
	}
</style>
