import type { Product } from '../../fauna/model';
import type { PageServerLoad } from './$types';
import { getProducts } from '../../fauna/helper/product';

export const load = (async () => {
  let products: Product[] = await getProducts();
  return {products};
}) satisfies PageServerLoad;
