import { Store } from '../../db/models/store';
import { Client } from '../../db/client';
import type { IStore } from '../../db/models/store';
import type { PageServerLoad } from './$types';


export const load = (async () => {
  await Client();
  const stores:IStore[] = await Store.find();
  console.log("STORES RESPONSE: ", stores);
  return {stores};
}) satisfies PageServerLoad;
