<script lang="ts">
	import heroImage from '$lib/assets/images/svelteHero.png?enhanced';
	import { Button } from '$lib/components/ui/button/index.js';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Icon from '@iconify/svelte';
	import { siteInfo } from '$lib/data';
	import WordsPullUp from '$lib/components/magic-ui/WordsPullUp.svelte';

	function scrollToAnchor() {
		const element = document.getElementById('anchorLink');
		// console.log(element);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	let heroHidden = true;

	onMount(() => {
		gsap
			.timeline({
				onStart: () => {
					heroHidden = false;
				}
			})
			.from('.animate-title', {
				duration: 2,
				opacity: 0,
				ease: 'power4.out',
				delay: 0
			})

			.from(
				'.animate-subtitle',
				{
					duration: 3,
					opacity: 0,
					ease: 'power4.out',
					delay: 0
				},
				'-=1.75'
			)

			.from(
				'.animate-buttons',
				{
					duration: 1,
					y: -10,
					opacity: 0,
					ease: 'power4.out',
					delay: 0
				},
				'-=2.75'
			)

			.from(
				'.animate-photo-background',
				{
					duration: 3,
					opacity: 0,
					ease: 'power4.out',
					delay: 0
				},
				'-=3'
			)

			.from(
				'.animate-photo',
				{
					duration: 1.5,
					opacity: 0,
					scale: 0.9,
					ease: 'power4.out',
					delay: 0
				},
				'-=3'
			)
			.from(
				'.animate-down-button',
				{
					duration: 3,
					opacity: 0,
					y: -10,
					scale: 0.0,
					ease: 'power4.out',
					delay: 0
				},
				'-=5'
			);
	});
</script>

<!-- TODO: Debug as to why this works, but throws an error -->
<!-- <svelte:head>
	<link rel="preload" as="image" href={heroImage} />
</svelte:head> -->

<div class={`mb-10 md:my-5 md:mb-20 ${heroHidden ? 'opacity-0' : ''}`}>
	<div
		class="flex w-full flex-col gap-2 rounded-lg transition-all duration-300 md:flex-row md:gap-5"
	>
		<div class="flex w-full flex-col rounded-l-lg p-5 md:max-w-lg md:p-10">
			<div class="mx-auto flex w-full flex-col items-center gap-5">
				<div
					class="animate-title w-full text-7xl font-bold lowercase tracking-tight transition-transform duration-300 lg:text-9xl"
				>
					<WordsPullUp class="text-7xl lg:text-8xl" words="spatz 2" />
				</div>
			</div>

			<div class="">
				<div class="animate-subtitle mt-2 text-2xl">
					<span class="text-orange-500">Back for round two</span>. This time with superforms,
					svelte-animations, and shadcn.
				</div>
			</div>

			<div class="animate-buttons mx-auto mt-10 flex w-full items-center gap-2 md:max-w-lg">
				<a href="/auth/register" class="group/bookingsButton w-full">
					<Button size="lg" class="flex w-full items-center gap-2">
						<div class="text-xl lowercase">get started</div>
						<Icon
							icon="material-symbols:rocket-launch"
							class="h-5 w-5 transition-transform duration-300 lg:group-hover/bookingsButton:rotate-45"
						/>
					</Button>
				</a>

				<a href="/auth/login" class="group/bookingsButton w-full">
					<Button size="lg" variant="outline" class="flex w-full items-center gap-2">
						<div class="text-xl lowercase">login</div>
						<Icon
							icon="mdi:arrow-right"
							class="h-5 w-5 transition-transform duration-300 lg:group-hover/bookingsButton:translate-x-1"
						/>
					</Button>
				</a>
			</div>
		</div>

		<div class="animate-photo-background relative w-full">
			<div
				class="pointer-events-none absolute left-0 h-full w-1/3 opacity-0 md:bg-fade-left md:opacity-100"
			></div>
			<div
				class="pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-fade-down opacity-100 md:opacity-0"
			></div>

			<div
				class="rounded-lg bg-gradient-to-b from-orange-500 to-yellow-500 md:rounded-none md:rounded-r-lg"
			>
				<div class="animate-photo">
					<enhanced:img
						src={heroImage}
						alt="logo"
						class="w-full animate-customBounce rounded-lg object-cover drop-shadow-lg md:h-full md:rounded-none md:rounded-r-lg"
					></enhanced:img>
				</div>
			</div>
		</div>
	</div>
	<div id="anchorLink" class="group/scrollDownButton mt-5 hidden w-full justify-center md:flex">
		<button
			on:click={scrollToAnchor}
			class="transition-all duration-300 md:group-hover/scrollDownButton:scale-[102%]"
			aria-label="Scroll Down"
		>
			<Icon
				icon="material-symbols:arrow-drop-down"
				class="animate-down-button h-16 w-16 animate-pulse"
			/>
		</button>
	</div>
</div>
