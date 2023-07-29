<script lang="ts">
  import type { PageServerData } from './$types';
  import type { Bill, Store, Product } from '../../../fauna/model';
  import {bill as billStore, products} from '../store';
  // import { newBill } from '../../../fauna/helper/bill';
  import type { NewBill} from '../../../fauna/helper/bill';
  import { Autocomplete } from '@skeletonlabs/skeleton';
  import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';

  export let data: PageServerData;
  let storeList: Store[] = data.stores;
  let productList: Product[] = data.products;
  let inputProduct:string = '';

  const productOptions: AutocompleteOption[] = productList.map(product => { 
      return {
        label: product.name,
        value: product,
        keywords: 'plain, basic',
      }
  });

  let selectedProducts:Product[] = [];

  const onSummit = async( bill:NewBill) => {
    console.log(bill)
  }

  const onProductSelection = (event: any): void => {
    let selectedProduct:Product = event.detail.value;
    if (!selectedProducts.includes(selectedProduct)) {
      selectedProducts = [...selectedProducts, selectedProduct];
    }
  }

  const onProductRemove = (product: Product): void => {
    selectedProducts = selectedProducts.filter(p => p!== product);
  }
	

</script>
<div class="m-3">
  <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
    <label class="label">
      <select class="select">
        {#each storeList as store}
          <option value={store}>{store.name}</option>
        {/each}
      </select>
    </label>
    <input type="date" class="rounded" />
  </div>
  <div class="mt-3 card w-full max-w-m max-h-48 p-4 overflow-y-auto">
    <input
      class="input"
      type="search"
      name="demo"
      bind:value={inputProduct}
      placeholder="Search a product..."/>
    <Autocomplete bind:input={inputProduct} options={productOptions} on:selection={onProductSelection} />
  </div>
  {#if selectedProducts.length > 0}
     <div class="mt-3 card w-full max-w-m p-4">
      <div>
        <ul class="list">
          {#each selectedProducts as product }
          <li class=" hover:variant-glass-tertiary">
            <button type="button" class="btn-icon btn-icon-sm variant-filled-error"
              on:click={ () => onProductRemove(product)}>
              <Icon width="30" height="30" icon="solar:close-circle-line-duotone" />
            </button>
            <span>
              {product.name} {product.price}
            </span>
          </li>
        {/each}
        </ul>
      </div>
    </div>
  {/if}
</div>
