<script lang="ts">
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
  import type { TableSource } from '@skeletonlabs/skeleton';
  import type { PageServerData } from './$types';
  import { goto } from '$app/navigation'; 

  export let data: PageServerData;
  let storesTable: TableSource;

  const handleClick = ( value:CustomEvent ) => {
    console.log("CLICK HANDLER:", value);
    console.log(`EVENT DETAIL: /stores/${value.detail[0]}`)
    goto(`/stores/${value.detail[0]}`);
  }

  $: storesTable = {
      head: ['Name'],
      body: tableMapperValues(data.stores, ['name']),
      meta: tableMapperValues(data.stores, ['name']),
  }
  let filter = ""
  function handleFilterChange() {
    let filteredData = data.stores.filter( item => item.name.includes(filter));
    console.log(filteredData);
    data.stores = filteredData;
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

