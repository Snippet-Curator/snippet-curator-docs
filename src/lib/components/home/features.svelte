<script>
	import { ChevronRight } from 'lucide-svelte';
</script>

<section class="bg-base-200 p-golden-lg py-10 text-pretty">
	<!-- Import -->

	<div class="mx-auto max-w-6xl">
		<div class="min-h-[450px]">
			<!-- Start Import -->
			<div class="gap-x-golden-md grid grid-cols-12 items-start">
				<h2
					class="my-golden-md col-span-12 text-center text-xl font-bold md:col-span-8 md:mb-4 md:text-left md:text-2xl lg:text-3xl"
				>
					Your Personal Pinterest, Instagram Save, or Bookmark Collection
				</h2>
				<div
					class="col-span-12 flex flex-col px-12 text-lg md:col-span-5 md:px-0 md:py-12 md:text-xl"
				>
					<p class="">
						Add Evernote ENEX, SingleFile HTML, Images, Videos, Audio files, and PDFs. Files are
						kept private and offline.
					</p>
					<div class="mx-auto mt-4 md:ml-0">
						<button class="btn btn-neutral"
							>See How Imports Work <ChevronRight size={18} />
						</button>
					</div>
				</div>

				<div class="p-golden-md col-span-8 col-start-3 md:col-span-7 md:col-start-6">
					<figure class="">
						<img class="rounded-md shadow-md dark:hidden" src="images/import-dark.png" alt="" />
					</figure>
					<figure class="">
						<img class="hidden rounded-md shadow-md dark:block" src="images/import.png" alt="" />
					</figure>
				</div>
			</div>
			<!-- End Import -->

			<!-- Discover -->
			<div class="gap-x-golden-md mt-12 grid grid-cols-12 items-start">
				<div
					class="p-golden-md order-3 col-span-10 col-start-2 md:order-1 md:col-span-7 md:col-start-1"
				>
					<figure>
						<img class="rounded-md shadow-md dark:hidden" src="images/discover-dark.png" alt="" />
						<img class="hidden rounded-md shadow-md dark:block" src="images/discover.png" alt="" />
					</figure>
				</div>

				<div
					class="my-golden-md md:m-golden-xl order-1 col-span-12 md:order-2 md:col-span-5 md:col-start-8 md:mt-0"
				>
					<h2 class="text-center text-xl font-bold md:mt-10 md:text-left md:text-2xl lg:text-3xl">
						Discover Notes Based on Algorithm.
					</h2>
					<div
						class="flex flex-col text-center text-lg md:my-4 md:items-end md:text-left md:text-xl"
					>
						<p>Notes are ranked on based on rating, upvotes, and how recently they were viewed.</p>
						<div class="mt-4">
							<button class="btn btn-neutral"
								>See How Imports Work <ChevronRight size={18} />
							</button>
						</div>
					</div>
				</div>
			</div>
			<!-- End Discover -->
		</div>
	</div>
</section>
