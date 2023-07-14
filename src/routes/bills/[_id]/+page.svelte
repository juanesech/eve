<script lang="ts">
  import { bills, products } from '../store';
  import {page} from '$app/stores';

  let billId:string;
  $: billId = $page.params._id;
  $: bill = $bills.filter( bill => bill._id == billId)[0];
  
</script>
<div class="m-3">
  {bill._id}
  {bill.date}
  {bill.store.name}
  Products
  {bill.products}
  <div class="table-container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {#each $products as product}
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
