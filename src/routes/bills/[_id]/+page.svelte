<script lang="ts">
  import { bill } from '../store';
  import { page } from '$app/stores';
  
</script>
<div class="m-3">
  <div class="m-3">
    <h5 class="h5"><b>ID:</b> {$page.params._id}</h5>
    <h3 class="h3"><b>Date:</b> {$bill.date}</h3>
    <h3 class="h3"><b>Store:</b> {$bill.store.name}</h3>
  </div>
  <div class="m-3">
    <h3 class="h3">Products</h3>
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
