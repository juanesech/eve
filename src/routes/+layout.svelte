<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="lg:block right-2">
			<AppRail>
				<svelte:fragment slot="lead">
					<AppRailAnchor 
						href="/"
						title="Home"
						selected={$page.url.pathname === '/'}>
						Home
					</AppRailAnchor>
				</svelte:fragment>
					<AppRailAnchor href="/products" selected={$page.url.pathname === '/products'} title="Products">
						<svelte:fragment slot="lead">
							<Icon icon="teenyicons:layers-solid" />
						</svelte:fragment>
						<span>Products</span>
					</AppRailAnchor>
					<AppRailAnchor href="/stores" title="stores" selected={$page.url.pathname === '/stores'}>
						<svelte:fragment slot="lead">
							<Icon icon="teenyicons:bag-alt-solid" />
						</svelte:fragment>
						<span>Stores</span>
					</AppRailAnchor>
					<AppRailAnchor href="/bills" title="bills" selected={$page.url.pathname === '/bills'}>
						<svelte:fragment slot="lead">
							<Icon icon="teenyicons:table-solid"/>
						</svelte:fragment>
						<span>Bills</span>
					</AppRailAnchor>
					<AppRailAnchor>
						<svelte:fragment>
							<LightSwitch/>
						</svelte:fragment>
					</AppRailAnchor>
			</AppRail>
		</div>
	</svelte:fragment>
	<slot class="m-3"/>
</AppShell>
