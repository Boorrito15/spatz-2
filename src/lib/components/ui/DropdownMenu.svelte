<script lang="ts">
	import Book from 'lucide-svelte/icons/book';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import Github from 'lucide-svelte/icons/github';
	import LifeBuoy from 'lucide-svelte/icons/life-buoy';
	import LogOut from 'lucide-svelte/icons/log-out';
	import Settings from 'lucide-svelte/icons/settings';
	import User from 'lucide-svelte/icons/user';
	import { pb } from '$lib/pocketbase';
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import Avatar from '$lib/components/ui/Avatar.svelte';

	import { PUBLIC_POCKETBASE_ADMIN } from '$env/static/public';

	import { currentUser } from '$lib/stores/user';

	function handleLogout() {
		pb.authStore.clear();
		// Clear AI chat messages
		// chatMessages.set([]);
		localStorage.removeItem('chatMessages');
		goto('/');
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} class="rounded-full p-0">
			<Avatar />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="mt-3 w-fit max-w-64 bg-background" align="end">
		<DropdownMenu.Label class=" p-0">
			<DropdownMenu.Item class="">
				<a
					href="/my/settings/profile"
					data-sveltekit-preload-data="hover"
					class="flex w-full items-center gap-2"
				>
					<Avatar />
					<div class="truncate">
						<h3 class="overflow-hidden text-ellipsis text-base">@{$currentUser.username}</h3>
						<p class="overflow-hidden text-ellipsis text-xs font-thin text-foreground/70">
							{$currentUser.email}
						</p>
					</div>
				</a>
			</DropdownMenu.Item>
		</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<a
					href="/my/settings/profile"
					data-sveltekit-preload-data="hover"
					class="flex w-full items-center"
				>
					<User class="mr-2 h-4 w-4" />
					<span>Profile</span>
				</a>
				<!-- <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut> -->
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<a
					href="/my/settings/account"
					data-sveltekit-preload-data="hover"
					class="flex w-full items-center"
				>
					<Settings class="mr-2 h-4 w-4" />
					<span>Account</span>
				</a>
				<!-- <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut> -->
			</DropdownMenu.Item>

			<DropdownMenu.Item>
				<a
					href="/my/settings/security"
					data-sveltekit-preload-data="hover"
					class="flex w-full items-center"
				>
					<CreditCard class="mr-2 h-4 w-4" />
					<span>Security</span>
				</a>
				<!-- <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut> -->
			</DropdownMenu.Item>

			<!-- <DropdownMenu.Item>
				<Keyboard class="mr-2 h-4 w-4" />
				<span>Keyboard shortcuts</span>
				<DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
			</DropdownMenu.Item> -->
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<!-- <Users class="mr-2 h-4 w-4" /> -->
				<a
					href="/guestbook"
					data-sveltekit-preload-data="hover"
					class="flex w-full w-full items-center"
				>
					<Icon icon="material-symbols:dynamic-feed" class="mr-2 h-4 w-4" />
					<span>Guestbook</span>
				</a>
			</DropdownMenu.Item>

			<DropdownMenu.Item>
				<a
					href="/ai/chat"
					data-sveltekit-preload-data="hover"
					class="flex w-full w-full items-center"
				>
					<Icon icon="tabler:brain" class="mr-2 h-4 w-4" />
					<span>AI</span>
				</a>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<a href={PUBLIC_POCKETBASE_ADMIN} class="flex w-full w-full items-center">
					<Icon icon="simple-icons:pocketbase" class="mr-2 h-4 w-4" />
					<span>PocketBase</span>
				</a>
			</DropdownMenu.Item>
			<!-- 
			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>
					<UserPlus class="mr-2 h-4 w-4" />
					<span>Invite users</span>
				</DropdownMenu.SubTrigger>
				<DropdownMenu.SubContent>
					<DropdownMenu.Item>
						<Mail class="mr-2 h-4 w-4" />
						<span>Email</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<MessageSquare class="mr-2 h-4 w-4" />
						<span>Message</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<CirclePlus class="mr-2 h-4 w-4" />
						<span>More...</span>
					</DropdownMenu.Item>
				</DropdownMenu.SubContent>
			</DropdownMenu.Sub>
			<DropdownMenu.Item>
				<Plus class="mr-2 h-4 w-4" />
				<span>New Team</span>
				<DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
			</DropdownMenu.Item> -->
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item>
			<a
				href="https://github.com/engageintellect/spatz-2"
				target="_blank"
				class="flex w-full items-center"
			>
				<Github class="mr-2 h-4 w-4" />
				<span>GitHub</span>
			</a>
		</DropdownMenu.Item>
		<DropdownMenu.Item>
			<a
				href="https://github.com/engageintellect/spatz-2/issues/new/choose"
				target="_blank"
				class="flex w-full items-center"
			>
				<LifeBuoy class="mr-2 h-4 w-4" />
				<span>Support</span>
			</a>
		</DropdownMenu.Item>
		<DropdownMenu.Item>
			<a
				href="https://github.com/engageintellect/spatz-2/blob/main/README.md"
				target="_blank"
				class="flex w-full items-center"
			>
				<Book class="mr-2 h-4 w-4" />
				<!-- <Icon icon="material-symbols:docs-outline" class="mr-2 h-5 w-5" /> -->
				<span>Docs</span>
			</a>
		</DropdownMenu.Item>
		<DropdownMenu.Separator />
		<DropdownMenu.Item>
			<form
				class="flex w-full"
				method="POST"
				action="/auth/logout"
				on:submit={handleLogout}
				aria-label="Logout"
			>
				<button type="submit" class="flex w-full items-center">
					<LogOut class="mr-2 h-4 w-4" />
					<span>Logout</span>
				</button>
			</form>

			<!-- <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut> -->
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
