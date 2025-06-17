<script lang="ts">
	import { page } from '$app/state';
	import { TableOfContents } from './toc.svelte.js';

	let toc = $state(TableOfContents.getInstance());
</script>

<div>
	<ul class="menu">
		{#each toc.headings as heading}
			<li class="mt-1">
				<a
					style="margin-left: {(heading.level - 1) * 1}rem"
					class="{page.url.hash === '#' + heading.id ? 'bg-base-200' : ''} w-full"
					href="#{heading.id}"
					>{heading.text}
				</a>
			</li>
		{/each}
	</ul>
</div>
