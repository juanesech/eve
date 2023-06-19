<script lang="ts">
  import StoreDetails from '$lib/StoreDetails.svelte';
  import {page} from '$app/stores';
  
  let storeName:string; 

  $: {
    storeName = $page.params.name 
    console.log("STORE NAME: ", storeName);
  }
</script>

<div class="m-3">
  <h1 class="h1">{storeName}</h1>
  <div>
    <h2 class="h2">Products</h2>
    <StoreDetails storeName={storeName} />
  </div>
</div>

