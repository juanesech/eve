<script lang="ts">
  import type { Store, Product } from '../fauna/model';
  import { onMount } from 'svelte';

  export let storeName:string;
  let store:Store;
  let productList:Product[];
  
  onMount(async () => {
    const response = await fetch(`/api/stores/${storeName}`);
    store = await response.json();
    console.log("STORE DATA", store);
  });

  $: productList = store.products.data;

</script>

<div>

  <nav class="list-nav">
    <ul>
    {#each productList as product}
      <li>
        <a href="#">
	  <span class="badge bg-primary-500">💀</span>
	  <span class="flex-auto">{product.name}</span>
	</a>
      </li>
    {/each}
    </ul>
  </nav>

</div>
