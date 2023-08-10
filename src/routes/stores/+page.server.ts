import { Store } from '../../db/models/store';
import { Connect } from '../../db/client';
import type { IStore } from '../../db/models/store';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async() => {
  await Connect();
  const stores:IStore[] = await Store.find();
  return {stores: JSON.stringify(stores)}
};
