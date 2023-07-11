<script lang="ts">
  import type { PageServerData } from './$types';
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
  import type {Product} from '../../fauna/model';

  export let data: PageServerData;
  let sourceData:Product[] = data.products;
  $: productsTable = {
    head: ['Item', 'Price', 'Store'],
    body: tableMapperValues(sourceData, ['name', 'price', 'store']),
    meta: tableMapperValues(sourceData, ['name', 'price', 'store']),
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
