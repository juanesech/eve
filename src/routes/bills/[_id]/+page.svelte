<script lang="ts">
  import { bill } from '../store';
  import { page } from '$app/stores';
  
</script>
<div class="m-3 container md mx-auto">
  <div class="m-3 container sm mx-auto card p-4">
    <h2 class="h2 mb-2"><b>{$bill.store.name}</b></h2>
    <h3 class="h5"><b>Date: </b>{$bill.date}</h3>
    <h5 class="h5"><code class="code">{$page.params._id}</code></h5>
  </div>
  <div class="table-container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {#each $bill.products.data as product}
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        {/each}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <td>{$bill.products.data.reduce((acc, curr) => acc + curr.price, 0 )}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
