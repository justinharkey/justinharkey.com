<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`/api`);

		if (res.ok)
			return {
				// props: { video: await res.json().filter((video) => video.id === page.params.videoId) }
				props: { videos: await res.json(), videoId: page.params.videoId }
			};

		return {
			status: res.status,
			error: new Error(`Could not load video`)
		};
	}
</script>

<script lang="ts">
	import type { IVideo } from 'src/models/video';

	export let videos: IVideo[];
	export let videoId: string;

	const video: IVideo = videos.filter((video) => video.snippet.resourceId.videoId === videoId)[0];
</script>

<iframe
	id="video"
	type="text/html"
	width="640"
	height="360"
	src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?autoplay=0&origin=http://justinharkey.com&modestbranding=1`}
	frameborder="0"
	title={video.snippet.title}
/>

<h1>{video.snippet.title}</h1>

<p>{video.snippet.description}</p>
