<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
</script>

<div class="relative overflow-hidden">
	<div class="relative mx-auto max-w-340 px-4 pt-24 pb-10 sm:px-6 lg:px-8">
		<!-- Title -->
		<div class="mx-auto mt-5 max-w-2xl text-center">
			<h1
				class="block text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-neutral-200"
			>
				Recollect
			</h1>
		</div>

		<!-- Description -->
		<div class="mx-auto mt-5 max-w-3xl text-center">
			<p class="text-lg">Organize and re-discover your internet saves.</p>
		</div>

		<!-- Action Buttons -->
		<div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
			<button class="btn">
				<a href="/docs">Get Started</a><ChevronRight size={18} />
			</button>
		</div>
	</div>
</div>
