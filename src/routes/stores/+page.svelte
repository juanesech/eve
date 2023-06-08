<script lang="ts">
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
  import type { TableSource } from '@skeletonlabs/skeleton';
  import type { Store } from '../../Store';
  import { onMount } from 'svelte';

  let sourceData:Store[] = [];
  let storesTable: TableSource;
  onMount(async () => {
    const response = await fetch(`/api/getStores`);
    let rsp = await response.json();
    sourceData = rsp.allStores.data;
  })
  $: (
    storesTable = {
      head: ['Name', 'Products'],
      body: tableMapperValues(sourceData, ['name', String(sourceData.reduce( (accum, currVal) => accum + currVal.products.length, 0))]),
      meta: tableMapperValues(sourceData, ['name', String(sourceData.reduce( (accum, currVal) => accum + currVal.products.length, 0))]),
    }
  )
  let filter = ""
  function handleFilterChange() {
    let filteredData = sourceData.filter( item => item.name.includes(filter));
    console.log(filteredData);
    sourceData = filteredData;
  }
</script>
<div class="m-3">
  <input
    class="input m-2 w-5/12"
    title="Filter"
    type="search"
    placeholder="Filter..."
    bind:value={filter}
    on:change={handleFilterChange}/>
  <Table source={storesTable} interactive class="top-5"/>
</div>

