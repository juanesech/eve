<script lang="ts">
  import type { PageServerData } from './$types';
  import {page} from '$app/stores';
  
  export let data: PageServerData;
  let storeName:string; 
  $: storeName = $page.params.name;

</script>

<div class="m-3">
  <div class="m-8">
    <h1 class="h1">{storeName}</h1>
  </div>
  {#await data}
    Loading...
  {:then}
    <div class="m-10">
      <div class="mt-10">
        <h2 class="h2">Products</h2>
        <div>
          <nav class="list-nav">
            <ul>
            {#each data.products.data as { name } }
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
      </div>
    </div>
  {:catch error}
    {error.message}
  {/await}
</div>

