<script lang="ts">
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
  import type { TableSource } from '@skeletonlabs/skeleton';
  import type { PageServerData } from './$types';
  import type { IStore } from '../../db/models/store';
  import { goto } from '$app/navigation'; 

  export let data: PageServerData;
  let stores:IStore[] = JSON.parse(data.stores);
  let storesTable: TableSource;

  const handleClick = ( value:CustomEvent ) => {
    console.log("CLICK HANDLER:", value);
    console.log(`EVENT DETAIL: /stores/${value.detail[1]}`)
    goto(`/stores/${value.detail[1]}`);
  }

  $: storesTable = {
      head: ['Name'],
      body: tableMapperValues(stores, ['name']),
      meta: tableMapperValues(stores, ['name', '_id']),
  }
  let filter = ""
  function handleFilterChange() {
    let filteredData = stores.filter( item => item.name.includes(filter));
    console.log(filteredData);
    stores = filteredData;
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
