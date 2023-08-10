<script lang="ts">
  import type { PageServerData } from './$types';
  import type { IProduct } from '../../db/models/product';
  import { goto } from '$app/navigation';

  export let data: PageServerData;
  let sourceData:IProduct[] = JSON.parse(data.products);
  console.log("DATA: ", sourceData);
  
  let filter = ""
  function handleFilterChange() {
    let filteredData = sourceData.filter( item => item.name.includes(filter));
    console.log(filteredData);
    sourceData = filteredData;
  }

  const handleClick = (storeName:string) => {
    goto(`/stores/${storeName}`);
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
  <div class="table-container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Product</th>
          <th>Stores</th>
        </tr>
      </thead>
      <tbody>
        {#each sourceData as product}
          <tr>
            <td>{product.name}</td>
            <!-- <td>
              {#each product.stores as store}
              <span class="chip variant-soft hover:variant-filled"
                on:click={() => handleClick(store)}
                on:keydown={() => handleClick(store.name)}>
                {store.name}
              </span>
              {/each}
            </td> -->
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
