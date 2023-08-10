import { Connect } from '../../db/client';
import type { IProduct } from '../../db/models/product';
import type { PageServerLoad } from './$types';
import Product from '../../db/models/product';


export const load: PageServerLoad = async() => {
  await Connect();
  const products:IProduct[] = await Product.find();
  return {products: JSON.stringify(products)}
};
