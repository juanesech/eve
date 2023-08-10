import type { PageServerLoad } from './$types';
import { Store } from '../../../db/models/store';
import { Connect } from '../../../db/client';
import type { IStore } from '../../../db/models/store';


export const load: PageServerLoad = async({ params }) => {
  await Connect();
  const { _id } = params;
  const stores:IStore[] = await Store.find({_id: _id});
  return {store: JSON.stringify(stores[0])}
};
