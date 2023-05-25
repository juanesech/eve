<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, AppRailTile, AppRail } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	const selected = derived(page, $page => $page.url.pathname);
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="rounded-md" gridColumns="grid-cols-3" slotLead="place-content-center" slotDefault="place-self-start" slotTrail="place-content-end">
			<svelte:fragment slot="default">
			</svelte:fragment>
			<svelte:fragment slot="lead">
				<a href="/"><Icon icon="teenyicons:plant-solid"></Icon> Eve</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="lg:block right-2">
			<AppRail {selected}>
				<AppRailTile class="rounded-md" label="Board" href="/"><Icon icon="teenyicons:area-chart-alt-solid" /></AppRailTile>
				<AppRailTile class="rounded-md" label="Bills" href="/bills"><Icon icon="teenyicons:table-solid" /></AppRailTile>
				<AppRailTile class="rounded-md" label="Products" href="/products"><Icon icon="teenyicons:layers-solid" /></AppRailTile>
				<AppRailTile class="rounded-md" label="Shopping" href="/shopping"><Icon icon="teenyicons:bag-alt-solid" /></AppRailTile>
			</AppRail>
		</div>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot class="m-3"/>
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
