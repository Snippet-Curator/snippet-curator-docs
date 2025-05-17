<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
</script>

<div class="mx-auto max-w-6xl pt-20 pb-10 md:h-screen">
	<!-- Title -->
	<h1 class="m-golden-lg block text-center text-4xl font-bold md:text-5xl lg:text-6xl">
		Recollect
	</h1>

	<!-- Description -->
	<div class="m-golden-lg mx-auto max-w-3xl text-center">
		<p class="m-golden-md text-lg">Organize and re-discover your internet saves.</p>
		<button class="btn btn-primary mx-auto">
			<a href="/docs">Get Started</a><ChevronRight size={18} />
		</button>
	</div>
	<!-- Image -->
	<div class="m-golden-xl relative mt-10">
		<img class="hidden rounded-md shadow-xl dark:block" src="images/frontpage.png" />
		<img class="rounded-md shadow-xl dark:hidden" src="images/frontpage-dark.png" />
	</div>
</div>
