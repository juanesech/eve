<script lang="ts">
  import type { PageServerData } from './$types';
  import type { IStore } from '../../../db/models/store';
  
  export let data: PageServerData;
  let store:IStore = JSON.parse(data.store);
  console.log("DATA: ", store);

</script>

<div class="m-3">
  <div class="m-8">
    <h2 class="h2">{store.name}</h2>
  </div>
  <div class="m-10">
    <div class="mt-10">
      <h3 class="h3">Products</h3>
      <div>
        <nav class="list-nav">
          <ul>
          {#each store.products as { name } }
            <li>
              <a href="#">
                <span class="flex-auto">{name}</span>
              </a>
            </li>
          {/each}
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
