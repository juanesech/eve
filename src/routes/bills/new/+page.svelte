<script lang="ts">
  import type { PageServerData } from './$types';
  import type { Bill, Store, Product } from '../../../fauna/model';
  import {bill as billStore, products} from '../store';
  // import { newBill } from '../../../fauna/helper/bill';
  import type { NewBill} from '../../../fauna/helper/bill';
  import { Autocomplete } from '@skeletonlabs/skeleton';
  import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';

  export let data: PageServerData;
  let storeList: Store[] = data.stores;
  let productList: Product[] = data.products;
  let inputDemo:string = '';
  const productOptions: AutocompleteOption[] = productList.map(product => { 
      return {
        label: product.name,
        value: product,
        keywords: 'plain, basic',
      }
  });

  let selectedProducts:Product[] = [];

  const onSummit = async( bill:NewBill) => {
    console.log(bill);
    
  }


  function onProductSelection(event: any): void {
    console.log("EVENT:", event.detail);
    let selectedProduct:Product = event.detail.value;
    if (!selectedProducts.includes(selectedProduct)) {
      selectedProducts = [...selectedProducts, selectedProduct];
    }
  }
				
  
</script>
<div class="m-3">
  <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
    <select class="select">
      {#each storeList as store}
        <option value={store}>{store.name}</option>
      {/each}
    </select>
  </div>
  <input type="date" class="rounded" />
  <div class=" card w-full max-w-m max-h-48 p-4 overflow-y-auto">
    <input
      class="input"
      type="search"
      name="demo"
      bind:value={inputDemo}
      placeholder="Search a product..."/>
    <Autocomplete bind:input={inputDemo} options={productOptions} on:selection={onProductSelection} />
  </div>
  <div>
    {#each selectedProducts as product }
      <p>{product.name} {product.price}</p>
    {/each}
  </div>
</div>
