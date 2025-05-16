<script>
	import { navItems, siteConfig } from '$lib/config';
</script>

<footer class="mx-auto mt-auto w-full max-w-340 px-4 py-10 sm:px-6 lg:px-8">
	<div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
		<div>
			<a href="/">
				<img src={siteConfig.logo} alt={siteConfig.title} class="h-6 dark:hidden" />
				<img src={siteConfig.logoDark} alt={siteConfig.title} class="hidden h-6 dark:block" />
			</a>
		</div>

		<ul class="text-center"></ul>
	</div>
</footer>
