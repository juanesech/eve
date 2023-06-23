<script lang="ts">
  import StoreDetails from '$lib/StoreDetails.svelte';
  import {page} from '$app/stores';
  
  let storeName:string; 
  $: storeName = $page.params.name;
  
</script>

<div class="m-3">
  <div class="m-10">
    <h1 class="h1">{storeName}</h1>
  </div>
  <div class="m-10">
    <div class="mt-10">
      <h2 class="h2 mt-5">Products</h2>
      <StoreDetails storeName={storeName} />
    </div>
  </div>
</div>

