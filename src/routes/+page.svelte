<script lang="ts">
	import { Features, Hero, Nav, Organize, Shortcuts, Viewer, Paginate, Search } from '$lib/index';
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
			name: 'Keyboard Shortcuts',
			title: 'Keyboard Shortcuts',
			component: Shortcuts,
			description: 'Navigate, rate, and edit notes faster'
		},
		{
			name: 'Image Viewer',
			title: 'See Images in Fullscreen',
			component: Viewer,
			description: ''
		},
		{
			name: 'Pages',
			component: Paginate,
			title: 'Navigate with Pages',
			description: 'I just think this is better than infinite scroll.'
		},
		{
			name: 'Search',
			component: Search,
			title: 'Full Text Search',
			description: 'Notes are loaded in a near instant.'
		}
	] as const;

	type Feature = (typeof features)[number];

	let selectedFeature = $state<Feature>(features[0]);
</script>

<Nav />
<Hero />
<Features />

<div
	class="m-golden-xl md:gap-golden-lg gap-golden-md lg:gap-golden-xl mx-auto mt-10 flex w-full max-w-6xl justify-center"
>
	{#each features as feature}
		<button
			onclick={() => (selectedFeature = feature)}
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
		<p class="">{selectedFeature.description}</p>
	</div>
</div>

{#snippet renderFeature(name: string, component: any)}
	{@const Component = component}
	<div class="min-h-[500px]">
		<Component />
	</div>
{/snippet}

{@render renderFeature(selectedFeature.name, selectedFeature.component)}

<Footer />
