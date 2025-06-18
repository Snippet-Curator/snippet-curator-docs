<script lang="ts">
	import { navItems, siteConfig } from '$lib/config';
</script>

<header class="bg-base-200/40 border-b-base-200/40 sticky top-0 z-50 w-full border-b">
	<nav class="relative mx-auto flex w-full">
		<!-- Logo w/ Collapse Button -->
		<div class="flex items-center justify-between">
			<a href="/">
				<img src={siteConfig.logo} alt={siteConfig.title} class="h-6 dark:hidden" />
				<img src={siteConfig.logoDark} alt={siteConfig.title} class="hidden h-6 dark:block" />
			</a>
		</div>

		<div class="grow"></div>

		<!-- Nav Links -->
		<div class="overflow-hidden">
			<div class="flex">
				{#each navItems as item}
					<button>
						{#if item.icon}
							<item.icon />
						{/if}
						<a href={item.href}>{item.title}</a>
					</button>
				{/each}
			</div>
		</div>
		<!-- End Nav Links -->
	</nav>
</header>
