<script lang="ts">
	import { PUBLIC_DOCS_URL, PUBLIC_REPOSITORY_URL } from '$env/static/public';
	import { Button } from '$lib/components/ui/button/index.js';
	import Icon from '@iconify/svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		// Animate "stack" on mount
		gsap.fromTo(
			'.spatz-stack',
			{ opacity: 0 },
			{
				opacity: 1,
				x: 0,
				duration: 3,
				ease: 'power4.out'
			}
		);

		gsap.fromTo(
			'.spatz-stack-2',
			{ opacity: 0, x: -75 },
			{
				opacity: 1,
				x: 0,
				duration: 2,
				ease: 'power4.out'
			}
		);
	});
</script>

<div>
	<h1 class="text-7xl">
		<div class="spatz-stack flex items-center font-extrabold tracking-tight">
			<div>spatz</div>
			<!-- <div class="spatz-stack font-thin tracking-tighter text-foreground/[50%]">stack</div> -->
			<div class="spatz-stack-2 font-thin tracking-tighter text-foreground/[50%]">2</div>
		</div>
	</h1>
	<p class="mt-2">
		visit <a class="underline" href={PUBLIC_DOCS_URL}>docs</a> for more info
	</p>
	<div class="mt-2 flex w-full gap-2">
		<a
			href="https://github.com/new?template_name=spatz-2&template_owner=engageintellect"
			class="my-2 flex-1"
		>
			<Button variant="default" class="w-full bg-teal-500 hover:bg-teal-400">
				<div class="flex items-center gap-2">
					use template
					<Icon icon="mdi-download" class="h-5 w-5" />
				</div>
			</Button>
		</a>
		<a href={PUBLIC_REPOSITORY_URL} class="group/githubButton my-2 flex-1">
			<Button variant="outline" class="w-full">
				<div class="flex items-center gap-2">
					star on github
					<Icon
						icon="mdi-star"
						class="transition-color h-5 w-5 duration-500 md:group-hover/githubButton:text-yellow-500"
					/>
				</div>
			</Button>
		</a>
	</div>
</div>
