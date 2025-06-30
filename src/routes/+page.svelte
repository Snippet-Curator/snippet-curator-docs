<script lang="ts">
	import {
		Features,
		Hero,
		Nav,
		Organize,
		Shortcuts,
		Viewer,
		Paginate,
		Discover,
		Download,
		VViewer
	} from '$lib/index';
	import Footer from '$lib/components/home/footer.svelte';
	import { onMount, type Component } from 'svelte';

	let features = [
		{
			name: 'Organize',
			component: Organize,
			title: 'Organize with Notebooks and Tags',
			description: 'Organize with notebooks and tags.'
		},
		{
			name: 'Discover',
			component: Discover,
			title: 'Discover',
			description: 'Control how you want to resurface notes based on different criteria.'
		},

		{
			name: 'Image Viewer',
			title: 'Image Viewer',
			component: Viewer,
			description: 'See images in fullscreen.'
		},

		{
			name: 'Video Viewer',
			component: VViewer,
			title: 'Video Viewer',
			description: 'Save your favorite memes and cat videos'
		},

		{
			name: 'Keyboard Shortcuts',
			title: 'Keyboard Shortcuts',
			component: Shortcuts,
			description: 'Navigate, rate, and edit notes faster.'
		},
		{
			name: 'Pages',
			component: Paginate,
			title: 'Navigate with Pages',
			description: 'I just think this is better than infinite scroll.'
		}
	] as const;

	type Feature = (typeof features)[number];

	let selectedFeature = $state<Feature>(features[0]);
	let currentIndex = $state(0);
	let interval: ReturnType<typeof setInterval>;

	function scrollTimer() {
		clearInterval(interval);
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % features.length;
			selectedFeature = features[currentIndex];
		}, 7000);
	}

	onMount(() => scrollTimer());
</script>

<!-- <Nav /> -->
<Hero />
<Features />

{#snippet renderFeature(name: string, component: Component)}
	{@const Component = component}
	<Component />
{/snippet}

<section class="mt-10 min-h-100 md:pt-16">
	<h2 class="mb-4 text-center text-xl font-bold md:mb-10 md:text-2xl lg:text-3xl">
		Other Features
	</h2>
	<div
		class="md:gap-golden-lg gap-golden-md items-place-center px-golden-md mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
	>
		{#each features as feature, index}
			<button
				onclick={() => {
					selectedFeature = feature;
					currentIndex = index;
					scrollTimer();
				}}
				class="{selectedFeature.name == feature.name
					? 'btn-soft'
					: 'btn-ghost'} btn btn-sm md:btn-lg lg:btn-xl text-nowrap">{feature.name}</button
			>
		{/each}
	</div>

	<div class="px-golden-lg mx-auto mt-10 mb-0 max-w-6xl">
		<!-- <h2 class="text-left text-lg font-bold md:text-xl lg:text-2xl">
			{selectedFeature.title}
		</h2> -->
		<div class="flex flex-col text-lg md:text-xl">
			<p>{selectedFeature.description}</p>
		</div>
	</div>

	{@render renderFeature(selectedFeature.name, selectedFeature.component)}
</section>

<Download />

<Footer />
