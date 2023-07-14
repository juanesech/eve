import type { Product, Store, Bill } from '../../fauna/model';
import { getBills, getProducts, getStores } from '../../fauna/helper';
import type { PageServerLoad } from './$types';


export const load = (async () => {
  let products: Product[] = await getProducts();
  let stores: Store[] = await getStores();
  let bills: Bill[] = await getBills();

  return {
    products,
    stores,
    bills
  };

}) satisfies PageServerLoad;
