<script lang="ts">
  import type { PageServerData } from './$types';
  import type { Bill } from '../../fauna/model';
  import { goto } from '$app/navigation';
  import {bill as billStore} from './store';

  export let data: PageServerData;
  let sourceData: Bill[] = data.bills;
  console.log("DATA: ", sourceData);
  sourceData.forEach((bill) => {
    console.log(bill.store.name);
  })

  const handleBillClick = (billParam:Bill) => {
    billStore.set(billParam);
    goto(`/bills/${billParam._id}`);
  }

  const handleClick = (link:string) => {
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
          <th>Spent</th>
        </tr>
      </thead>
      <tbody>
        {#each sourceData as bill}
          <tr>
            <td on:click={() => handleBillClick(bill)}>
              {bill.date}
            </td>
            <td>
              <span class="chip variant-filled"
              on:click={() => handleClick(`/stores/${bill.store.name}`)}>
                {bill.store.name}
              </span>
            </td>
            <td>
              {bill.total}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
