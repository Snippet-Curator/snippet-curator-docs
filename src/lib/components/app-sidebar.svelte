<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { siteConfig } from '$lib/config';
	import GalleryVerticalEnd from 'lucide-svelte/icons/gallery-vertical-end';
	import type { ComponentProps } from 'svelte';
	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
	import { docsNavigation } from '$lib/components/doc-navigation.svelte';
	import { page } from '$app/state';
	const path = $derived(page.url.pathname);
</script>

<Sidebar.Root bind:ref {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="/" {...props}>
							<div
								class=" text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center"
							>
								<!-- <GalleryVerticalEnd class="size-4" /> -->
								<img src="/favicon.svg" alt="" />
							</div>
							<div class="flex flex-col gap-0.5 leading-none">
								<span class="font-semibold"> {siteConfig.title} </span>
								<span class="">{siteConfig.version}</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.Menu>
				{#each docsNavigation.docNav as groupItem (groupItem.title)}
					<Sidebar.MenuItem>
						<Sidebar.MenuButton class="font-medium" isActive={path === groupItem.href}>
							{#snippet child({ props })}
								<a href={groupItem.href} {...props}>
									{groupItem.title}
								</a>
							{/snippet}
						</Sidebar.MenuButton>
						{#if groupItem.items?.length}
							<Sidebar.MenuSub>
								{#each groupItem.items as item (item.title)}
									<Sidebar.MenuSubItem>
										<Sidebar.MenuSubButton isActive={path === item.href}>
											{#snippet child({ props })}
												<a href={item.href} {...props}>{item.title}</a>
											{/snippet}
										</Sidebar.MenuSubButton>
									</Sidebar.MenuSubItem>
								{/each}
							</Sidebar.MenuSub>
						{/if}
					</Sidebar.MenuItem>
				{/each}
			</Sidebar.Menu>
		</Sidebar.Group>
	</Sidebar.Content>
	<div class="block sm:hidden">
		<Sidebar.Footer></Sidebar.Footer>
	</div>

	<Sidebar.Rail />
</Sidebar.Root>
