<script lang="ts">
  import type { PageServerData } from './$types';
  import type { Bill, Product } from '../../fauna/model';
  import { goto } from '$app/navigation';
  import {bills as billStore, products as productStore} from './store';

  export let data: PageServerData;
  let sourceData: Bill[] = data.bills;
  billStore.set(sourceData);
  console.log("DATA: ", sourceData);
  sourceData.forEach((bill) => {
    console.log(bill.store.name);
  })

  const handleClick = (link:string, products: Product[]) => {
    productStore.set(products)
    goto(link);
  }
  
</script>
<div class="m-3">
  <div class="m-2">
    <button type="button" class="btn variant-filled">New bill</button>
  </div>
  <div class="table-container">
    <table class="table table-hover table-interactive">
      <thead>
        <tr>
          <th>Date</th>
          <th>Store</th>
        </tr>
      </thead>
      <tbody>
        {#each sourceData as bill}
          <tr>
            <td on:click={() => handleClick(`/bills/${bill._id}`, bill.products)}>
              {bill.date}
              </td>
            <td>
              <span class="chip variant-filled"
              on:click={() => handleClick(`/stores/${bill.store.name}`, [])}>
                {bill.store.name}
              </span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
