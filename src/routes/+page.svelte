<script lang="ts">
	import {
		Features,
		Hero,
		Nav,
		Organize,
		Shortcuts,
		Viewer,
		Paginate,
		Search,
		Download
	} from '$lib/index';
	import Footer from '$lib/components/home/footer.svelte';
	import type { Component } from 'svelte';

	let features = [
		{
			name: 'Organize',
			component: Organize,
			title: 'Organize with Notebooks and Tags',
			description: 'And nested notebooks and tags.'
		},

		{
			name: 'Image Viewer',
			title: 'Image Viewer',
			component: Viewer,
			description: 'See Images in Fullscreen.'
		},
		{
			name: 'Search',
			component: Search,
			title: 'Full Text Search',
			description: 'Notes are loaded in a near instant.'
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

	setInterval(() => {
		currentIndex = (currentIndex + 1) % features.length;
		selectedFeature = features[currentIndex];
	}, 7000);
</script>

<!-- <Nav /> -->
<Hero />
<Features />

{#snippet renderFeature(name: string, component: Component)}
	{@const Component = component}
	<Component />
{/snippet}

<section class="mt-10 md:pt-16">
	<div
		class="md:gap-golden-lg gap-golden-md lg:gap-golden-xl mx-auto flex w-full max-w-6xl justify-center"
	>
		{#each features as feature, index}
			<button
				onclick={() => {
					selectedFeature = feature;
					currentIndex = index;
				}}
				class="{selectedFeature.name == feature.name
					? 'btn-soft'
					: 'btn-ghost'} btn btn-sm md:btn-lg lg:btn-xl">{feature.name}</button
			>
		{/each}
	</div>

	<div class="px-golden-lg mx-auto mt-10 mb-0 max-w-6xl">
		<h2 class="text-left text-xl font-bold md:text-2xl lg:text-3xl">
			{selectedFeature.title}
		</h2>
		<div class="flex flex-col text-lg md:text-xl">
			<p>{selectedFeature.description}</p>
		</div>
	</div>

	{@render renderFeature(selectedFeature.name, selectedFeature.component)}
</section>

<Download />

<Footer />
