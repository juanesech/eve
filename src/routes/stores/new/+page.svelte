<script lang="ts">
  import type { PageServerData } from './$types';
  import { Autocomplete } from '@skeletonlabs/skeleton';
  import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';
  import type { IStore } from '../../../db/models/store';
  import { Store } from '../../../db/models/store';
	import { store } from '../../../Store';

  export let data: PageServerData;
  let storeList:IStore[] = JSON.parse(data.stores);
  // let productList: Product[] = data.products;
  let inputProduct:string = '';

  const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

  // const productOptions: AutocompleteOption[] = productList.map(product => { 
  //     return {
  //       label: product.name,
  //       value: product,
  //       keywords: 'plain, basic',
  //     }
  // });

  // let selectedProducts:Product[] = [];


  // const onProductSelection = (event: any): void => {
  //   let selectedProduct:Product = event.detail.value;
  //   if (!selectedProducts.includes(selectedProduct)) {
  //     selectedProducts = [...selectedProducts, selectedProduct];
  //   }
  // }

  // const onProductRemove = (product: Product): void => {
  //   selectedProducts = selectedProducts.filter(p => p!== product);
  // }
  $: formData = {
		name: '',
    addProducts: false,
    products: [],
	};

  const onSummit = async() => {
    console.log(formData.name, formData.addProducts)
    const doc = new Store();
    doc.name = formData.name;
    await doc.save();
  }
	

</script>
<div class="m-3">
  <div class="modal-example-form {cBase}">
      <form class="modal-form {cForm}">
        <label class="label">
          <span>Name</span>
          <input class="input" type="text" bind:value={formData.name} placeholder="Enter name..." />
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="checkbox" bind:checked={formData.addProducts}>
          <span>Add products</span>
        </label>
      </form>
      <footer class="modal-footer">
        <button class="btn" on:click={onSummit}>Submit</button>
      </footer>
  </div>
  <!-- <div class="mt-3 card w-full max-w-m max-h-48 p-4 overflow-y-auto">
    <input
      class="input"
      type="search"
      name="demo"
      bind:value={inputProduct}
      placeholder="Search a product..."/>
    <Autocomplete bind:input={inputProduct} options={productOptions} on:selection={onProductSelection} />
  </div> -->
  <!-- {#if selectedProducts.length > 0}
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
  {/if} -->
</div>
