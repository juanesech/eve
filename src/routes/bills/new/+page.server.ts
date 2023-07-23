import type { Product, Store, Bill } from '../../../fauna/model';
import { getBills } from '../../../fauna/helper/bill';
import { getProducts } from '../../../fauna/helper/product';
import { getStores } from '../../../fauna/helper/store';
import type { PageServerLoad } from './$types';


export const load = (async () => {
  let products: Product[] = await getProducts();
  let stores: Store[] = await getStores();

  return {
    products,
    stores
  };

}) satisfies PageServerLoad;
