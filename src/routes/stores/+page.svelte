<script lang="ts">
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
  import type { TableSource } from '@skeletonlabs/skeleton';
  import type { Store } from '../../fauna/model';
  import { onMount } from 'svelte';

  let sourceData:Store[] = [];
  let storesTable: TableSource;
  onMount(async () => {
    const response = await fetch(`/api/stores`);
    sourceData = await response.json();

    let storeDataRsp = await fetch(`/api/stores/Lidle`);
    let storeData = await storeDataRsp.json();
    console.log("STORE DATA", storeData);
  })
  $: storesTable = {
      head: ['Name', 'Products'],
      //body: tableMapperValues(sourceData, ['name', String(sourceData.reduce( (accum, currVal) => accum + currVal.products.data.length, 0))]),
      body: tableMapperValues(sourceData, ['name', '<p>{products.data.length}</p>']),
      //meta: tableMapperValues(sourceData, ['name', String(sourceData.reduce( (accum, currVal) => accum + currVal.products.data.length, 0))]),
      meta: tableMapperValues(sourceData, ['name', 'products']),
  }
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

