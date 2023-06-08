<script lang="ts">
  import {BillStore, type Bill, type Product} from '../../Store';
  import BillDetails from '$lib/BillDetails.svelte';
  import { Table, tableMapperValues, tableSourceMapper } from '@skeletonlabs/skeleton';
  import { Modal, modalStore } from '@skeletonlabs/skeleton';
  import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
  import type { TableSource } from '@skeletonlabs/skeleton';
  let bills: Bill[] = [];
  BillStore.subscribe((data) => bills = data);

  let billsTable: TableSource = {
    head: ['Date', 'Market'],
    body: tableMapperValues(bills, ['date', 'market']),
    meta: tableSourceMapper(bills, ['date', 'market', 'items']),
  };
  let modalComponent: ModalComponent = {
    ref: BillDetails,
    props: {},
  };

  const modal: ModalSettings = {
      type: 'component',
      component: modalComponent,
  };
  
  function selectHandler(event:CustomEvent) {
    modalComponent.props = {items: event.detail["items"]};
    modalStore.trigger(modal);
  }
</script>
<div class="m-3">
  <Table source={billsTable} interactive={true} on:selected={selectHandler} class="top-5"/>
  <Modal />
</div>
