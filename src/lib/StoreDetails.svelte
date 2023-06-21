<script lang="ts">
  import type { Store as StoreType, Product } from '../fauna/model';
  import { onMount } from 'svelte';
  import { store } from '../Store';

  export let storeName:string;
  //let productList:Product[] = [];
  
  onMount(async () => {
    console.log("START onMount");
    const response = await fetch(`/api/stores/${storeName}`);
    let storeData:StoreType = await response.json();
    store.set(storeData);
    console.log("STORE DATA FROM DETAILS", storeData);
  });

  //$: productList = $store.products.data;

</script>

<div>
  <nav class="list-nav">
    <ul>
    {#each $store.products.data as { name } }
      <li>
        <a href="#">
      	  <span class="badge bg-primary-500">💀</span>
      	  <span class="flex-auto">{name}</span>
      	</a>
      </li>
    {/each}
    </ul>
  </nav>
</div>
