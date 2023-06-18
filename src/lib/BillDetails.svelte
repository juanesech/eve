<script lang="ts">
  import { Table, tableMapperValues, modalStore } from '@skeletonlabs/skeleton';
  import type { TableSource } from '@skeletonlabs/skeleton';
  import type { Product } from '../Store';

  export let items:Product[];
  export let parent: any;
  let shoppingTable: TableSource = {
    head: ['Item', 'Price'],
    body: tableMapperValues(items, ['name', 'price']),
    foot: ['Total', String(items.reduce( (accum, currVal) => accum + currVal.price, 0))]
  };
  const cButton = 'fixed top-4 right-4 z-50 font-bold shadow-xl';
</script>
{#if $modalStore[0]}
	<button class="btn-icon variant-filled {cButton}" on:click={parent.onClose}>X</button>
	<div class="m-3">
    <Table source={shoppingTable}/>
  </div>
{/if}
