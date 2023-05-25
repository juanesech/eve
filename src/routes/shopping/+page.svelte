<script lang="ts">
  import BillDetails from '$lib/BillDetails.svelte';
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
  import type { TableSource } from '@skeletonlabs/skeleton';
  import type { Item } from '../../Store';

  let sourceData:Item[] = [
    {name: "Queso philadelphia", price: 2.50, store: "Lidle"},
    {name: "Pan tajado", price: 2.70, store: "Carrefour"},
    {name: "Brocoli", price: 1, store: "Lidle"},
    {name: "Salsa BBQ", price: 1.25, store: "Lidle"},
    {name: "Ensalada", price: 2.80, store: "Mercadona"}
  ];
  let shoppingTable: TableSource = {
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
  <Table source={shoppingTable} interactive class="top-5"/>
</div>
