<script lang="ts">
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
  import type { TableSource } from '@skeletonlabs/skeleton';
  import type { Store } from '../../fauna/model';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation'; 

  let sourceData:Store[] = [];
  let storesTable: TableSource;
  onMount(async () => {
    const response = await fetch(`/api/stores`);
    sourceData = await response.json();

    console.log("STORES DATA", sourceData);
  })

  const handleClick = ( value:CustomEvent ) => {
    console.log("CLICK HANDLER:", value);
    console.log(`EVENT DETAIL: /stores/${value.detail[0]}`)
    goto(`/stores/${value.detail[0]}`);
  }

  $: storesTable = {
      head: ['Name'],
      body: tableMapperValues(sourceData, ['name']),
      meta: tableMapperValues(sourceData, ['name']),
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
  <Table source={storesTable} interactive on:selected={handleClick} class="top-5"/>
</div>

