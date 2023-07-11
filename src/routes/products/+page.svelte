<script lang="ts">
  import type { PageServerData } from './$types';
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
  import type {Product} from '../../fauna/model';

  /*TODO
    Use chips for stores https://www.skeleton.dev/elements/chips
  */

  export let data: PageServerData;
  let sourceData:Product[] = data.products;
  $: productsTable = {
    head: ['Item', 'Stores'],
    body: tableMapperValues(sourceData, ['name']),
    meta: tableMapperValues(sourceData, ['name']),
  };
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
  <Table source={productsTable} interactive class="top-5"/>
</div>
