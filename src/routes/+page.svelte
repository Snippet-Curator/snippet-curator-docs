<script>
	import Features from '$lib/components/home/features.svelte';
	import Footer from '$lib/components/home/footer.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import Nav from '$lib/components/home/nav.svelte';
</script>

<Nav />
<Hero />

<div class="relative mx-auto max-w-6xl">
	<img
		class="z-10 rounded-md shadow-[-1px_8px_38px_-2px_rgba(0,0,0,0.1)]"
		src="images/frontpage.png"
	/>
	<img
		class="absolute top-10 left-16 -z-10 rounded-md shadow-[-1px_8px_38px_-2px_rgba(0,0,0,0.1)]"
		src="images/frontpage-dark.png"
	/>
</div>

<Features />
<Footer />
